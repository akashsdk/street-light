import React from 'react'
import '../styles/Home.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Index from '../components/Index';

export default function Home() {
  const images = [
    "https://www.agcled.com/static/blog/led-street-light-04.jpg",
    "https://www.agcled.com/static/blog/led-street-light-02.jpg",
    "https://images.pexels.com/photos/1013516/pexels-photo-1013516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://media.istockphoto.com/photos/straight-road-background-with-cloudy-sky-picture-id1206523388?k=20&m=1206523388&s=612x612&w=0&h=60Sh0mq_ilIEHz3HUQgOVHhZB6dISVgYkas6ruCEWI4="
  ];
  return (
    <div className='HomePage'>
      <div>
        <Slide>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>
              <p className='HomeStyleP'>Smart Street Lighting System </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            <p className='HomeStyleP'>Smart Street Lighting System </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            <p className='HomeStyleP'>Smart Street Lighting System </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[3]})` }}>
            <p className='HomeStyleP'>Smart Street Lighting System </p>
            </div>
          </div>
        </Slide>
      </div>
      <Index/>
    </div>
  )
}
