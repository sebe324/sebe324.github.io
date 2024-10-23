import './Projects.css'
import { useState } from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
function Projects()
{
    const imageUrls=[image1,image2,image3];
    const titles=["Retro Game", "Ping Pong", "Various Visualizations"]
    const [imageIndex, setImageIndex] = useState(0)

    function goLeft()
    {
        if(imageIndex==0)
            setImageIndex(imageUrls.length-1);
        else setImageIndex(imageIndex-1);
        console.log(imageIndex);
    }

    function goRight()
    {
        if(imageIndex==imageUrls.length-1)
            setImageIndex(0)
        else setImageIndex(imageIndex+1);
    }
    return(
        <section id="projects">
            <b>Projekty</b>
            <br></br>
            <br></br>
            <div className='slider' href="google.com">
            <div className='arrow-box left noSelect' onClick={goLeft}>&lt;</div>
            <a href="https://www.google.com" target="_blank">
            <img src={imageUrls[imageIndex]}></img>
            </a>
            <div className='arrow-box right noSelect' onClick={goRight}>&gt;</div>
            <div className="description">{titles[imageIndex]}</div>
            </div>
        </section>
    )
}

export default Projects