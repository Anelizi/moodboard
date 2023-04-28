import styled from "styled-components";

export default function ProductsHomePage() {
  return (
    <Button>
      <img src="https://img.freepik.com/vetores-premium/frasco-cosmetico-de-prata-embalagem-de-dispensador-de-bomba-em-branco-para-shampoo-locao-pacote-de-sabonete-de-lavagem-de-mao-isolado-no-branco-tubo-para-tratamento-medico-transparente-sem-rotulo-produto-de-beleza-premium_83194-1225.jpg" />
      <div>
        <p>R$ 20.00</p>
      </div>
    </Button>
  );
}

const Button = styled.button`
  width: 150px;
  height: 150px;
  margin-top: 50px;
  margin-left: 50px;
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
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 80%;
    top: 0;
    left: 0;
  }
`;
