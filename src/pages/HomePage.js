import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductsHomePage from "../components/ProductsHomePage";
import Top from "../components/Top";

export default function Home() {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/produtos`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  if (products === undefined) {
    return <Carregando>Carregando...</Carregando>;
  }

  console.log(products);

  return (
    <Container>
      <Top />
      <ContainerProduct>
        {products.map((p) => (
          <Link to={`/product/${p.name}`} key={p._id}>
            <ProductsHomePage product={p} />
          </Link>
        ))}
      </ContainerProduct>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
  width: 100vw;
  height: 89.9vh;
  display: flex;
  justify-content: center;
  background: #ffffff;
`;

const ContainerProduct = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a{
    text-decoration: none;
  }
  a:visited {
      color: inherit;
  }
`;

const Carregando = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #6cc4b1;
  margin-top: 70px;
  width: 100vw;
  height: 89.9vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
