import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <div className='AboutHeaderBody'>
      <div className='AboutHeader'>
        Street lighting
        <div className='AboutUnderline'></div>
      </div>
      <div className='AboutDocument'>
        <div className='AbDocuOne'>
          <div className='about'>About</div>
          <button className='aboutButton'>Introduction</button>
        </div>
        <div className='AbDocuThr'></div>
        <div className='AbDocuTwo'>
          <div className='abuintro'>Introduction
            <div className='intUnderline'></div>
          </div>
          <div className='abudic'><p>There is a growing number of over 300 million street lights in the world, yet the majority are still to be converted to LED luminaires despite their clear technological and economic advantages. While official requirements differ around the world the main principles for good street lighting are the same; high quality illumination that ensures clear visibility and road safety. Whether it is a small pedestrian walkway, high-speed multilane freeway, pedestrian crossing or tunnel, there are multiple ways to illuminate them properly.
          </p></div>
        </div>

      </div>
    </div>

  )
}
