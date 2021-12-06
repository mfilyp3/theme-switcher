import { GlobalStyle } from "./styles/global";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useCallback } from "react";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { Header } from "./pages/Header";
import usePersistedState from "./utils/hooks/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
