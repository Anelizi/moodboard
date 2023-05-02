import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContect";
import axios from "axios"

export default function SignUp() {
    const { handleSetToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmedpassword, setConfirmedPassword] = useState ("")

    function checkData(event) {
        event.preventDefault()
        const data = { name, image, email, password }
        const checkEMail = /\S+@\S+\.\S+/;

        if ((email.search(checkEMail) !== -1) && password.length > 3 && name.length >1 && password === Confirmedpassword) {
            const promise = axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, data)
            promise.then(response => {
                alert("Bem-vinde! Usuário cadastrado")
                handleSetToken(response.data.token)
                navigate('/')
            })
                .catch((err) => {
                    console.log(err)
                    alert("Não foi possível cadastrar usuário")
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
                    placeholder="Nome"
                    type="name"
                    required value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="Foto"
                    type="url"
                    required value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
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
                <Input
                    placeholder="Confirmar senha"
                    type="password"
                    required value={Confirmedpassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />

                <Button onClick={checkData} >Cadastrar</Button>
            </Form>

            <Link to={"/"}>
                Já possui cadastro? Entre!
            </Link>
        </SingInContainer>
    )
}

const SingInContainer = styled.section`
  height: 100%;
  font-size: 15px;
  font-family: open sans;
  margin-top: 60px;
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
    margin-bottom:50px;
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