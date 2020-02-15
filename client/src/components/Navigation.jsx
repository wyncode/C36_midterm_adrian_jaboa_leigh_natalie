import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
<div className='navigation'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/categories">Categories</Link>
    </div>
    ) 
}

export default Navigation

//created by Natalie Lozano 02.15.2020
