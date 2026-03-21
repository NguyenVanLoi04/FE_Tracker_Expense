import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import AdminListHeader from "./admin-list/AdminListHeader";
import AdminTable from "./admin-list/AdminTable";

export default function ListAdmin() {
  const { themeStretch } = useSettings();

  return (
    <>
      <Page title="User List">
        <Container maxWidth={themeStretch ? false : "lg"}>
          <AdminListHeader />
          <AdminTable />
        </Container>
      </Page>
    </>
  );
}
