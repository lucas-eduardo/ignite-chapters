import { Button } from "@chakra-ui/react";

interface IPaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ number, isCurrent = false, onPageChange }: IPaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="purple"
        disabled
        _disabled={{
          bg: 'purple.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}