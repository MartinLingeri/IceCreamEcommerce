import React from "react";
import { Box, Heading, Stack, IconButton, Link, Text } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Link as ReachLink } from "react-router-dom";

export default function Footer({props}) {
  return (
    <Box {...props} bgColor="primary" paddingBlock={8} marginTop="auto">
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={8}
        justifyContent="center"
        textAlign={{ base: "center" }}
      >
        <Stack>
          <Heading as="h2" size="md">
            Martollo
          </Heading>
          <Stack>
            <Link as={ReachLink} to="/conocenos">
              Conocenos
            </Link>
            <Link as={ReachLink} to="/puntosDeVenta">
              Puntos De Venta
            </Link>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h2" size="md">
            Ayuda
          </Heading>
          <Stack>
            <Link as={ReachLink} to="/contacto">
              Contacto
            </Link>
            <Link as={ReachLink} to="/preguntasFrecuentes">
              Preguntas Frecuentes
            </Link>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h2" size="md">
            Encontranos en:
          </Heading>
          <Stack>
            <Stack direction="row" justifyContent="center">
              <IconButton
                as={Link}
                icon={<FaInstagram size={24}></FaInstagram>}
                bgColor="secondary"
                _hover={{ opacity: "0.7" }}
                borderRadius={9999}
                href="https://www.instagram.com/martin_lingeri/"
                isExternal
              ></IconButton>
              <IconButton
                as={Link}
                icon={<FaWhatsapp size={24}></FaWhatsapp>}
                bgColor="secondary"
                _hover={{ opacity: "0.7" }}
                borderRadius={9999}
                href="https://wa.me/541161295309"
                isExternal
              ></IconButton>
            </Stack>
            <Stack>
              <Link href="mailto:mlingeri3052@gmail.com">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <GoMail size={20} d="inline" />
                  <Text>mlingeri3052@gmail.com</Text>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
