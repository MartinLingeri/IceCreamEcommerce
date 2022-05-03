import { useEffect, useState } from "react";
import { Box, Stack, Select, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "./radioCard";

import { gustosDeHelado } from "../gustosDeHelado";

export default function HaceTuPedido() {
  const [pote, setPote] = useState("");
  const [flavourQuantity, setFlavourQuantity] = useState("");
  const [flavourQuantityArray, setFlavourQuantityArray] = useState([]);
  const poteOptions = ["1/2", "1", "1+1/2", "2"];
  const flavourQuantityOptions = ["1", "2", "3", "4"];
  const { getRootProps: getRootPoteProps, getRadioProps: getRadioPoteProps } =
    useRadioGroup({ onChange: setPote });
  const {
    getRootProps: getRootFlavourProps,
    getRadioProps: getRadioFlavourQuantityProps,
  } = useRadioGroup({ onChange: setFlavourQuantity });

  const poteGroup = getRootPoteProps();
  const flavourQuantityGroup = getRootFlavourProps();

  useEffect(() => {
    setFlavourQuantityArray(Array(Number(flavourQuantity)).fill("i"));
  }, [flavourQuantity]);

  return (
    <Box marginBlock={12}>
      <Stack
        justify="center"
        alignItems="center"
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 12, lg: 20 }}
      >
        <Box>Hola</Box>
        <Stack color="black">
          <Stack direction="row" {...poteGroup}>
            {poteOptions.map((value, index) => {
              const radioPote = getRadioPoteProps({ value });
              return (
                <RadioCard key={index} {...radioPote} value={value}>
                  {value}
                </RadioCard>
              );
            })}
          </Stack>
          <Stack direction="row" {...flavourQuantityGroup}>
            {flavourQuantityOptions.map((value, index) => {
              const radioFlavour = getRadioFlavourQuantityProps({ value });
              return (
                <RadioCard key={index} {...radioFlavour} value={value}>
                  {value}
                </RadioCard>
              );
            })}
          </Stack>
          <Box>
            {flavourQuantity && (
              <Stack spacing={3}>
                {flavourQuantityArray.map((value, index) => {
                  return (
                    <Select
                      key={index}
                      variant="outline"
                      defaultValue="chocolate"
                      isRequired
                      boxShadow="md"
                    >
                      {gustosDeHelado.map((value, index) => {
                        return (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        );
                      })}
                    </Select>
                  );
                })}
              </Stack>
            )}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
