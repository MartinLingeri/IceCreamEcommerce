import { useState } from "react";
import { Stack, Link, Flex, Box } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

import { IoMdClose as CloseIcon, IoMdMenu as MenuIcon } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box bgColor="primary">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={8}
      >
        <Link as={ReachLink} to="/" fontSize={28}>
          Martollo
        </Link>
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
          {isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
        </Box>
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={[2, 8, 12, 16]}
            fontSize={20}
            align="center"
            justify={{ base: "center", sm: "space-between", lg: "flex-end" }}
            direction={{ base: "column", sm: "row" }}
            pt={[4, 4, 0, 0]}
          >
            <Link as={ReachLink} to="/">
              Hace Tu Pedido
            </Link>
            <Link as={ReachLink} to="/puntosDeVenta">
              Puntos De Venta
            </Link>
            <Link as={ReachLink} to="/conocenos">
              Conocenos
            </Link>
            <Link as={ReachLink} to="/contacto">
              Contacto
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
