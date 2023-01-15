import React from "react";

import Seo from "../components/seo";
import Home from "../components/home";
import "../styles/main.sass";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/en.json";
import pl from "../i18n/pl.json";
import Layout from "../components/layout";
import { useEffect } from "react";

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

const IndexPage = (props) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.querySelector("main").className = "active";
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Layout location={props.location}>
      <Seo title="🤓 Front-End Developer" url="https://rawic.me" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
