import React from 'react';
import Landing from '../Landing'

const Home = ({data}) => {
    const { frontmatter, excerpt } = data[0].node
  
    return (
        <>
           <Landing dataFront={frontmatter} dataText={excerpt} /> 
        </>
    );
};

export default Home;