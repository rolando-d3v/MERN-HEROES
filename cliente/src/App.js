import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Home from "./pages/homePage/Home";
import GlobalStyle from "./style/globalStyled";
import {ThemeProvider} from 'styled-components'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

