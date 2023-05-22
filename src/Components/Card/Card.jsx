import React from 'react'
import './card.css'
import Button from 'react-bootstrap/Button'

const Card = (props) => {
  return (
    <div class="card">
      <img src={props.imagen} />
      <h3>{props.nombre}</h3>
      <h4>{props.precio}</h4>
      <button type="button" class="btn btn-outline-success">Más Información</button>
    </div>
  )
}

export default Card