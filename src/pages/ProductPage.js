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
        const requisition= axios.get("mongodb://localhost:27017/moodboard/produtos",{ headers: { Authorization: `Bearer ${auth}`,Product: params.product_name }})
        requisition. then((response)=>{ setImage(response.data.image);
        setDescription(response.data.description);
        setProduct(response.data.productname)
        setPrice(response.data.price)})
    },[])

    function AddToCart(event){
        event.preventDefault()
        const body= {product: product, amount: amount, price: price }
        const requisition= axios.post("mongodb://localhost:27017/moodboard/produtos",body);
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
            <PageContent></PageContent>
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

const Product= styled.div `
`