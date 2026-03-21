// @mui
import { Card, CardProps, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
// utils
// theme
import { ColorSchema } from "../../theme/palette";
import { fShortenNumber } from "../../utils/formatNumber";
import Iconify from "../Iconify";
// components

// ----------------------------------------------------------------------

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: number;
  icon: string;
  color?: ColorSchema;
}

export default function AnalyticsWidgetSummary({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}: Props) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <IconWrapperStyle
        sx={{
          color: (theme: any) => theme.palette[color].dark,
          backgroundImage: (theme: any) =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{fShortenNumber(total)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
