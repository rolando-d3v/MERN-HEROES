import AppRouter from "./routers/AppRouter";
// import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {


  useEffect(() => {
    // AOS.init()
    AOS.init({ duration: 1000, offset: 200 });
  }, []);


  return (
    <div className="">
      <AppRouter/>
    </div>
  );
}

export default App;
