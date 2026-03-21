import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import AdminCreateHeader from "./AdminCreateHeader";
import AdminCreateForm from "./AdminCreateForm";

export default function AdminEdit() {
  const { themeStretch } = useSettings();
  return (
    <>
      <Page title="User List">
        <Container maxWidth={themeStretch ? false : "lg"}>
          <AdminCreateHeader />
          <AdminCreateForm />
        </Container>
      </Page>
    </>
  );
}
