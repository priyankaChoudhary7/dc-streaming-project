import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import Link, { LinkProps } from "@mui/material/Link";

export default function DcNavigationLink({
  sx,
  children,
  ...others
}: LinkProps & RouterLinkProps) {
  return (
    <Link
      {...others}
      component={RouterLink}
      sx={{ color: "text.primary", textDecoration: "none", ...sx }}
    >
      {children}
    </Link>
  );
}
