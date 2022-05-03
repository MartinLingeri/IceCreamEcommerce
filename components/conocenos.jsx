import {
  Stack,
  StackDivider,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import mostradorHelados from "../images/mostradorHelados.jpeg";
import cucuruchos from "../images/cucuruchos.jpg";
import heladeria from "../images/heladeria.jpg";
import heladoChocolate from "../images/heladoChocolate.jpg";

export default function Conocenos() {
  return (
    <Stack justifyContent="center" margin={{ base: 4, sm: 8 }} color="black">
      <Heading color="secondary">Conocenos</Heading>
      <Heading color="fourth" textAlign="center" fontWeight="semibold">
        Descubri la historia del
      </Heading>
      <Heading color="fourth" textAlign="center">
        MEJOR HELADO DE ARGENTINA
      </Heading>
      <Stack
        spacing={6}
        justifyContent="center"
        alignItems={{ base: "center", sm: "stretch" }}
      >
        <Heading
          as="h2"
          fontSize={24}
          fontWeight="light"
          textAlign="center"
          maxW="40ch"
          alignSelf="center"
        >
          Nuestra empresa nacio como una heladeria artesanal a{" "}
          <b>finales de los 2000</b>
        </Heading>
        <Image
          h="20vh"
          w={{ base: "20rem", sm: "100%" }}
          objectFit="cover"
          src={mostradorHelados}
          borderRadius="sm"
        />
        <Heading as="h2" fontSize={18} fontWeight="light" textAlign="center">
          LA HISTORIA QUE ESCRIBIMOS DESDE AHÍ SUPERÓ TODOS LOS SUEÑOS
          INICIALES:
        </Heading>
        <Stack
          justifyContent="center"
          direction={{ base: "column", sm: "row" }}
          spacing={2}
          divider={<StackDivider borderColor="primary" />}
          color="fifth"
        >
          <Box w={{ base: "20rem", sm: "12rem", lg: "21rem" }}>
            <Image
              h={{ base: "20rem", sm: "12rem", lg: "21rem" }}
              objectFit="cover"
              src={heladoChocolate}
              borderRadius="sm"
            />
            <Text opacity="0.7" m={4}>
              Poco a poco fuimos creciendo, mejorando nuestras sucursales, el
              servicio de envio y principalmente{" "}
              <b>haciendo mas distintivo a nuestro helado</b>
            </Text>
          </Box>
          <Box w={{ base: "20rem", sm: "12rem", lg: "21rem" }}>
            <Image
              h={{ base: "20rem", sm: "12rem", lg: "21rem" }}
              objectFit="cover"
              src={cucuruchos}
              borderRadius="sm"
            />
            <Text opacity="0.7" m={4}>
              Revisionamos el helado haciendo que tenga en el medio un bombon de
              chocolate haciendo que sea el <b>único helado con corazón</b>
            </Text>
          </Box>
          <Box w={{ base: "20rem", sm: "12rem", lg: "21rem" }}>
            <Image
              h={{ base: "20rem", sm: "12rem", lg: "21rem" }}
              objectFit="cover"
              src={heladeria}
              borderRadius="sm"
            />
            <Text opacity="0.7" m={4}>
              Abrimos nuevas sucursales y nos expandimos{" "}
              <b>por todo el pais dejando huella</b>
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
