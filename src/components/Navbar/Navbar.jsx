import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { searchMovie } from '../../Feature/currentGenre';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const[query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handleKeyPress = () => {
        dispatch(searchMovie(query));
    }

    return (
        <div className='w-full px-7 py-5 text-white flex justify-center items-center bg-light-blue'>
            <div className='w-[100%] max-w-[1700px] flex items-center justify-between'>
                <Link to="/" className="font-black text-2xl ">MoviesAdda</Link>
                <div className="relative hidden sm:block">
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Enter a movie' className='bg-dark-Gray py-3 pl-4 pr-10 text-light-Gray border-none outline-none rounded-lg w-[250px] text-sm placeholder:text-sm' />
                    {/* logo of search */}
                    <FaSearch className='absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer' onClick={handleKeyPress}/>
                </div>
                <Link to="/genre" className='py-3 px-5 bg-dark-Gray rounded-lg text-sm' >Select Genre</Link>
            </div>
        </div>
    )
}

export default Navbar