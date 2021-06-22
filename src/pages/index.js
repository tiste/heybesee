import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Nav } from "../components/layouts/Nav";
import { HeroSection } from "../components/sections/hero";
import { ShowSection } from "../components/sections/show";
import { Link } from "gatsby";
import { Footer } from "../components/layouts/Footer";

export default function IndexPage() {
  return (
    <Layout>
      <Nav />
      <HeroSection />
      <section className="section">
        <div className="container content has-text-centered">
          <Link to="/posters" className="button is-black is-large">
            Voir toutes nos affiches
          </Link>
        </div>
      </section>
      <ShowSection />
      <Footer />
    </Layout>
  );
}
