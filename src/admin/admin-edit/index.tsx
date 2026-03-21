import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import AdminEditHeader from "./AdminEditHeader";
import AdminEditForm from "./AdminEditForm";

export default function AdminEdit() {
  const { themeStretch } = useSettings();
  return (
    <>
      <Page title="User List">
        <Container maxWidth={themeStretch ? false : "lg"}>
          <AdminEditHeader />
          <AdminEditForm />
        </Container>
      </Page>
    </>
  );
}
