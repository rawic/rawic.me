import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import {graphql} from 'gatsby';

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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
