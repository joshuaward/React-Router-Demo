import React from 'react';

// components
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Blockquote from '../components/Blockquote';
import TextBlock from '../components/TextBlock';
import FeatureImage1 from '../assets/images/gallery-1.jpg';
import FeatureImage2 from '../assets/images/gallery-2.jpg';

const Home = () => {
    return (
        <>
            <Hero
                type="home"
                variation="primary"
                title="Welcome to [Template Name]!"
            />
            <Feature
                title="Featured Item #1"
                variation="primary"
                image={FeatureImage1}
                cta={{
                    link: "#",
                    text: "Featured Item #1"
                }}
            />
            <Feature
                title="Featured Item #2"
                variation="flipped"
                image={FeatureImage2}
                cta={{
                    link: "#",
                    text: "Featured Item #2"
                }}
                color="peach"
            />
            <TextBlock />
            <Blockquote
                text="You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection."
                author="Siddhartha Gautama"
                variation="primary"
            />
        </>
    )
}

export default Home;