import React from 'react'

function MenuItem({ image, name, content, price }) {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1 style={{ marginBottom: '10px', marginTop: '10px' }}>{name}</h1>
            <h6 style={{ marginTop: '0px' }}>{content}</h6>
            <p><i style={{ color: 'red', marginTop: '5px' }}>{price} NOK</i></p>

        </div>
    )
}

export default MenuItem