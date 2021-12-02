import { Facebook, Instagram, MailOutline, Pinterest, Room, Twitter, Phone } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from '../responsive'


const Container=styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`;

const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo=styled.h1``

const Desc=styled.p`
margin: 20px 0px;
`

const SocialContainer=styled.div`
display: flex;

`


const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;

`


const Center=styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})}
`;

const Title = styled.h3`
margin-bottom: 30px;
`

const List =styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;

`

const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
`

const Right=styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#eee"})}
`;


const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center
`

const Payment=styled.img`
width: 50%;
`

const Footer = () => {
    return (
        <Container>
        <Left>
            <Logo>MUSE.</Logo>
            <Desc>We create beautiful space with great plants.</Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest />
                </SocialIcon>      
            </SocialContainer>
        </Left>

        <Center>
         <Title> Useful Links</Title>
         <List>
         <ListItem>Home</ListItem>
         <ListItem>Cart</ListItem>
         <ListItem>Plants</ListItem>
         <ListItem>Unique Plants</ListItem>
         <ListItem>Accessories</ListItem>
         <ListItem>My Account</ListItem>
         <ListItem>Order Tracking</ListItem>
         <ListItem>Wishlist</ListItem>
         <ListItem>Terms</ListItem>
         </List>
        </Center>

        <Right>
         <Title> Contact</Title>
         <ContactItem>
         <Room style ={{marginRight: "10px"}}/> 622 dixie path, south rochester</ContactItem>
         <ContactItem> <Phone style ={{marginRight: "10px"}}/> +1 234 56 86</ContactItem>
         <ContactItem><MailOutline style ={{marginRight: "10px"}}/> contact@muse.dev</ContactItem>
         <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
