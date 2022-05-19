import ReactDOM from "react-dom";
import React from 'react';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es.json";
import localeENMessages from "./locales/en.json";
import JobsList from "./components/jobslist";
    let local = navigator.language
    console.log(local)
    let mensajes = localeEsMessages
    if(local=='en'){
        console.log("Entra aqui EN")
        mensajes = localeENMessages;
    }
    if(local=='es'){
        console.log("Entra aqui ESP")
        mensajes = localeEsMessages;
    }
ReactDOM.render(
    <IntlProvider locale={local} messages= {mensajes}>
        <JobsList idioma={local} />
    </IntlProvider>, document.getElementById("root")
);
