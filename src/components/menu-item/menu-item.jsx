import React from 'react'
import './menu-item.styles.scss'

const MenuItem=({ title, imgURL, size})=>(
        <div className={"menu-item"}
            >
            <div className="background-image"
                style={{ backgroundImage: `url(${imgURL})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )


export default MenuItem

