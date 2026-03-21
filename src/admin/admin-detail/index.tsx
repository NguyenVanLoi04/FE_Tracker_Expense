import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import AdminDetailHeader from "./AdminDetailHeader";
import AdminDetailForm from "./AdminDetailForm";

export default function AdminDetail() {
  const { themeStretch } = useSettings();
  return (
    <>
      <Page title="User List">
        <Container maxWidth={themeStretch ? false : "lg"}>
          <AdminDetailHeader />
          <AdminDetailForm />
        </Container>
      </Page>
    </>
  );
}
