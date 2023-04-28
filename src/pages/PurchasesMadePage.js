import styled from "styled-components";
import Top from "../components/Top"
export default function PurchasesMadePage(){
    return(
        <Container>
          <Top/>
          <ContainerUser>
            <img src="https://e7.pngegg.com/pngimages/926/34/png-clipart-computer-icons-user-profile-avatar-avatar-face-heroes.png"/>
            <h3>Name</h3>
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