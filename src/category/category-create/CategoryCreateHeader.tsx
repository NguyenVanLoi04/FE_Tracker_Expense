import HeaderBreadcrumbs from "src/common/components/HeaderBreadcrumbs";
import { BREADCUMBS } from "src/common/constants/common.constants";
import { PATH_DASHBOARD } from "src/common/routes/paths";

export default function CategoryCreateHeader() {
  return (
    <HeaderBreadcrumbs
      heading={BREADCUMBS.CATEGORY_CREATE}
      links={[
        { name: BREADCUMBS.DASHBOARD, href: PATH_DASHBOARD.root },
        {
          name: BREADCUMBS.CATEGORY_MANAGEMENT,
          href: PATH_DASHBOARD.statistic.root,
        },
        { name: BREADCUMBS.CATEGORY_CREATE },
      ]}
    />
  );
}
