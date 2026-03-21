import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import CategoryCreateHeader from "./CategoryCreateHeader";
import CategoryCreateForm from "./CategoryCreateForm";

export default function CategoryCreate() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Danh mục">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <CategoryCreateHeader />
        <CategoryCreateForm />
      </Container>
    </Page>
  );
}
