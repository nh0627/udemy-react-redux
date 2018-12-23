import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    // Push props.images into an array and display it into div
    const images = props.images.map((image) => {
        // Let each element has a unique key(id property) also!
        return(
           <ImageCard key={image.id} image={image}/>
        );
    });

    return <div className="image-list">{images}</div>
};

export default ImageList;