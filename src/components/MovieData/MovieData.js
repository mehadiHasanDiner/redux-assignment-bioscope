import React from 'react';
import './MovieData.scss'
import { Row } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import { useSelector } from 'react-redux';



const MovieData = () => {

    const movies = useSelector((state) => {
        return state.movies.demoData;
    })

    return (
        <div className='container my-5 px-4 px-md-0'>
            
            <Row gutter={[{ xs: 16, sm: 24, md: 24, lg: 32 }, { xs: 16, sm: 24, md: 24, lg: 32 }]}>
                {
                    movies?.map(movie => <MovieCard key={movie.id} {...movie} from={'MovieData'}/>)
                }
            </Row>
        </div>
    );
};

export default MovieData;