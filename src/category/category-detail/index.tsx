import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import CategoryDetailForm from "./CategoryDetailForm";
import CategoryDetailHeader from "./CategoryDetailHeader";

export default function CategoryDetail() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Danh mục chi tiết">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <CategoryDetailHeader />
        <CategoryDetailForm />
      </Container>
    </Page>
  );
}
