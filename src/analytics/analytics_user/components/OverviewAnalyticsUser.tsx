import { Paper, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CONVERT_VIETNAMESE } from "src/analytics/enum";
import { renderBarChartData } from "src/analytics/until";
import AppAreaIntalledNewVersion from "src/common/components/analytics/AppAreaIntalledNewVersion";
import AppCurrentDownload from "../../../common/components/analytics/AppCurrentDownload";
import FilterStatisticUser from "./FilterStatisticUser";

export default function UserAnalyticsDashboard() {
  const theme = useTheme();

  const mockOverviewUser = {
    NOT_LOGGED_IN: 120,
    LOGGED_IN: 340,
  };

  const mockLineChartUser = [
    { date: "01/12", LOGGED_IN: 30, NOT_LOGGED_IN: 10 },
    { date: "02/12", LOGGED_IN: 50, NOT_LOGGED_IN: 20 },
    { date: "03/12", LOGGED_IN: 40, NOT_LOGGED_IN: 15 },
    { date: "04/12", LOGGED_IN: 60, NOT_LOGGED_IN: 25 },
  ];

  const chartLabels = mockLineChartUser.map((i) => i.date);
  const dataBarChart = renderBarChartData(mockLineChartUser);

  const chartData = [
    { label: "Chưa đăng nhập", value: mockOverviewUser.NOT_LOGGED_IN },
    { label: "Đã đăng nhập", value: mockOverviewUser.LOGGED_IN },
  ];

  return (
    <Stack spacing={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack direction="row" spacing={3}>
          <Stack flex={3}>
            <FilterStatisticUser handleSearch={() => {}} />
          </Stack>

          <Stack sx={{ width: "60%" }}>
            <AppCurrentDownload
              title="Tổng quan dữ liệu"
              chartColors={[
                theme.palette.primary.light,
                theme.palette.primary.main,
              ]}
              chartData={chartData}
            />
          </Stack>
        </Stack>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <AppAreaIntalledNewVersion
          title="Thống kê trạng thái người dùng theo ngày"
          chartLabels={chartLabels}
          chartData={Object.entries(dataBarChart)
            .filter(([key]) => key !== "All")
            .map(([key, value]) => ({
              name:
                key === CONVERT_VIETNAMESE.LOGGEDIN
                  ? "Đã đăng nhập"
                  : "Chưa đăng nhập",
              data: value,
            }))}
          isBarChart
        />
      </Paper>
    </Stack>
  );
}
