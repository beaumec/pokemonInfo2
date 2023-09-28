import React from 'react'
import { Card,Container,Col, Row } from 'react-bootstrap'

export default function PokemonList({pokemons}) {
    
  return (
    <Container style={{backgroundColor:"rgb(19,00,13)", border:"10px"}}>
     <Card style={{color: "purple", backgroundColor:"#C0C0C0", fontSize:"30px"}}>
         <h1> List of Pokemons</h1>

         {pokemons.map((p,i)=> (
            <Row>
            <Col key={i} style={{marginTop:10}}>{p.name} </Col>
            </Row>
        ))} 
          
    </Card>   
    </Container>
      
  )
}
