import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    return (
        // {`./images/${props.card.coverImg}`}
        <div className='card--div'>
            
            <img src={props.card.imageUrl} alt='destination picture' className='card--img'/>
            <div className='destination--details'>
                <div>
                    <div className='location--div'>
                        <FontAwesomeIcon icon={faLocationDot} className="location--dot" />
                        <p className='location--text'>{props.card.location}</p>
                        <a href={props.card.googleMapsUrl} className='google--map'>View on Google Maps</a>  
                    </div>
                    <p className='title--text'>{props.card.title}</p>
                </div>
                <div>
                    <p className='trip--duration'>{props.card.startDate} - {props.card.endDate}</p>
                    <p className='destination--description'>{props.card.description}</p>
                </div>
            </div>
            
        </div>
    )
}

{/* <img src={props.card.imageUrl} alt='destination picture'/> */}

{/* <img src='https://images.app.goo.gl/CBaEFFD7wd5anzFD8' alt='destination picture' className='card--img'/> */}