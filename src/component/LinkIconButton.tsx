import type { LinkProps } from "@mui/material/Link";
import Link from "@mui/material/Link";
import { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";

type RouterLinkProps = typeof RouterLink;

type LinkIconButtonProps = LinkProps<
  RouterLinkProps,
  { component?: RouterLinkProps; disabled?: boolean }
>;

const LinkIconButton = (props: LinkIconButtonProps) => {
  const { to, children, disabled, ...rest } = props;

  if (disabled) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <Link component={RouterLink} to={to} {...rest}>
      {children}
    </Link>
  );
};

export default LinkIconButton;
