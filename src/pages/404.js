import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Footer } from "../components/layouts/Footer";

export default function _404Page() {
  return (
    <Layout title="404">
      <div className="not-found">
        <h1>404</h1>
        <h2>Document not found</h2>
        <p>
          <a href="/">Return to homepage</a>
        </p>
      </div>
      <Footer />
    </Layout>
  );
}
