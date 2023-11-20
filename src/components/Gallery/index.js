import React from 'react';

import './gallery.scss';

// gallery images
import Gallery1 from '../../assets/images/gallery-1.jpg';
import Gallery2 from '../../assets/images/gallery-2.jpg';
import Gallery3 from '../../assets/images/gallery-3.jpg';
import Gallery4 from '../../assets/images/gallery-4.jpg';

const Gallery = () => {
    const images = [
        {
            id: 1,
            src: Gallery1,
            alt: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            src: Gallery2,
            alt: 'Consectetur adipiscing elit'
        },
        {
            id: 3,
            src: Gallery3,
            alt: 'Ut enim ad minim veniam'
        },
        {
            id: 4,
            src: Gallery4,
            alt: 'Excepteur sint occaecat cupidatat'
        }
    ];

    return (
        <section className="gallery">
            {images.map((image) => (
                <div key={ image.id } className="gallery__img">
                    <img src={ image.src } alt={ image.alt } />
                </div>
            ))}
        </section>
    )
}

export default Gallery;