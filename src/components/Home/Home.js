import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import MovieData from '../MovieData/MovieData';

const Home = () => {

    return (
        <div>
            <Navbar />
            <MovieData />
        </div>
    );
};

export default Home;