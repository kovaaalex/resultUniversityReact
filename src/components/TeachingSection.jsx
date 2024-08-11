import React from 'react'
import {ways} from '../data'
import WayToTeach from "./WayToTeach"
export default function TeachingSection() {
  return (
    <section>
        <h3>Наш подход к обучению</h3>
        <ul>
            {ways.map((el,index) => (
              <WayToTeach 
              key={index}
              title={el.title}
              description={el.description}
              />
            ))}
        </ul>
    </section>
  )
}
