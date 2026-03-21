import HeaderBreadcrumbs from "src/common/components/HeaderBreadcrumbs";
import { BREADCUMBS } from "src/common/constants/common.constants";
import { PATH_DASHBOARD } from "src/common/routes/paths";

export default function UserDetailHeader() {
  return (
    <HeaderBreadcrumbs
      heading={BREADCUMBS.USER_DETAIL}
      links={[
        { name: BREADCUMBS.DASHBOARD, href: PATH_DASHBOARD.root },
        {
          name: BREADCUMBS.USER_MANAGEMENT,
          href: PATH_DASHBOARD.userManagement.list,
        },
        { name: BREADCUMBS.USER_DETAIL },
      ]}
    />
  );
}
