import { Box, Stack, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "./radioCard";

export default function HaceTuPedido() {
  const poteOptions = ["1/2", "1", "1+1/2", "2"];
  const flavourQuantityOptions = ["1", "2", "3", "4"];
  const { getRootPoteProps, getRadioPoteProps } = useRadioGroup({});
  const { getRootFlavourProps, getRadioFlavourQuantityProps } = useRadioGroup(
    {}
  );

  const poteGroup = getRootPoteProps();
  const flavourQuantityGroup = getRootFlavourProps();

  return (
    <Box>
      <Stack spacing={12}>
        <Box></Box>
        <Stack color="black">
          <Stack direction="row" {...poteGroup}>
            {poteOptions.map((value) => {
              let radio = getRadioPoteProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Stack>
          <Stack direction="row" {...flavourQuantityGroup}>
            {flavourQuantityOptions.map((value) => {
              let radio = getRadioFlavourQuantityProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
