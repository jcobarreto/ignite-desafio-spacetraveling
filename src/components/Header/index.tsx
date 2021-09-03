import { IoIosArrowBack } from "react-icons/io";
import { Box, Flex, Icon, IconButton, Image, Link } from "@chakra-ui/react";

interface HeaderProps {
  isContinent?: boolean
}

export function Header({ isContinent = false }: HeaderProps) {
  return (
    <Flex 
      as="header"
      position="absolute"
      w="100%"
      h={20}
      justify="center"
      py="1rem"
      bg="#FFF"
    >
      { isContinent && (
        <Link href="/" passref>
          <IconButton 
            aria-label="Back to home"
            icon={<Icon as={IoIosArrowBack} />}
            fontSize="24"
            variant="unstyled"
            mr="2"
          />
        </Link>
      )}

      <Image src="/images/logo.svg" alt="worldtrip" />
    </Flex>
  );
}