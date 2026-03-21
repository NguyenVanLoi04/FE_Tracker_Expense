// @mui
import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "src/common/components/Image";
import Page from "src/common/components/Page";
import useAuth from "src/common/hooks/useAuth";
import { default as useMessage } from "src/common/hooks/useMessage";
import useResponsive from "src/common/hooks/useResponsive";
import vn from "../../common/locales/vn";
import { dispatch } from "../../common/redux/store";
import LoginForm from "./component/LoginForm";
import { isExpiredSelector, setIsExpired } from "./login.slice";
import { useTestApi } from "./hook/useTestApi";
const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "656px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 5),
  padding: "0!important",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  // padding: theme.spacing(12, 0),
}));

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive("up", "sm");
  const { mutate } = useTestApi();
  const mdUp = useResponsive("up", "md");
  const { showErrorSnackbar } = useMessage();

  const expired = useSelector(isExpiredSelector);
  useEffect(() => {
    if (expired) {
      showErrorSnackbar(vn.expired);
      dispatch(setIsExpired(false));
    }
  }, [expired]);

  return (
    <Page title="Login">
      <RootStyle>
        {mdUp && (
          <Container
            sx={{
              width: mdUp ? "50%" : "100%",
              height: "100vh",
              margin: 0,
            }}
          >
            <Image
              visibleByDefault
              disabledEffect
              src="/images/ldlLogo.png"
              alt="login"
            />
          </Container>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              sx={{
                mb: 5,
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{ flexGrow: 1, justifyItems: "space-between" }}
              >
                <Typography variant="h4" gutterBottom>
                  Chào mừng đến
                </Typography>
                <Typography variant="h4" color={"primary"}>
                  LDL TRACKER
                </Typography>
              </Stack>
            </Stack>

            <LoginForm />
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
