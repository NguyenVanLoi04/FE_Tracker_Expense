import HeaderBreadcrumbs from "src/common/components/HeaderBreadcrumbs";
import Page from "src/common/components/Page";
import { BREADCUMBS } from "src/common/constants/common.constants";
import { PATH_DASHBOARD } from "src/common/routes/paths";
import CategoryListHeader from "./category-list/CategoryListHeader";
import useSettings from "src/common/hooks/useSettings";
import { Container } from "@mui/material";
import CategoryTable from "./category-list/CategoryTable";

export default function ListCategory() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Danh mục">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <CategoryListHeader />
        <CategoryTable />
      </Container>
    </Page>
  );
}
