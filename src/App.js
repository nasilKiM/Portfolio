import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import router from "./Routes/routing";
import { theme } from "./Styles/theme";
import GlobalStyles from "./Styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
