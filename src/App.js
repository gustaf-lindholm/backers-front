import React, { useState } from "react";
import Navigation from "./components/Navbar/Navbar";
import Routes from "./Routes";



function App() {
  const [lang, setLang] = useState("se");

  const handleLanguage = lang => {
    setLang(lang);

  };
  return (
    <div className="App">
      <Navigation lang={lang} handleLanguage={handleLanguage}/>
      <Routes appProps={{lang}}/>
    </div>
  );
}

export default App;
