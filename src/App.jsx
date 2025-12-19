import { useEffect, useState } from "react";
import Home from "./pages/Home";
import LogoPage from "./components/LogoPage";

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const hasSeenLogo = sessionStorage.getItem("hasSeenLogo");

    if (hasSeenLogo) {
      setShowHome(true);
    }
  }, []);

  const handleLogoFinish = () => {
    sessionStorage.setItem("hasSeenLogo", "true"); // mark as seen
    setShowHome(true);
  };

  return <>
  {showHome ? <Home /> : <LogoPage onFinish={handleLogoFinish} />}
  </>;
}

export default App;
