import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Nav } from "../components/layouts/Nav";
import { HeroSection } from "../components/sections/hero";
import { ShowSection } from "../components/sections/show";

export default function IndexPage() {
  return (
    <Layout>
      <Nav />
      <HeroSection />
      <ShowSection />
    </Layout>
  );
}
