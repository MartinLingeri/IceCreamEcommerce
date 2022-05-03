import { useState } from "react";
import {
  Box,
  Heading,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { preguntas } from "../preguntas";

export default function PreguntasFrecuentes() {
  const [preguntasSeleccionadas, setPreguntasSeleccionadas] = useState(Object.keys(preguntas)[0]);

  function handleClickPregunta(e){
    setPreguntasSeleccionadas(e.target.id)
  }

  return (
    <Stack
      justifyContent="center"
      margin={{ base: 4, sm: 8 }}
      spacing={8}
      color="black"
      marginBottom={16}
    >
      <Heading color="secondary">Preguntas Frecuentes</Heading>
      <Stack
        spacing={{ base: 8, sm: 12, md: 16, lg: 32 }}
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
      >
        <Stack
          alignItems={{ base: "center", sm: "stretch" }}
          spacing={{ base: 8, sm: 12 }}
        >
          <Heading color="fifth">Tipo Pregunta</Heading>
          <Stack spacing={4} alignItems={{ base: "center", sm: "stretch" }}>
            {Object.keys(preguntas).map((value, index) => {
              return (
                <Heading
                  key={index}
                  fontWeight="normal"
                  fontSize={18}
                  color="black"
                  textTransform="uppercase"
                  id={value}
                  onClick={(e)=>handleClickPregunta(e)}
                  cursor="pointer"
                >
                  {value}
                </Heading>
              );
            })}
          </Stack>
        </Stack>
        <Stack spacing={8} alignItems={{ base: "center", sm: "stretch" }}>
          <Heading color="fourth" textTransform="capitalize">{preguntasSeleccionadas}</Heading>
          <Accordion defaultIndex={[0]} allowMultiple>
            {preguntas[preguntasSeleccionadas].map((value, index) => {
              return (
                <AccordionItem
                  key={index}
                  w={{ base: "35ch", sm: "40ch", md: "50ch", lg: "60ch" }}
                >
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                        color="fifth"
                      >
                        {value.pregunta}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="fifth" opacity="0.7">
                    {value.respuesta}
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Stack>
      </Stack>
    </Stack>
  );
}
