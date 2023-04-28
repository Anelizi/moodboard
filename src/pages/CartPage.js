import styled from "styled-components";
import Top from "../components/Top";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import Modal from "../components/Modal";
import { useEffect } from "react";
import axios from "axios";

export default function Cart(){

    useEffect(() => {
        const requisition=axios.get("mongodb://localhost:27017/moodboard/carrinho",{ headers: { Authorization: `Bearer` }})
        requisition.then((response) => {
            setCart(response.data);
        })
    })
    
    const {cart, setCart, address, setAddress, total, setTotal, open, setOpen}= useContext(CartContext)

    let valorfinal=0;
    let mult;
    for(let i=0; i< cart.length;i++){
        mult= cart[i].price * cart[i].amount;
        valorfinal= valorfinal + mult;
        if( i === (cart.length-1)){
            setTotal(valorfinal)
        }
    }


    function Appear(){
        setOpen(true)
    }

    function Delete(item){
        const top= {headers:{ Authorization: `Bearer`, Identification: item.identification}}
        const promise=axios.delete("mongodb://localhost:27017/moodboard/carrinho",top)
        promise.then((response)=> console.log(response.message))
        promise.catch((err)=> console.log(err.message))
    }

    return(
        <Container>
            <Top/>
            <Align>
                <Text1>Produto</Text1>
                <Text2>Preço</Text2>
                <Text3>Quantidade</Text3>
            </Align>
            <ContainerBox>
                {cart?.map((i) => <Box>
                    <Name>{i.product}</Name>
                    <Price>R$ {i.price}</Price>
                    <Amount>{i.amount}</Amount>
                    <Trash onClick={Delete(i.identification)}><ion-icon name="trash-outline"></ion-icon></Trash>
                    </Box>)}

            </ContainerBox>
            <Align>
                <Text1></Text1>
                <Text2>Total</Text2>
                <Text3>R$ {total}</Text3>
            </Align>
            <Align2>
                <Text1>Endereço para entrega</Text1>
                <input type="text" placeholder="Rua,Número - Cidade, Estado(sigla)- CEP" value={address} onChange={e => setAddress(e.target.value)}/>
            </Align2>
            <Center>
                <Button onClick={Appear}>COMPRAR</Button>
            </Center>
            <Modal  open={open} onClose={() => setOpen(false)}/>
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

const Align= styled.div `
display:flex;
flex-direction: row;
margin-top:25px;`

const Text1= styled.div `
font-family: 'Open Sans';
font-weight: 700;
font-size: large;
margin-right: 300px;
`
const Text2= styled.div `
font-family: 'Open Sans';
font-weight: 700;
font-size: large;
`
const Text3= styled.div `
font-family: 'Open Sans';
font-weight: 700;
font-size: large;
margin-left: 50px;`

const Box= styled.div `
display: flex;
flex-direction: row;
`

const Name= styled.div `
font-family: 'Open Sans';
font-weight: 300;
font-size: large;
margin-right: 300px;
`

const Price= styled.div `
font-family: 'Open Sans';
font-weight: 300;
font-size: large;`

const Amount= styled.div `
font-family: 'Open Sans';
font-weight: 300;
font-size: large;
margin-left: 50px;`

const Trash=styled.button `
`

const ContainerBox= styled.div `
overflow-y: scroll;
max-height: 500px;
`

const Align2= styled.div `
display:flex;
flex-direction: column;
margin-top:25px;
margin-bottom:50px;`

const Button= styled.button `
background-color: #6cc4b1;
border-radius: 8px;
color: white;
font-family:Open Sans;
font-size: large;
width: 250px;
height:100px;`

const Center= styled.div `
display:flex;
justify-content:center;
align-items: center;`