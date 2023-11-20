import React from 'react';

// components
import Hero from '../components/Hero';
import TextBlock from '../components/TextBlock';

const About = () => {
    return (
        <>
            <Hero
                type="interior"
                variation="secondary"
                title="About"
            />
            <TextBlock />
        </>
    )
}

export default About;