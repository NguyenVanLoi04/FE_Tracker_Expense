import merge from "lodash/merge";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
// @mui
import { Box, CardHeader, CardProps } from "@mui/material";
// utils
import { BaseOptionChart } from "../chart";
import { generateHSLColors } from "src/common/utils/generateHSLColors";
// components

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chartLabels: string[];
  labelXAxis?: string;
  labelYAxis?: string;
  chartColors?: string[];
  chartData: {
    name: string;
    data: number[];
  }[];
  isBarChart?: boolean;
}

export default function AppAreaIntalledNewVersion({
  title,
  subheader,
  chartLabels,
  chartData,
  labelXAxis,
  labelYAxis,
  isBarChart = false,
  chartColors,
  ...other
}: Props) {
  const [seriesData, setSeriesData] = useState("2019");

  const handleChangeSeriesData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: chartLabels,
      title: { text: labelXAxis },
    },
    yaxis: {
      title: { text: labelYAxis },
      min: 0,
      forceNiceScale: true,
      tickAmount: 5,
    },
    chart: {
      type: isBarChart ? "bar" : "line",
      stacked: isBarChart,
      toolbar: {
        show: true,
        // offsetX: 30,
        offsetY: -50,
        export: {
          csv: {
            headerCategory: labelXAxis,
            columnDelimiter: ",",
            headerValue: "value",
          },
        },
      },
      zoom: {
        enabled: true,
        type: "x",
      },
    },
    plotOptions: isBarChart
      ? {
          bar: {
            columnWidth: "40px",
          },
        }
      : {},
  });

  return (
    <Box {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
        <ReactApexChart
          type={isBarChart ? "bar" : "line"}
          series={chartData}
          options={chartOptions}
          height={370}
        />
      </Box>
    </Box>
  );
}
