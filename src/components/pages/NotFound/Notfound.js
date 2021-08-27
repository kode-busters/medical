import React from 'react'
import { Helmet } from 'react-helmet'

const Notfound = () => {
    return (
        <div className='pages-container'>
            <Helmet>
                <title>404: Page not Found</title>
            </Helmet>
            Page Not Found
        </div>
    )
}

export default Notfound
