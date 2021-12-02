import  styled  from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: "20vh"})}
`
const Info = styled.h1`
position: absolute;
top: 0;
bottom: 0;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

`
const Title = styled.div`
color: #ffffff;
margin-bottom: 40px;


`
const Button = styled.button`
border: none;
padding: 10px;
background-color: teal;
opacity: 0.8;
font-color: gray;
cursor: pointer;
font-weight: 600;
`


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem