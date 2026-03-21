import { Container, Card } from "@mui/material";
import AnalyticsHeader from "./components/AnalyticsHeader";
import Page from "src/common/components/Page";
import { BREADCUMBS } from "src/common/constants/common.constants";
import useSettings from "src/common/hooks/useSettings";
import UserAnalyticsDashboard from "./components/OverviewAnalyticsUser";

export default function Index() {
  const { themeStretch } = useSettings();
  return (
    <Page title={BREADCUMBS.STATISTICAL_USER}>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <AnalyticsHeader />
        <Card>
          <UserAnalyticsDashboard />
        </Card>
      </Container>
    </Page>
  );
}
