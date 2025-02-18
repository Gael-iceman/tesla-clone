import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';

function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false)
  return (
    <Container>
        <a href="">
          <img src="/images/logo.svg" alt="logo" />
        </a>

        <Menu>
          <a href="">Model S</a>
          <a href="">Model 3</a>
          <a href="">Model X</a>
          <a href="">Model Y</a>
        </Menu>

        <RightMenu>
          <a href="">SHOP</a>
          <a href="">TESLA ACCOUNT</a>
          <CustomMenu onClick={()=>{
            setBurgerStatus(true)
          }}></CustomMenu>
        </RightMenu>
        
        <BurgerNav show ={burgerStatus}>
          <CloseWrapper>
          <CustomClose onClick={()=>{
            setBurgerStatus(false)
          }}></CustomClose>
          </CloseWrapper>
          <li><a href="">Model S</a></li>
          <li><a href="">Model 3</a></li>
          <li><a href="">Model X</a></li>
          <li><a href="">Model Y</a></li>
          <li><a href="">Existing inventory</a></li>
          <li><a href="">Trade-in</a></li>
          <li><a href="">Cybertruck</a></li>   
          <li><a href="">Roadaster</a></li>   
        </BurgerNav>

    </Container>
  )
}

export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px
top:0;
right:0;
left:0;
justify-content:space-between;
z-index:1;
margin-left:40px;
margin-right:40px;
margin-top:15px
`
const Menu=styled.div`
display:flex;
justify-content:center;
flex:1;
align-items:center;
a{
font-weight:600;
text-transform:uppercase;
padding:0 10px;
flex-wrap:nowrap;
}
@media(max-width:850px){
display:none;
}
`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
font-weight:600;
text-transform:uppercase;
padding:0 10px;
flex-wrap:nowrap;
}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props =>props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform 0.2s;
li{
padding:15px 0; 
border-bottom:1px solid rgba(0, 0, 0, .2);
a{
font-weight:600; 
}
}
`
const CustomClose=styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`