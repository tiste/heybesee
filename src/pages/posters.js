import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Nav } from "../components/layouts/Nav";
import { PostersSection } from "../components/sections/posters";
import { Footer } from "../components/layouts/Footer";

export default function PostersPage() {
  return (
    <Layout title="Nos affiches">
      <Nav />
      <section className="section pb-0">
        <div className="container content">
          <h1 className="title is-1">Nos affiches</h1>
        </div>
      </section>
      <PostersSection />
      <Footer />
    </Layout>
  );
}
