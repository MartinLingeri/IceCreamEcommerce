import {
  Box,
  Stack,
  Heading,
  Image,
  FormControl,
  Input,
  Textarea,
  Button,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import heladoContacto from "../images/heladoContacto.png";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const toast = useToast();

  function handleContactChange(e) {
    const { name, value } = e.target;
    setContact((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_portfolio",
        "iceCreamEcommerce",
        e.target,
        "tNV-hywQiGXm8a7Wa"
      )
      .then((res) => {
        setContact({
          name: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        });
        toast({
          title: "Consulta enviada",
          description: "Su consulta ha sido enviada correctamente",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        console.log(res);
      })
      .catch((err) => {
        toast({
          title: "Consulta NO enviada",
          description: "Su consulta NO ha sido enviada, pruebe nuevamente",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.log(err);
      });
  }

  return (
    <Stack justifyContent="center" margin={{ base: 4, sm: 8 }} color="black">
      <Heading color="secondary">Contacto</Heading>
      <Stack spacing={4} justifyContent="center" alignItems="center">
        <Heading as="h2" color="fourth" fontSize={24}>
          Dejanos tu consulta
        </Heading>
        <Heading as="h3" fontSize="lg" fontWeight="semibold" textAlign="center">
          Completa el siguiente formulario y responderemos a la brevedad
        </Heading>
        <Stack direction="row">
          {isLargerThan400 && (
            <Box w={{ sm: "20rem", lg: "26rem" }}>
              <Image src={heladoContacto} />
            </Box>
          )}
          <Stack w="20rem">
            <Heading
              as="h2"
              fontSize={24}
              color="fourth"
              marginBlock={4}
              textAlign={{ base: "center", sm: "start" }}
            >
              DATOS PERSONALES
            </Heading>
            <form onSubmit={sendEmail}>
              <FormControl isRequired>
                <Input
                  name="name"
                  value={contact.name}
                  onChange={handleContactChange}
                  placeholder="Nombre y Apellido"
                  borderColor="secondary"
                  borderRadius="sm"
                ></Input>
              </FormControl>
              <FormControl isRequired>
                <Input
                  name="email"
                  type="email"
                  value={contact.email}
                  onChange={handleContactChange}
                  placeholder="Email"
                  borderColor="secondary"
                  borderRadius="sm"
                ></Input>
              </FormControl>
              <FormControl isRequired>
                <Input
                  name="phoneNumber"
                  type="number"
                  value={contact.phoneNumber}
                  onChange={handleContactChange}
                  placeholder="Telefono"
                  borderColor="secondary"
                  borderRadius="sm"
                ></Input>
              </FormControl>
              <FormControl isRequired>
                <Input
                  name="subject"
                  value={contact.subject}
                  onChange={handleContactChange}
                  placeholder="Asunto"
                  borderColor="secondary"
                  borderRadius="sm"
                ></Input>
              </FormControl>
              <FormControl isRequired>
                <Textarea
                  name="message"
                  value={contact.message}
                  onChange={handleContactChange}
                  placeholder="Mensaje"
                  borderColor="secondary"
                  borderRadius="sm"
                  rows="4"
                  resize="none"
                ></Textarea>
              </FormControl>
              {/* Captcha */}
              <Button
                type="submit"
                bgColor="fourth"
                color="white"
                borderRadius="sm"
              >
                Enviar
              </Button>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
