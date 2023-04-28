import styled from "styled-components";
import ProductsHomePage from "../components/ProductsHomePage";
import Top from "../components/Top";

export default function Home() {
  return (
    <Container>
      <Top/>
      <ContainerProduct>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
        <ProductsHomePage/>
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
    width: 84vw;
    height: 100%;
`