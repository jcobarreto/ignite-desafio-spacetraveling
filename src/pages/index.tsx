import Head from "next/head";
import { api } from "../services/api";

import { Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelType";
import { Carousel } from "../components/Carousel";
import { GetStaticProps } from "next";
import { ContinentCarouselModel } from "../models";

interface HomeProps {
  continents: ContinentCarouselModel[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
        <meta
          name="description"
          content="5 Continentes, infinitas possibilidades."
        />        
      </Head>

      <Flex direction="column" h="100vh" w="100%" mx="auto">
        <Header />
        <Banner />
        <TravelTypes />
        <Carousel continents={continents}/>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api
    .get<ContinentCarouselModel[]>(`/continents`)
    .then((response) => response.data);
    
    return {
      props: { continents: response },
      revalidate: 60 * 60 * 24,  // 24 hours
    };
};