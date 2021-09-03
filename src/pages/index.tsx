import Head from "next/head";

import { Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelType";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
        <meta
          name="description"
          content="5 Continentes, infinitas possibilidades."
        />        
      </Head>

        <Header />
        <Banner />
        <TravelTypes />

    </>
  )
}
