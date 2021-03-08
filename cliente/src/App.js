import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Home from "./pages/homePage/Home";
import GlobalStyle from "./style/globalStyled";
import { ThemeProvider } from "styled-components";

const themeLight = {
  bgColor: "#49a2c5",
  fColor: "#42424242",
};

const themeDark = {
  bgColor: "#10131a",
  fColor: "#fff",
};

function App() {
  const [theme, setTheme] = useState("light");
  const [the, setThe] = useState(false);
  
  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
      setThe(true)
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      setThe(false)
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    let the = localStorage.getItem("theme");
    if (the === "dark") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      setThe(true)
    }
  }, []);


  return (
    <div>
      <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
        <BrowserRouter>
          <GlobalStyle />
          <Navbar toggle={toggle}  the={the}  />
          <button onClick={() => toggle()}>hola</button>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
