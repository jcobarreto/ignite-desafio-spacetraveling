import { Flex, Image } from "@chakra-ui/react";
import { ItemTravel } from "./ItemTravel";

export function TravelTypes() {
  return (
    <Flex as="section" w="100%" justify="space-around" align="center" py="5rem" >
      <ItemTravel image="cocktail" label="cocktail" />
      <ItemTravel image="surf" label="surf" />
      <ItemTravel image="building" label="building" />
      <ItemTravel image="museum" label="museum" />
      <ItemTravel image="earth" label="e mais" />
    </Flex>
  );
}