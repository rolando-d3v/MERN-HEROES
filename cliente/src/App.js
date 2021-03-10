import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Home from "./pages/Home";
import PricePage from "./pages/PricePage";
import GlobalStyle from "./style/globalStyled";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./theme/useDarkMode";


function App() {

  const {toggle, theme, toggleBoolean, themeLight, themeDark} = useDarkMode()

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
        <BrowserRouter>
          <GlobalStyle />
          <Navbar toggle={toggle} toggleBoolean={toggleBoolean} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/price" component={PricePage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
