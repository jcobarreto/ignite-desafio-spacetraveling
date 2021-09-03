import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box      
      h="368px"
    >
      <Flex
        as="section"
        w="100%"
        h="335"
        align="center"
        justifyContent="space-around"
        bgImage="/images/background.svg"
      >
        <VStack mt="8" spacing={5} maxW={520} align="flex-start" color="gray.50">
          <Heading>
            5 Continentes,
            <Text>infinitas possibilidades.</Text>
          </Heading>
          <Text fontSize="1.25rem">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        <Image src="/images/airplane.svg" mt="7rem" />
      </Flex>
    </Box>
  );
}