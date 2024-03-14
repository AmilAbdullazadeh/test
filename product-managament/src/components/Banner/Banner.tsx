import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Product } from "../../models/product";

export default function Banner(props: Product & { key?: number | string }) {
  const { image, name, description } = props;
    return (
      <Box>
            <Image src={image} alt={name} borderRadius="lg" />
              <Heading size="md">{name}</Heading>
              <Text>{description}</Text>
      </Box>
    );
}
