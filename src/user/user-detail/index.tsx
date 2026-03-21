import { Container } from "@mui/material";
import Page from "src/common/components/Page";
import useSettings from "src/common/hooks/useSettings";
import UserDetailHeader from "./UserDetailHeader";
import UserDetailForm from "./UserDetailForm";

export default function UserDetail() {
  const { themeStretch } = useSettings();
  return (
    <>
      <Page title="User List">
        <Container maxWidth={themeStretch ? false : "lg"}>
          <UserDetailHeader />
          <UserDetailForm />
        </Container>
      </Page>
    </>
  );
}
