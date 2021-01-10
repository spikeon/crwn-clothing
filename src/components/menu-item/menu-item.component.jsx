import React from 'react';
import "./menu-item.styles.scss"
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, match, history}) => (
    <div
        className={`menu-item ${size}`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <div className="subtitle">SHOP NOW</div>
        </div>
    </div>
)

export default withRouter(MenuItem);