import React from 'react'
import Hero from '../../components/Hero/Hero'
import { heroOne, heroTwo, heroThree, pricingData } from '../../data/homeData';
import Content from '../../components/Content/Content'

const HomePage = () => {
    return (
        <>
        <Hero />
        <Content {...heroOne}/>
        <Content {...heroTwo}/>
        <Content {...heroThree}/>
        </>
    )
}

export default HomePage
