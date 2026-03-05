import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <Link to='/'><i class="icon-home"></i> Go back in initial page, is better.</Link>
        </>
    )
}

export default NotFound
