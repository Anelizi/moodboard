import styled from "styled-components";
import Top from "../components/Top";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import Modal from "../components/Modal";

export default function Cart(){
    const {prodname, setProdname, address, setAddress, total, setTotal, open, setOpen}= useContext(CartContext)

    return(
        <Container>
            <Top/>
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