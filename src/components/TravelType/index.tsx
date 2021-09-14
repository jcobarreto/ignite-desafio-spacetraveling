import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { ItemTravel } from "./ItemTravel";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      px={["15", "10"]}
      mb={["1", "2"]}
      fontSize={["xl", "4xl"]}
      w="100%"
      py="3rem"
      wrap={isWideVersion ? 'nowrap' : 'wrap'}
    >
      <Flex justify="space-around" w="100%" direction={isWideVersion ? "row" : "column"}>
        <ItemTravel image="cocktail" label="cocktail" />
        <ItemTravel image="surf" label="surf" />
        <ItemTravel image="building" label="building" />
        <ItemTravel image="museum" label="museum" />
        <ItemTravel image="earth" label="e mais" />
      </Flex>
    </Flex>
  );
}