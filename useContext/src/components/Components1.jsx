import React, { useContext } from 'react'
import { couterContext } from '../context/context'

const Components1 = () => {
    const counter = useContext(couterContext)
  return (
    <div>
      {counter}
    </div>
  )
}

export default Components1
