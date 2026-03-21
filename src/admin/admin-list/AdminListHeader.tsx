import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderBreadcrumbs from "src/common/components/HeaderBreadcrumbs";
import Iconify from "src/common/components/Iconify";
import { BREADCUMBS } from "src/common/constants/common.constants";
import { PATH_DASHBOARD } from "src/common/routes/paths";

export default function AdminListHeader() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBreadcrumbs
        heading={BREADCUMBS.AGENT_LIST}
        links={[
          { name: BREADCUMBS.DASHBOARD, href: PATH_DASHBOARD.root },
          {
            name: BREADCUMBS.AGENT_MANAGEMENT,
            href: PATH_DASHBOARD.statistic.root,
          },
          { name: BREADCUMBS.AGENT_LIST },
        ]}
        action={
          <>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={() => {
                navigate(PATH_DASHBOARD.agentManage.new);
              }}
            >
              {BREADCUMBS.AGENT_CREATE}
            </Button>
          </>
        }
      />
    </>
  );
}
