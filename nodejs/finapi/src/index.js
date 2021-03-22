const { request } = require('express');
const express = require('express');
const { v4: uuidV4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

function verifyIdExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers;

  const customer = customers.find(customer => customer.cpf === cpf);

  if (!customer) {
    return res.status(400).json({ error: 'Customer not found' });
  }

  req.customer = customer;

  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return acc + operation.amount;
    }

    return acc - operation.amount;
  }, 0);

  return balance;
}

app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

  if (customerAlreadyExists) {
    return res.status(400).json({ error: 'Customer already exists' });
  }

  customers.push({
    cpf,
    name,
    id: uuidV4(),
    statement: []
  });

  return res.status(201).send();
});

app.use(verifyIdExistsAccountCPF);

app.get('/statement', ({ customer }, res) => {
  return res.json(customer.statement);
});

app.post('/deposit', ({ customer, body }, res) => {
  const { description, amount } = body;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: 'credit'
  }

  customer.statement.push(statementOperation);

  return res.status(201).send();
});

app.post('/withdraw', ({ customer, body }, res) => {
  const { amount } = body;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return res.status(400).json({ error: 'Insufficient funds!' });
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: 'debit'
  }

  customer.statement.push(statementOperation);

  return res.status(201).send();
});

app.get('/statement/date', ({ customer, query }, res) => {
  const { date } = query;

  const dateFormat = new Date(date + ' 00:00');

  const statement = customer.statement.filter(({ created_at }) =>
    created_at.toDateString() === new Date(dateFormat).toDateString()
  )

  return res.json(statement);
});

app.put('/account', ({ customer, body }, res) => {
  const { name } = body;

  customer.name = name;

  return res.status(201).send();
});

app.get('/account', ({ customer }, res) => {
  return res.json(customer);
});

app.delete('/account', ({ customer }, res) => {
  customers.splice(customer, 1);

  return res.status(204).send();
});

app.get('/balance', ({ customer }, res) => {
  const balance = getBalance(customer.statement);

  return res.json({ balance });
});

app.listen(3333);
