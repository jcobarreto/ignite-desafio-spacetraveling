import { FiChevronLeft } from "react-icons/fi";
import { Center, Icon, IconButton, Image, Link, useBreakpointValue } from "@chakra-ui/react";

interface HeaderProps {
  isContinent?: boolean
}

export function Header({ isContinent = false }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Center
      w="100%"
      h={isWideVersion ? "100" : "50"}
      maxW={1240}
      px={["4", "10"]}
      py="1rem"
      position="relative"
    >
      { isContinent && (
        <Link href="/" passHref>
          <IconButton 
            aria-label="Back to home"
            icon={<Icon as={FiChevronLeft} fontSize={["1rem", "2rem"]}/>}
            fontSize="24"
            variant="unstyled"
            mr="2"
          />
        </Link>
      )}

      <Image src="/images/logo.svg" alt="worldtrip" w={!isWideVersion && "81px"}/>
    </Center>
  );
}