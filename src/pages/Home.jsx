import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import { Container, Headers, Section } from './style/Home.elements';


const Home = () => {
  return (
    <Container>
        <Headers>
            <Navbar/>
        </Headers> 
        <Section>
            <Slider/>
        </Section>     
    </Container>
    )
}

export default Home;