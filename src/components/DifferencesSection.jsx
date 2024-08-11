import React from 'react'
import Button from './Button/Button'
import {differences} from '../data'
import { useState } from 'react'

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null)
    function handleClick(type){
      setContentType(type)
    }
  return (
    <section>
          <h3>Чем мы отличаемся от других?</h3>
          {Object.keys(differences).map((key) => (
            <Button
            isActive={contentType === key}
            onClick={() => handleClick(key)}
            >
              {key === 'way' ? "Подход" : key === "easy" ? "Доступность": "Концентрация"}
            </Button>
          ))}
          {contentType ? (<p>{differences[contentType]}</p>) : (<p>Нажми на кнопку</p>)}
        </section>
  )
}
