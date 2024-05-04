import './index.css'
import Card from './card'
import cardimg1 from './images/cardimg.png'
import cardimg2 from './images/cardimg2.png'
import cardimg3 from './images/cardimg3.png'


export default function Cards(){
    return(
        <div className='flex'>
            <Card
            img = {cardimg1}
            h6 = "5.0 (6)"
            h3 = "Life lessons with Katie Zaferes"
            h4 = "From $136"
            />
            <Card
            img = {cardimg2}
            h6 = "5.0 (30)"
            h3 = "Learn wedding photography"
            h4 = "From $125"
            />
            <Card 
            img = {cardimg1}
            h6 = "4.8 (2)"
            h3 = "Group Mountain Biking"
            h4 = "From $50"
            />
            <Card 
             img = {cardimg2}
             h6 = "5.0 (6)"
             h3 = "Life lessons with Katie Zaferes"
             h4 = "From $136"
            />
        </div>
    )
}