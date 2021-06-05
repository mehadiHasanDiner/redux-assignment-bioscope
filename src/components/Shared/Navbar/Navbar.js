import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Navbar.scss'

const Navbar = () => {

    const movieTotal = useSelector((state) => {
        return state.movies.demoData;
    })

    const watchList = useSelector((state) => {
        return state.movies.watchList;
    })

    const watched = useSelector((state) => {
        return state.movies.watched;
    })

    return (
        <nav className="navbar navbar-expand-lg py-2 navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/"><span style ={{color:'lightGreen', fontWeight:'bold'}}>Bioscope</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className='justify-content-end'>
                        <div className="navbar-nav  my-md-0 my-3">
                            <Link className="nav-link  px-2  my-md-0" to="/">
                                All Movies
                                <span className='ms-2 badge'>{movieTotal.length}</span></Link>
                                <Link className="nav-link  px-2 text-end  my-md-0 d-flex" to="/watchlist">
                                Watch-list 
                                <span className='ms-2 badge'>{watchList.length}</span></Link>
                            <Link className="nav-link  px-2  my-md-0" to="/watched">
                                Watched
                                <span className='ms-2 badge'>{watched.length}</span></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;