import { Image, Text, VStack } from "@chakra-ui/react";

interface ItemTravelProps {
  image: string;
  label: string;
}

export function ItemTravel({ image, label }: ItemTravelProps) {
  return (
    <VStack>
      <Image src={`/images/${image}.svg`} />
      <Text fontSize="1.5rem" fontWeight="semibold">
        {label}
      </Text>
    </VStack>
  );
}