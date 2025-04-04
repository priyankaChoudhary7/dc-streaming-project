import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`}>
      <Box
        component="img"
        alt="DC Logo"
        src="/assets/durham-college.webp"
        width={57}
        height={40}
        sx={{
          ...sx,
        }}
      />
    </RouterLink>
  );
}
