import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
import Top from "../components/Top";

export default function Product(){

    const info = localStorage.getItem("usuario")
    const auth = JSON.parse(info);

    const {image, setImage, description, setDescription, product, setProduct, price, setPrice, amount, setAmount }= useContext(ProductContext)

    const params = useParams();
    console.log(params)
    const navigate= useNavigate();

    useEffect(() => {
        // colocar o ${auth}
        const requisition= axios.get(`${process.env.REACT_APP_API_URL}/prod`,{ headers: { Authorization: `Bearer ${auth}`,Product: params.product_name }})
        requisition. then((response)=>{ setImage(response.data.linkPhoto);
        setDescription(response.data.description);
        setProduct(response.data.name)
        setPrice(response.data.price);
        console.log(response.data)})
        requisition.catch((err) => (console.log(err.message)))
    },[])

    function AddToCart(event){
        event.preventDefault()
        console.log(auth)
        const body= {product: product, amount: amount, price: price }
        const requisition= axios.post(`${process.env.REACT_APP_API_URL}/carrinho`,body, { headers: { Authorization: `Bearer ${auth}`}});
        requisition.then(navigate("/cart"))
        requisition.catch((err)=> alert(err.message))
    }
    return(
        <Background>
            <Top/>
            <PageContent>
                <Products>
                  <ProdText>{product}</ProdText>
                  <img src={image}/>
                </Products>
                <Info>
                    <Des>Descrição</Des>
                    <Description>{description}</Description>
                    <Des>Preço</Des>
                    <Price>{price}</Price>
                    <Quant>Quantidade</Quant>
                    <Form onSubmit={AddToCart}>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
                        <Button type="submit">ADICIONAR AO CARRINHO</Button>
                    </Form>

                </Info>

            </PageContent>
        </Background>
    )
}

const Background= styled.div `
background-color: white;
heigth:100%;
width:100%;`




const PageContent= styled.div `
display: flex;
flex-direction:row;
justify-content: space-evenly;
align-items:center;`

const Products= styled.div `
display: flex;
flex-direction:column;
img{
    border-radius:5px;
    width: 300px;
    height:300px;
    margin-top:30px;
    outline-style:groove;
};
margin-left:100px;
margin-top:40px;
`

const ProdText= styled.div `
font-family: Open Sans;
font-size: x-large;
font-weight: 900;
`

const Info= styled.div `
display: flex;
flex-direction:column;
margin-top:150px;
`
const Des= styled.div `
font-family: Open Sans;
font-size: large;
font-weight: 900;
margin-bottom:20px;
`

const Description= styled.div `
font-family: Open Sans;
font-size: medium;
font-weigth: 300;
margin-bottom: 20px;
width: 400px;
margin-top:15px;`

const Quant= styled.div `
font-family: Open Sans;
font-size: medium;
font-weigth: 300;
margin-bottom: 5px;`

const Button= styled.button `
background-color: #6cc4b1;
border-radius: 20px;
color: white;
font-family:Open Sans;
font-size: x-large;
font-weight:900;
width: 250px;
height:100px;
margin-top:50px;
cursor: pointer;`

const Form= styled.form `
display:flex;
flex-direction:column; `

const Price= styled.div `
font-family: Open Sans;
font-size: medium;
font-weigth: 300;
margin-bottom: 70px;
width: 400px;`