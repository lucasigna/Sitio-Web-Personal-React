import React, { useState } from 'react'
import { Skeleton } from '@mui/material';

export const PortfolioItem = ({title,tools,image,description,linkGithub,linkWebsite}) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <a className='cardItemHref' href={linkWebsite} target="_blank">
            <div className="cardItem">
                {!imageLoaded && <Skeleton variant="rectangular" width={328} height={190} />}
                <img
                    src={image}
                    alt={title}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                    onLoad={handleImageLoad}
                />
                <div className='divContent'>
                    <p>{title}</p>
                    <p>{tools}</p>
                    <p>{description}</p>
                    <div className="divLinks">
                        <a href={linkGithub} target="_blank">Ver GitHub</a>
                        <a href={linkWebsite} target="_blank">Ver Sitio Web</a>
                    </div>
                </div>
            </div>
        </a>
        
    )
}
