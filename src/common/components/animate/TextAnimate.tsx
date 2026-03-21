import { m } from "framer-motion";
// @mui
import { Box, BoxProps } from "@mui/material";
import type { ComponentProps } from "react";
// variants
import { varFade } from "./variants";

// ----------------------------------------------------------------------

type Props = BoxProps & ComponentProps<typeof m.div>;

interface TextAnimateProps extends Props {
  text: string;
  variants?: any;
  sx?: any;
}

export default function TextAnimate({
  text,
  variants,
  sx,
  ...other
}: TextAnimateProps) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: "h1",
        overflow: "hidden",
        display: "inline-flex",
        ...sx,
      }}
      {...other}
    >
      {text.split("").map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
