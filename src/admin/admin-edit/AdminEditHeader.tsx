import HeaderBreadcrumbs from "src/common/components/HeaderBreadcrumbs";
import { BREADCUMBS } from "src/common/constants/common.constants";
import { PATH_DASHBOARD } from "src/common/routes/paths";

export default function AdminEditHeader() {
  return (
    <HeaderBreadcrumbs
      heading={BREADCUMBS.AGENT_CREATE}
      links={[
        { name: BREADCUMBS.DASHBOARD, href: PATH_DASHBOARD.root },
        {
          name: BREADCUMBS.AGENT_MANAGEMENT,
          href: PATH_DASHBOARD.agentManage.list,
        },
        { name: BREADCUMBS.AGENT_CREATE },
      ]}
    />
  );
}
