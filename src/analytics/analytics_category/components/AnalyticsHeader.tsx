import { useNavigate } from "react-router-dom";
import HeaderBreadcrumbs from "src/common/components/HeaderBreadcrumbs";
import { BREADCUMBS } from "src/common/constants/common.constants";
import { PATH_DASHBOARD } from "src/common/routes/paths";

export default function AnalyticsHeader() {
  const navigate = useNavigate();

  return (
    <HeaderBreadcrumbs
      heading={BREADCUMBS.STATISTICAL_CATEGORY}
      links={[
        { name: BREADCUMBS.DASHBOARD, href: PATH_DASHBOARD.root },
        {
          name: BREADCUMBS.STATISTICAL_MANAGEMENT,
          href: PATH_DASHBOARD.statistic.root,
        },
        { name: BREADCUMBS.STATISTICAL_CATEGORY },
      ]}
    />
  );
}
