import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import CategoryEditHeader from "./CategoryEditHeader";
import CategoryEditForm from "./CategoryEditForm";

export default function CategoryEdit() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Danh mục chỉnh sửa">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <CategoryEditHeader />
        <CategoryEditForm />
      </Container>
    </Page>
  );
}
