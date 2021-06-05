import React from 'react';
import { Row, Col, Divider } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import Navbar from '../Shared/Navbar/Navbar';

const Watched = () => {

    const movies = useSelector((state) => {
        return state.movies.watched;
    })

    return (
        <section>
            <Navbar />

            <div className='container my-5 px-4 px-md-0'>
                <Divider orientation="left" className='custom-divider mb-3 mb-md-5'><span style={{color:'black'}}>Movies Watched List </span></Divider>

                <Row gutter={[{ xs: 16, sm: 24, md: 24, lg: 32 }, { xs: 16, sm: 24, md: 24, lg: 32 }]}>
                    {
                        movies.length ?
                            movies.map(movie => <MovieCard key={movie.id} {...movie} from={'watched'} />)
                            :
                            <Col flex={1}>
                                <p className='custom-divider text-center'> <span style={{color:'black'}}>Watched List is empty</span></p>
                            </Col>
                    }
                </Row>
            </div>

        </section>
    );
};

export default Watched;