import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>

            <iframe
                title='a'
                src="https://bing.com"
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>

        </div>
    )
}

export default Widgets