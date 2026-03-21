import { QueryClient, QueryClientProvider } from "react-query";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import "src/common/styles/global.css";
import { policiesSelector } from "./auth/login/login.slice";
import MotionLazyContainer from "./common/components/animate/MotionLazyContainer";
import { ChartStyle } from "./common/components/chart";
import NotistackProvider from "./common/components/NotistackProvider";
import ScrollToTop from "./common/components/ScrollToTop";
import { buildAbilityFor } from "./common/lib/ability";
import { AbilityContext } from "./common/lib/Can";
import Router from "./common/routes";
import ThemeProvider from "./common/theme";

function App() {
  const permissionAbility = useSelector(policiesSelector);
  const ability = buildAbilityFor(permissionAbility);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <NotistackProvider>
            <AbilityContext.Provider value={ability}>
              <ChartStyle />
              <ScrollToTop />
              <Router />
            </AbilityContext.Provider>
          </NotistackProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}

export default App;
