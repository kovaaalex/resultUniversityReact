import React, { useState } from 'react'
import Button from './Button/Button'

export default function FeedbackSection() {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')
  const [hasError, setHasError] = useState(true)
  function handleNameChange(event){
    setName(event.target.value)
    setHasError(event.target.value.trim().length === 0)
  }

  function toggleError(){
    setHasError(!hasError)
  }

  return (
    <section>
        <h3>Обратная связь</h3>
        <Button onClick={toggleError}></Button>
        <form>
            <label htmlFor="name">Ваше имя</label>
            <input 
            type="text" 
            id="name" 
            className='control' 
            value={name} 
            style={{
                border: hasError ? '1px solid red' : null
            }}
            onChange={handleNameChange}/> 

            <label htmlFor="reason">Причина обращения</label>
            <select 
            id="reason" 
            className='control' 
            value={reason} 
            onChange={event => setReason(event.target.value)}>
                <option value="error">Ошибка</option>
                <option value="help">Нужна помощь</option>
                <option value="suggest">Предложение</option>
            </select>
            <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
        </form>
    </section>
  )
}
