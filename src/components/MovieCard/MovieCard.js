import React from 'react';
import './MovieCard.scss'
import { Col} from 'antd';
import { message } from 'antd';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, addToWatched, removeFromWatched, removeFromWatchlist } from '../../redux/actions/movieActions';

const MovieCard = (movie) => {

     const {id, title, poster_img, rating} = movie;

    const dispatch = useDispatch();

    const watchList = useSelector((state) => {
        return state.movies.watchList;
    })

    const watched = useSelector((state) => {
        return state.movies.watched;
    })

    let storedWatchList = watchList.find(o => o.id === movie.id);
    const watchListDisabled = storedWatchList ? true : false;

    let storedWatched = watched.find(o => o.id === movie.id);
    const watchedDisabled = storedWatched ? true : false;


    return (
        <Col className="gutter-row position-relative overflow-hidden movie-div" xs={12} sm={8} md={6} lg={4}>
            
                <img src={poster_img} alt="" className="img-fluid rounded-top bg-dark" />
                
            <p className='movie-rating shadow-sm'>{rating}</p>
            <div className='movie-info rounded-bottom shadow-sm overflow-hidden position-relative'>
                <p className='movie-title m-0'>{title}</p>
                
                {
                    movie.from === 'watchlist' ?
                    <button 
                    className="btn btn-transparent my-0 add-to-list-btn"
                    onClick={()=> {
                        dispatch(addToWatched(movie));
                        dispatch(removeFromWatchlist(movie));
                        message.success({
                            content: 'Added to Watched',
                            className: 'message'
                        });
                    }}>
                    <FontAwesomeIcon icon={faPlus} className='me-2' />Add to Watched</button> 

                    : movie.from === 'watched' ?

                    <button 
                    className="btn btn-transparent my-0 add-to-list-btn"
                    onClick={()=> { 
                        dispatch(removeFromWatched(movie));
                        message.success({
                            content: 'Removed from Watched',
                            className: 'message'
                        });
                    }}>
                    <FontAwesomeIcon icon={faMinus} className='me-2' />Remove</button> 

                    :

                    <button 
                    className="btn btn-transparent my-0 add-to-list-btn"
                    disabled={watchListDisabled}
                    onClick={()=> { 
                        dispatch(addToWatchlist(movie));
                        message.success({
                            content: 'Added to Watch-list',
                            className: 'message'
                        });
                    }}>
                    <FontAwesomeIcon icon={faPlus} className='me-2' />Add to Watchlist</button>
                }

            </div>
        </Col>
    );
};

export default MovieCard;