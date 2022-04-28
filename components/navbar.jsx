import React from "react";
import { Stack, Link, Box } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bgColor="primary">
      <Stack
        h={20}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginInline={24}
        fontSize={22}
      >
        <Link fontSize={28}>Martollo</Link>
        <Stack direction="row" spacing={16}>
          <Link>Hace Tu Pedido</Link>
          <Link>Puntos De Venta</Link>
          <Link>Conocenos</Link>
          <Link>Contacto</Link>
        </Stack>
      </Stack>
    </Box>
  );
}
