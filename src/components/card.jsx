
import React from 'react'

const Card = (props) => {
  return (
    <>
    <div>
        <figure>
            <img
            style={{width: "14rem" , height:"10rem"}}
             src={props.src} alt="shoes" />
        </figure>
        <div className='card-body'>
            <h2 className='card-tittle'>{props.tittle}</h2>
            <p>{props.description}</p>
            <div className='card-actions justify-end'>
                <button className='btn btn-primary'>But now</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Card

























