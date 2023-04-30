import styled from "styled-components";
import Top from "../components/Top";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import Modal from "../components/Modal";
import { useEffect } from "react";
import axios from "axios";

export default function Cart(){

    const info = localStorage.getItem("usuario")
    const auth = JSON.parse(info);

    useEffect(() => {
        const requisition=axios.get(`${process.env.REACT_APP_API_URL}/carrinho`,{ headers: { Authorization: `Bearer ${auth}` }})
        requisition.then((response) => {
            setCart(response.data);
        })
    })

    
    const {cart, setCart, address, setAddress, total, setTotal, open, setOpen, cardname, setCardname, digits, setDigits, expire, setExpire, cvv, setCvv}= useContext(CartContext)

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
        const top= {headers:{ Authorization: `Bearer ${auth}`, Identification: item.identification}}
        const promise=axios.delete(`${process.env.REACT_APP_API_URL}/carrinho`,top)
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
                <Text4>Total</Text4>
                <Text3>R$ {total}</Text3>
            </Align>
            <Align2>
                <Text5>Endereço para entrega</Text5>
                <Input type="text" placeholder="Rua,Número - Cidade, Estado(sigla)- CEP" value={address} onChange={e => setAddress(e.target.value)}/>
                <Text5>Dados para o pagamento</Text5>
                <Input data-test="email-input" type="text" required value={cardname} placeholder="Nome no cartão" onChange={e => setCardname(e.target.value)}/>
                <Input data-test="password-input" type="text"  value={digits} required placeholder="Dígitos do cartão" onChange={e => setDigits(e.target.value)}/>
                 <Cont>
                     <div><Input1  type="number" required value={cvv} placeholder="Código de segurança" onChange={e => setCvv(e.target.value)}></Input1></div>
                     <div><Input2  type="text" required value={expire} placeholder="Validade" onChange={e => setExpire(e.target.value)}></Input2></div>
                     <br></br>
                </Cont>
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
  background: #ffffff;
`;

const Align= styled.div `
display:flex;
flex-direction: row;
margin-top:100px;
margin-left:200px;`

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
margin-bottom:50px;
margin-left:200px;
`

const Button= styled.button `
background-color: #6cc4b1;
border-radius: 20px;
color: white;
font-family:Open Sans;
font-size: x-large;
font-weight:900;
width: 250px;
height:100px;`

const Center= styled.div `
display:flex;
justify-content:center;
align-items: center;
margin-bottom:40px;`

const Text4= styled.div `
font-family: 'Open Sans';
font-weight: 700;
font-size: large;
margin-left:73px;
margin-right:5px;`

const Text5= styled.div `
font-family: 'Open Sans';
font-weight: 700;
font-size: large;
margin-bottom: 15px;
`
const Cont= styled.div `
display:flex;
flex-direction:row;`;

const Input1= styled.input `
background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #7E7E7E;
width:200px;
height:52px;
margin-top:8px;`;

const Input2=styled.input `
background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #7E7E7E;
width:185px;
height:52px;
margin-left:9px;
margin-top:8px;`

const Input=styled.input `
background: #FFFFFF;
border-radius: 8px;
border: 1px solid #D5D5D5;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #7E7E7E;
width:400px;
height:52px;
margin-top:8px;`
