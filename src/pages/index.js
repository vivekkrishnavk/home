import React from "react";
import Header from "../components/header";
import ContentSection from "../components/ContentSection";
import Topnav from "../components/topnav";
import SEO from "../components/seo";
import Footer from "../components/Footer";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Topnav />
    <Header />
    <ContentSection />
    <Footer />
  </>
);

export default IndexPage;
