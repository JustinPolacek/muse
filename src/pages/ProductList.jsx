import styled from "styled-components"
import Announcements from "../components/Announcements"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from '../responsive'

const Container =styled.div``
 
const Title=styled.h1`
margin: 20px;

`

const FilterContainer =styled.div`
display: flex;
justify-content: space-between;
`

const Filter =styled.div`
margin: 20px;
${mobile({wdith: "0px 20px", display: "flex", flexDirection: "column"})}

`

const FilterText =styled.span`
font-style: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: "0px"})}

`

const Select=styled.select`
 padding: 10px;
 margin-right: 20px;
 ${mobile({margin: "10px 0px"})}

`

const Option=styled.option``




const ProductList = () => {
    return (
        <Container>
            <Navbar />
              <Announcements/>
               <Title> Plants</Title>
            
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                 <Select>
                     <Option disabled selected> 
                     by name
                     </Option>
                         
                         <Option> Cacti</Option>
                         <Option> Roses </Option>
                         <Option> Flowers</Option>
                         <Option> Small Trees</Option>
                         <Option> Teranium</Option>
                     
                 </Select>
                 <Select>
                     <Option disabled selected> 
                     size
                     </Option>
                         <Option> Sm</Option>
                         <Option> Lrg </Option>
                         <Option> Med</Option> 
                 </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                    < Option selected> Newest</Option>
                    <Option> Price (asc) </Option>
                         <Option> Price (desc)</Option> 
                         </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer/>
        </Container>
    )
}

export default ProductList
