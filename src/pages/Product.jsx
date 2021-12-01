import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"



const Container =styled.div``

const Wrapper =styled.div`
padding: 50px;
display: flex;
`

const ImgContainer =styled.div`
flex: 1;
`

const Image =styled.img`
width: 100%;
object-fit: cover;
`

const InfoContainer =styled.div`
flex: 1;
padding: 0px 50px;
`

const Title =styled.h1`
font-weight: 100;
`

const Desc =styled.p`
margin: 20px 0px;
`

const Price =styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer=styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 30px 60px;
`

const Filter=styled.div`
 display: flex;
 align-items: center;
`

const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;

`

const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption=styled.option``

const AddContainer=styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;

`

const AmountContainer =styled.div`
display: flex;
align-items: center;
font-weight:700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button =styled.button`
padding: 15px;
border: 2px solid teal;
background-color:white;
cursor: pointer;
font-weight: 500;
transition: all 0.5s ease;


&:hover{
    background-color: #f8f4f4;
}
`





const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements/>
            <Wrapper>
                <ImgContainer>
                <Image src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940ttps://i.ibb.co/s6qmxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title> Blue Cacti</Title>
                    <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto deleniti ducimus, vero est consectetur iure unde voluptatibus ea hic rerum! </Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor  color="darkblue"/>
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>SM</FilterSizeOption>
                                <FilterSizeOption>MED</FilterSizeOption>
                                <FilterSizeOption>LRG</FilterSizeOption>


                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                     <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add/>
                     </AmountContainer>
                     <Button> ADD TO CART</Button>

                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
