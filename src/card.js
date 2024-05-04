import './index.css'
import cardimg from './images/cardimg.png'
import star from './images/Star.png'


export default function Card(props) {
    return (
        <div className='card'>
            <img className='cardImg' src={props.img} />
            <div className='star'>
                <div className='content'>
                    <img src={star} />
                    <h6>{props.h6}</h6>
                    <p>.USA</p>
                </div>
                <h3>{props.h3}</h3>
                <div className='flex'>
                    <h4>{props.h4}</h4>
                    <p> / person</p>
                </div>
            </div>
        </div>
    )
}