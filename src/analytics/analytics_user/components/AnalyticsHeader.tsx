import { useTranslation } from "react-i18next";
import useMessage from "src/common/hooks/useMessage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Iconify from "src/common/components/Iconify";
import { BREADCUMBS } from "src/common/constants/common.constants";
import { PATH_DASHBOARD } from "src/common/routes/paths";
import HeaderBreadcrumbs from "src/common/components/HeaderBreadcrumbs";

export default function AnalyticsHeader() {
  const navigate = useNavigate();

  return (
    <HeaderBreadcrumbs
      heading={BREADCUMBS.STATISTICAL_USER}
      links={[
        { name: BREADCUMBS.DASHBOARD, href: PATH_DASHBOARD.root },
        {
          name: BREADCUMBS.STATISTICAL_USER,
          href: PATH_DASHBOARD.statistic.root,
        },
        { name: BREADCUMBS.STATISTICAL_USER },
      ]}
    />
  );
}
