import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContect";

export default function SignIn() {
    const { handleSetToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function checkData(event) {
        event.preventDefault()
        const data = { email, password }
        const checkEMail = /\S+@\S+\.\S+/;

        if ((email.search(checkEMail) !== -1) && password.length > 3) {
            const requisition = axios.post(`${process.env.REACT_APP_API_URL}/`, data)
            requisition.then((res) => {
                alert("Usuário logado")
                console.log(res)
                const user = JSON.stringify(res.data);
                localStorage.setItem("usuario", user);
                handleSetToken(res.data);
                navigate('/home')
            })
            requisition.catch((err) => {
                alert(err.messag)
            })
        } else {
            alert("Preencha os dados corretamente")
        }
    }


    return (
        <SingInContainer>
            <Logo>moodboard</Logo>
            <Form>
                <Input
                    placeholder="E-mail"
                    type="email"
                    required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={checkData} >Entrar</Button>
            </Form>

            <Link to={"/cadastro"}>
                Não tem cadastro? Cadastre-se!
            </Link>
        </SingInContainer>
    )
}

const SingInContainer = styled.section`
  height: 100%;
  font-size: 15px;
  font-family: open sans;
  margin-top: 80px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
    font-size: 60px;
    font-weight: 900;
    color: #6cc4b1;
    text-align: center;
    margin-bottom:70px;
  `

const Input = styled.input`
    font-size: 15px;
    width: calc(80%);
    border-radius: 30px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    border-radius: 5px;
`
const Button = styled.button`
        outline: none;
        border: none;
        border-radius: 30px;
        background-color: #6cc4b1;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: 40%;
        margin-top:20px;
        margin-bottom:20px;
        padding: 12px;
`