import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  StackDivider,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import { Link } from "react-scroll";

import { locales } from "../locales";

export default function PuntosDeVenta() {
  const [mapLink, setMapLink] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7162.506750481972!2d-58.427008058216714!3d-34.60355904910142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6455c225f9%3A0x25dc93cbb04afda2!2sAv.%20Corrientes%204300%2C%20C1195AAO%20CABA!5e0!3m2!1ses!2sar!4v1651616820363!5m2!1ses!2sar"
  );

  function handleVerMapa(link) {
    setMapLink(link);
  }

  return (
    <Stack
      justifyContent="center"
      margin={{ base: 4, sm: 8 }}
      color="black"
      spacing={8}
    >
      <Heading color="secondary">Puntos de Venta</Heading>
      <Stack
        alignSelf="center"
        alignItems={{ base: "center", sm: "stretch" }}
        maxW="900px"
        spacing={4}
      >
        {locales.map((value, index) => {
          return (
            <Stack key={index} divider={<StackDivider />} spacing={2} w="100%">
              <Heading
                color="fourth"
                fontSize={24}
                alignSelf={{ base: "center", sm: "stretch" }}
              >
                {value.provincia}
              </Heading>
              <Grid
                gridGap={4}
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                marginBlock={2}
              >
                {value.locales.map((local) => {
                  return (
                    <GridItem
                      key={local.nombre}
                      p={4}
                      border="1px"
                      borderColor="primary"
                      borderRadius="sm"
                      color="fifth"
                    >
                      <Stack justifyContent="space-between" h="100%">
                        <Box>
                          <Heading fontSize={18} textTransform="uppercase">
                            {local.nombre}
                          </Heading>
                          <Heading fontWeight="semibold" fontSize={14}>
                            {local.barrio}
                          </Heading>
                          <Heading fontWeight="semibold" fontSize={14}>
                            {local.calle}
                          </Heading>
                          <Heading fontWeight="semibold" fontSize={14}>
                            Horario: {local.horario} hs
                          </Heading>
                        </Box>
                        <Button
                          as={Link}
                          to="mapa"
                          smooth={true}
                          bgColor="primary"
                          color="white"
                          borderRadius="sm"
                          cursor="pointer"
                          _hover={{ opacity: "0.7" }}
                          onClick={() => handleVerMapa(local.mapsLink)}
                        >
                          Ver Mapa
                        </Button>
                      </Stack>
                    </GridItem>
                  );
                })}
              </Grid>
            </Stack>
          );
        })}
        <Heading color="fifth">Mapa</Heading>
        <AspectRatio
          id="mapa"
          maxW="900px"
          w="100%"
          minH="300px"
          ratio={{ base: 1, sm: 16 / 9 }}
        >
          <iframe
            src={mapLink}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </AspectRatio>
      </Stack>
    </Stack>
  );
}
