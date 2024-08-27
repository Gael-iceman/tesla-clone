import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
          <Section
          title="Model S"
          description="order online for touchless delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="Model Y"
          description="order online for touchless delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="Model X"
          description="order online for touchless delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="Model 3"
          description="order online for touchless delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="solar-roofs"
          description="order online for touchless delivery"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="New Interior"
          description="order online for touchless delivery"
          backgroundImg="new-interior.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="Game"
          description="order online for touchless delivery"
          backgroundImg="game.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="Connected"
          description="order online for touchless delivery"
          backgroundImg="connected.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="Audio"
          description="order online for touchless delivery"
          backgroundImg="audio.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
          />
          <Section
          title="Accessories"
          description="order online for touchless delivery"
          backgroundImg="accessories.jpg"
          leftBtnText="Order now"
          />
    </Container>
  )
}

export default Home

const Container =styled.div`
height:100vh;
`