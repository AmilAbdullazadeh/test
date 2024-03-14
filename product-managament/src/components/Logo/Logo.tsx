import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { ILogo } from "../../models/logo";

export default function Logo(props: ILogo) {
  const { imgSrc, title } = props;  
    
  return (
    <Box p='2'>
          <Heading size='md'>
              <Image
                  boxSize='100px'
                  objectFit='cover'  
                  src={imgSrc || 'https://bit.ly/dan-abramov'}
                  alt={title}
              />
              <Center style={{textAlign: 'center'}} >
                    {title}
              </Center>
          </Heading>
    </Box>
  )
}
