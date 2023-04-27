import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useEffect , useParams} from "react"
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

export default function Product(){

    const {image, setImage, description, setDescription, product, setProduct, price, setPrice, amount, setAmount }= useContext(ProductContext)

    const params = useParams();
    const navigate= useNavigate();

    useEffect(() => {
        // colocar o ${auth}
        const requisition= axios.get("mongodb://localhost:27017/moodboard/produtos",{ headers: { Authorization: `Bearer`,Product: params.product_name }})
        requisition. then((response)=>{ setImage(response.data.image);
        setDescription(response.data.description);
        setProduct(response.data.productname)
        setPrice(response.data.price)})
    },[])

    function AddToCart(event){
        event.preventDefault()
        const body= {product: product, amount: amount, price: price }
        const requisition= axios.post("mongodb://localhost:27017/moodboard/carrinho",body);
        requisition.then(navigate("/cart"))
        requisition.catch((err)=> alert(err.message))
    }
    return(
        <Background>
            <Header>
                <Logo>moodboard</Logo>
                <Icons>
                  <ion-icon name="cart"></ion-icon>
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <ion-icon name="exit-outline"></ion-icon>
                </Icons>
            </Header>
            <PageContent>
                <Products>
                  <ProdText>{product}</ProdText>
                  <img src={image}/>
                </Products>
                <Info>
                    <Des>Descrição</Des>
                    <Description>{description}</Description>
                    <Quant>Quantidade</Quant>
                    <form onSubmit={AddToCart}>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
                        <Button type="submit">ADICIONAR AO CARRINHO</Button>
                    </form>

                </Info>

            </PageContent>
        </Background>
    )
}

const Background= styled.div `
background-color: white;
heigth:100%;
width:100%;`

const Header= styled.header `
display:flex;
flex-direction: row;
width:100%;
outline-color: gray;
outline-style: inset;
margin-bottom:50px;
`

const Logo= styled.div `
color: #6cc4b1;
font-family: Open Sans;
font-size: x-large;
font-weigth: 700;
`

const Icons= styled.div `
display: flex;
flex-direction:row;
justify-content: space-between;`

const PageContent= styled.div `
display: flex;
flex-direction:row;
justify-content: space-between;
align-items:center;`

const Products= styled.div `
display: flex;
flex-direction:column;
img{
    border-radius:5px;
    width: 300px;
    height:300px;
    margin-top:30px;
}
`

const ProdText= styled.div `
font-family: Open Sans;
font-size: x-large;
font-weigth: 700;
`

const Info= styled.div `
display: flex;
flex-direction:column;
`
const Des= styled.div `
font-family: Open Sans;
font-size: large;
font-weigth: 400;
margin-bottom:20px;
`

const Description= styled.div `
font-family: Open Sans;
font-size: medium;
font-weigth: 300;
margin-bottom: 30px;`

const Quant= styled.div `
font-family: Open Sans;
font-size: medium;
font-weigth: 300;
margin-bottom: 5px;`

const Button= styled.button `
background-color: #6cc4b1;
border-radius: 8px;
color: white;
font-family:Open Sans;
font-size: large;
width: 250px;
height:100px;`