import React, { Component } from "react";

import SEO from "../components/seo";
import Home from "../components/home";
import "../styles/main.sass";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/en.json";
import pl from "../i18n/pl.json";

const defaultLanguage = "en";
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        pl: {
            translation: pl,
        },
    },
    fallbackLng: defaultLanguage,
    lng: defaultLanguage,
    interpolation: {
        escapeValue: false,
    },
});

class IndexPage extends Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelector("main").className = "active";
        }, 100);
    }

    render() {
        return (
            <React.Fragment>
                <SEO title="🤓 Front-End Developer" url="https://rawic.me" />
                <Home />
            </React.Fragment>
        );
    }
}

export default IndexPage;
