import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, BoxProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "./Image";

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
  isCollapse?: boolean;
}

export default function Logo({
  disabledLink = false,
  isCollapse = false,
  sx,
}: Props) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );
  const logoSrc = isCollapse
    ? "/images/ldlLogo-image.png"
    : "/images/ldlLogo-image.png";
  const logo = (
    <Box sx={{ width: 100, height: 50, ...sx }}>
      <Image
        src={logoSrc}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain", // 👈 giữ full ảnh, không méo
        }}
      />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
