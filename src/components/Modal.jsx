import styled from "styled-components"
import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext } from "react"
import CartContext from "../contexts/CartContext";

function Modal({onClose}){

    const info = localStorage.getItem("usuario")
    const auth = JSON.parse(info);

    const navigate=useNavigate();

    const {cart,address, total, open, setOpen, cardname, digits, cvv, expire}= useContext(CartContext)

    function ConfirmPurchase(){
        const body= {cart: cart, address: address, total: total, cardname: cardname, digits: digits, cvv: cvv, expire: expire}
        const promise=axios.post(`${process.env.REACT_APP_API_URL}/compras`,body,{
               headers: { Authorization: `Bearer ${auth}` }
             });
            promise.then((response)=>{navigate("/purchasesMade"); setOpen(false) })
            promise.catch((error)=> alert(error.response.data.message))
        
        
    }
    if(!open){
        return null
    }
    else{
        return(
            <Overlay>
                <Alert>
                    <Texto>Tem certeza que deseja finalizar a compra?</Texto>
                    <Container>
                        <No onClick={onClose}>CANCELAR</No>
                        <Yes onClick={ConfirmPurchase}>FINALIZAR COMPRA</Yes>
                    </Container>
                </Alert>
            </Overlay>
        )
    }
}

export default Modal;


const No= styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 95px;
height: 52px;
background: #6cc4b1;
border-radius: 8px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;`;

const Yes=styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 95px;
height: 52px;
background: #6cc4b1;
border-radius: 8px;
margin-left:14px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;`;

const Alert=styled.div `
width: 248px;
height: 210px;
background: #FFFFFF;
border-radius: 12px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;

`;

const Container= styled.div `
display:flex;
flex-direction:row;
margin-top:47px`;

const Overlay=styled.div ` 
background-color: rgba(0, 0, 0, 0.5); 
position: fixed;
width: 100%;
height: 100%;
top:0;
left:0;
bottom:0;
rigth:0;
zIndex:4;
display:flex;
align-items:center;
justify-content:center;`

const Texto=styled.div `
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;
height: 67px;
width: 204px;
`
  