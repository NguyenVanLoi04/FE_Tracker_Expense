import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import UserListHeader from "./user-list/UserListHeader";
import UserTable from "./user-list/UserTable";

export default function UserList() {
  const { themeStretch } = useSettings();
  return (
    <>
      <Page title="User List">
        <Container maxWidth={themeStretch ? false : "lg"}>
          <UserListHeader />
          <UserTable />
        </Container>
      </Page>
    </>
  );
}
