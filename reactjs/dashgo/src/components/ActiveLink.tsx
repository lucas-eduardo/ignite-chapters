import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMathExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMathExactHref = false,
  ...rest
}: IActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMathExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (!shouldMathExactHref &&
    (asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'purple.400' : 'gray.50'
      })}
    </Link>
  )
}