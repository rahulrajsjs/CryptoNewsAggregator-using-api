import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="container">
            <img src={props.imglink} />
            <h3>{props.heading}</h3>
            <p>News Provider name: {props.news_provider_name}</p>
            <p>{props.BODY}</p>
            <p>{ props.BODY }</p>
            <p>Last Updated: {props.lastupdate}</p>
            <button><a href={props.news_link} target='_blank'>Read more</a></button>
            <hr></hr>
        </div>
    </div>
  )
}

export default Card