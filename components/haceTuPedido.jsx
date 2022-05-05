import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Stack,
  Select,
  Button,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import RadioCard from "./radioCard";

import { gustosDeHelado } from "../gustosDeHelado";

export default function HaceTuPedido() {
  const toast = useToast();
  const [selectableOptions, setSelectableOptions] = useState(gustosDeHelado);
  const [selectedOptions, setSelectedOptions] = useState([
    "Chocolate",
    "Chocolate con almendras",
    "Chocolate suizo",
    "Chocolate blanco",
  ]); //TODO cambiar
  const [cart, setCart] = useState([]);
  const [pote, setPote] = useState("");
  const poteOptions = ["1/2", "1", "1+1/2", "2"];
  const [flavourQuantity, setFlavourQuantity] = useState("");
  const [flavourQuantityArray, setFlavourQuantityArray] = useState([]);
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

  useEffect(() => {
    console.log(selectedOptions);
    console.log(cart);
  }, [selectedOptions, cart]);

  function handleSelectedOption(e, i) {
    const newSelectedOptions = selectedOptions;
    newSelectedOptions[i] = e.target.value;
    console.log(newSelectedOptions);
    setSelectedOptions(newSelectedOptions);

    // const newSelectableOptions = selectableOptions.filter(s=>s!=e.target.value);
    // setSelectableOptions(newSelectableOptions);
  }

  function addToCart() {
    const newCartItem = { kilos: pote, gustos: selectedOptions };
    setCart([...cart, newCartItem]);
  }

  return (
    <Stack
      spacing={8}
      justifyContent="center"
      margin={{ base: 4, sm: 8 }}
      color="black"
    >
      <Heading color="secondary">Hace tu Pedido</Heading>
      <Box textAlign="center" textTransform="uppercase" color="fourth">
        <Heading marginBlock={4}>¡compra ya!</Heading>
        <Heading d="inline">kilo de helado a </Heading>
        <Heading d="inline" fontWeight="extrabold" color="secondary">
          $600
        </Heading>
      </Box>
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
                      isRequired
                      boxShadow="md"
                      defaultValue={selectedOptions[index]}
                      onChange={(e) => handleSelectedOption(e, index)}
                    >
                      {selectableOptions
                        // .filter((gusto) => !selectedOptions.includes(gusto))
                        // .concat(selectedOptions[index])
                        .map((value, index) => {
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
          <Button
            boxShadow="md"
            _hover={{ opacity: "0.7" }}
            bgColor="fourth"
            color="white"
            onClick={() => addToCart()}
          >
            Añadir al carrito
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
