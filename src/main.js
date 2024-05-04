import './index.css'
import image from './images/main-img.png'

export default function ImgSection() {
    return (
        <div className='hero'>
            <div className='main-img'>
                <img src={image} />
            </div>
            <h2>Online Experiences</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>

    )
}