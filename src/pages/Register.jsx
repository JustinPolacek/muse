import styled from "styled-components"
import { mobile } from '../responsive'

const Container =styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background:linear-gradient(
    rgba(255,255,255, 0.2),
    rgba(255,255,255, 0.2)
),
 
 url("https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

 background-size: cover;
`


const Wrapper =styled.div`
padding: 20px;
width: 40%;
background-color: white;
${mobile({width: "75%"})}

`

const Title =styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form =styled.form`
display: flex;
flex-wrap: wrap;


`



const Input =styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`

const Agreement =styled.span`
font-size: 12px;
margin: 20px 0px;
`

const Button =styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`




const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder ="name"/>
                    <Input placeholder =" last name"/>
                    <Input placeholder ="username"/>
                    <Input placeholder ="email"/>
                    <Input placeholder ="password"/>
                    <Input placeholder ="confirm password"/>
                    <Agreement> 
                        By creating an account, I consent to the processing of my person
                        data in accorance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
