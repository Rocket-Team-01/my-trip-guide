import React from "react"
import i18next from "i18next";
import { useTranslation } from "react-i18next";


const LanguageContext = React.createContext()

function Context(props) {
    
    const { t } = useTranslation();
   
    function handleClick(lang) {
      i18next.changeLanguage(lang);

     
    }
    return (
        <LanguageContext.Provider value={{t,handleClick}}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export {Context, LanguageContext} 
