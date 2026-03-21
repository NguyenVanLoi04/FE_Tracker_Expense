import { Container, Card } from "@mui/material";
import AnalyticsHeader from "./components/AnalyticsHeader";
import Page from "src/common/components/Page";
import { BREADCUMBS } from "src/common/constants/common.constants";
import useSettings from "src/common/hooks/useSettings";
import CategoryAnalyticsDashboard from "./components/OverviewAnalyticsCategory";

export default function Index() {
  const { themeStretch } = useSettings();
  return (
    <Page title={BREADCUMBS.STATISTICAL_CATEGORY}>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <AnalyticsHeader />
        <Card>
          <CategoryAnalyticsDashboard />
        </Card>
      </Container>
    </Page>
  );
}
