import styled from "styled-components";
import Top from "../components/Top";
import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContect";
import { useState, useEffect } from "react"

export default function PurchasesMadePage() {
  const { token } = useContext(AuthContext);
  const [dados, setDados] = useState();
  const info = localStorage.getItem("usuario")
  const user = JSON. parse(info)

  console.log(user)
 
    const requisition = axios.get(`${process.env.REACT_APP_API_URL}/purchasesMade`,  {
      headers: {
        User: user
      }
    })
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err.res));

      console.log(dados)
  return (
    <Container>
      <Top />
      <ContainerUser>
        <img src="https://e7.pngegg.com/pngimages/926/34/png-clipart-computer-icons-user-profile-avatar-avatar-face-heroes.png" />
        <h3>{"dados.name"}</h3>
        <div>
          <p>Compra realizada:</p>
          <p>Data:</p>
        </div>
      </ContainerUser>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 70px;
  width: 100vw;
  height: 89.9vh;
  display: flex;
  justify-content: center;
  background: #ffffff;
`;

const ContainerUser = styled.div`
    width: 84vw;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
        width: 190px;
        height: 190px;
        margin-top: 40px;
        border-radius: 50%;
    }
    h3{
      font-size: 25px;
      font-weight: bold;
      margin-top: 20px;
      text-transform: uppercase;

    }
    div{
        font-size: ;
        width: 45%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
`