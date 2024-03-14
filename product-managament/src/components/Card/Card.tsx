import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Product } from '../../models/product';

export default function ProductCard(props: Product & { key?: number | string }) {
  const { image, name, description, price } = props;
  return (
    <Card maxW='sm'>
          <CardBody>
            <Image
              src={image}
              alt={name}
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{name}</Heading>
              <Text>
                {description}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                {price} €
              </Text>
            </Stack>
          </CardBody>
    </Card>
  )
}
