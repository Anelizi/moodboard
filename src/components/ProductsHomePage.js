import styled from "styled-components";

export default function ProductsHomePage({product}) {
  const {linkPhoto, price, name} = product
  return (
    <Container>
      <p>{name}</p>
      <Button>
        <img src={linkPhoto} alt={name}/>
        <div>
          <p>{`R$ ${price}`}</p>
        </div>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 170px;
  margin: 50px 20px 0 20px;
  p{
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 10px 3px;
    color: #1aa1a1;
  }
`

const Button = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  position: relative;
  background: rgb(255, 255, 255);
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: #d9d9d9 0.2em solid;
  cursor: pointer;
  &:hover {
    border: #02c221 0.3em solid;
    div {
      opacity: 1;
    }
  }
  div {
    opacity: 0;
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg,#19CF37 0%, #81EFC1 100%);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    p {
      color: #ffffff;
      margin-top: 5px;
      font-size: 15px;
    }
  }
  img {
    position: absolute;
    border-radius: 17px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
