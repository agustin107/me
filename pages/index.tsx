import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Agustin's</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

