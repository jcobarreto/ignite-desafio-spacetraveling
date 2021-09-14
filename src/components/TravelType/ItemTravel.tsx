import { Image, Text, VStack, useBreakpointValue, Stack, Flex, Box, position } from "@chakra-ui/react";

interface ItemTravelProps {
  image: string;
  label: string;
}

export function ItemTravel({ image, label }: ItemTravelProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box w="30">
      {isWideVersion ? <Image src={`/images/${image}.svg`} alt={label}/> : ""}
      <Text fontSize={["lg", "2xl"]} fontWeight={isWideVersion ? "500" : "600" } align="center">
        {label}
      </Text>
    </Box>
  );
}