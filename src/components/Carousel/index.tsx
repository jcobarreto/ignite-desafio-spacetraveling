import { useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { SliderItem } from "./SliderItem";

// swiper bundle styles
import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { ContinentCarouselModel } from "../../models";
import { fontSize } from "styled-system";

SwiperCore.use([Navigation, Pagination]);

interface CarouselProps {
  continents: ContinentCarouselModel[];
}

export function Carousel({ continents }: CarouselProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex as="section" direction="column" w="100%" align="center">
      <Divider w="90px" borderColor="gray.500" border="2px" />

      <Flex direction="column" w="100%" >
        <Heading fontWeight="500" py={isWideVersion ? "6" : "14"} fontSize={isWideVersion ? "4xl" : "xl"} >
          <VStack>
            <Text >Vamos nessa?</Text>
            <Text >Então escolha seu continente</Text>
          </VStack>
        </Heading>      

        <Box h={["250px", "450px"]} maxW="1240" w="100%" mx="auto" mb="4rem">
          <Swiper slidesPerView={1} loop={true} pagination={{"clickable": true}} navigation>
            {continents?.map((continent) => (
              <SwiperSlide key={continent.id}>
                <SliderItem continent={continent} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </Flex>
  );
}