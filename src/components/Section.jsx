import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
  return (

    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
        <ButtonGroup>
        <LeftButton>
          {leftBtnText}
        </LeftButton>
        {rightBtnText &&
        <RightButton>
         {rightBtnText}
        </RightButton>
        }
      </ButtonGroup>
        </Fade>

      <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>  
  )
}

export default Section

const Wrap=styled.div`
  z-index:10;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;   
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  padding: 20px;
  background-image:${props =>`url("/images/${props.bgImage}")`}
`
const ItemText=styled.div`
padding-top:15vh;
text-align:center
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:10px;
@media(max-width:760px){
flex-direction:column;
}
`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center; 
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:13px;
cursor:pointer;
margin:12px;
`
const RightButton=styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow=styled.img`
margin-top:10px;
height:40px;
animation: animateDown infinite 1.5s;
`
const Buttons=styled.div`
display:flex;
flex-direction:column;
 align-items: center; /* Center the arrow */
`