import { Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/Card/Card';
import { Product } from './models/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [])

  return (
    <>
      <Flex
        direction='row'
        wrap='wrap'
        justify='space-between'
        align='center'
        mt='10'
        mb='10'
        gap={2}
      >
        <Input onKeyUp={(e) => setSearch((e.target as HTMLInputElement).value)} m={3} placeholder='Search product' />
        {
          products
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase()) ||
              product.description.toLowerCase().includes(search.toLowerCase())
            )
          .map((product, idx) => (
            <ProductCard
              key={idx}
              {...product}
            />
          ))
        }
      </Flex>
    </>
  )
}

export default App;
