import React from 'react'
import { Helmet } from 'react-helmet'

const Notfound = () => {
    return (
        <div className='pages-container'>
            <Helmet>
                <title>404: Page not Found</title>
            </Helmet>
            <h1>Page Not Found</h1>
        </div>
    )
}

export default Notfound
