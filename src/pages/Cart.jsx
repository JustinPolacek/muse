import style from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"

const Container =style.div`
`

const Wrapper =style.div`
padding: 20px;
`

const Title =style.h1`
font-weight: 300;
text-align: center;
`

const Top =style.div`
display: flex;
align-items: center;
justify-content: space-between;

`;

const TopButton= style.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;
`

const Bottom =style.button``

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom></Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
