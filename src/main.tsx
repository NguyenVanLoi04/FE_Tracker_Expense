import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "react-quill/dist/quill.snow.css";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import "simplebar/src/simplebar.css";
import App from "./App.tsx";
import { CollapseDrawerProvider } from "./common/contexts/CollapseDrawerContext";
import "./common/locales/i18n";
import { persistor, store } from "./common/redux/store";
import "./index.css";
import { AuthProvider } from "./common/contexts/JWTContext";
import { SettingsProvider } from "./common/contexts/SettingsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <SettingsProvider>
                <CollapseDrawerProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </CollapseDrawerProvider>
              </SettingsProvider>
            </LocalizationProvider>
          </PersistGate>
        </ReduxProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
