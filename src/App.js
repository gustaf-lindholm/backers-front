import React, { useState } from "react";
import Navigation from "./components/Navbar/Navbar";



function App(props) {
  const [lang, setLang] = useState("se");

  const handleLanguage = lang => {
    setLang(lang);

  };
  return (
    <div className="App">
      <Navigation lang={lang} handleLanguage={handleLanguage}/>
    </div>
  );
}

export default App;
