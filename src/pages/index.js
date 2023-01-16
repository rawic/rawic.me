import React from "react";

import Seo from "../components/seo";
import Home from "../components/home";
import "../styles/main.sass";
import Layout from "../components/layout";
import { useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = (props) => {
  const { t } = useTranslation();

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

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
