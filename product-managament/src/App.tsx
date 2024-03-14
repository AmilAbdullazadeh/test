import { Flex, Grid, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import './App.css';
import LogoSRC from './assets/logo/imdb.svg';
import Banner from './components/Banner/Banner';
import ProductCard from './components/Card/Card';
import Logo from './components/Logo/Logo';
import { Product } from './models/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:5001/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setSelectedProductId(data[0].id)
      });
  }, [])

  const handleBanner = (id: number) => {
    const findProduct = products.find((product) => product.id === id);
    // {
    //       "id": 1,
    //       "name": "Levis Jeans",
    //       "description": "Levis Jeans made in USA. 100% cotton, slim fit, blue color, available in all sizes.",
    //       "image": "https://picsum.photos/seed/technology/1920/500",
    //       "price": 3500
    //     },
    return (
      <Banner
        key={findProduct?.id}
        {...findProduct as Product}
      />
    );
  }

  return (
    <>
      <Flex
        p="2"
        mt="10"
        mb="10"
        gap={2}
        minWidth="max-content"
        alignItems="center"
      >
        <Logo title="AZE IMDB" imgSrc={LogoSRC} />

        <Input
          onKeyUp={(e) => setSearch((e.target as HTMLInputElement).value)}
          m={1}
          placeholder="Search product"
        />
      </Flex>

      {/* tsignore */}
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={2}
        alignItems="center"
        justifyItems="center"
      >
        {selectedProductId && handleBanner(selectedProductId)}
      </Grid>

      {/* recommendation */}
      <Flex
        direction="row"
        wrap="wrap"
        justify="space-between"
        align="center"
        mt="10"
        mb="10"
        gap={2}
      >
        {products
          .filter(
            (product) =>
              product.name.toLowerCase().includes(search.toLowerCase()) ||
              product.description.toLowerCase().includes(search.toLowerCase())
          )
          .map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
      </Flex>
    </>
  );
}

export default App;
