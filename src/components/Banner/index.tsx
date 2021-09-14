import { Box, Flex, Heading, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box      
      h="368px"
    >
      <Flex
        w="100%"
        h={isWideVersion ? "335" : "163"}
        justifyContent="space-around"
        bgImage="/images/background.svg"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <VStack mt="8" spacing={5} maxW={520} align="flex-start" color="gray.50" ml={["2", "5"]}>
          <Heading as="h1" fontWeight="500" fontSize={isWideVersion ? "4xl" : "xl"} mb={["2", "5"]} color="gray.50">
            5 Continentes,
            <Text>infinitas possibilidades.</Text>
          </Heading>
          { isWideVersion ? <Text maxW="524" fontSize="xl" color="gray.100" >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text> : "" }
        </VStack>
        <Image src="/images/airplane.svg" mt="7rem" />
      </Flex>
    </Box>
  );
}