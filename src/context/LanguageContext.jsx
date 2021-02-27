import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const LanguageContext = React.createContext();

function Context(props) {
  const { t } = useTranslation();
  const [lang, setLang] = React.useState("Choose");

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  React.useEffect(() => {
    setLang("ENG");
    i18next.changeLanguage("en");
  }, []);

  return (
    <LanguageContext.Provider value={{ t, handleClick, setLang, lang }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export { Context, LanguageContext };
