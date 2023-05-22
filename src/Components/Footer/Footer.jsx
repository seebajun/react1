import React from 'react'
import './footer.css'
import Badge from 'react-bootstrap/Badge'

const Footer = () => {
  return (
    <div class="footer">
      <h4>Galeria de ocarinas de manofactura artesanal.</h4>
      <h5>Todos los derechos reservados.</h5>
      <div class="badge">
      <Badge bg="dark">Instrumentos</Badge>
      <Badge bg="success">Maderas</Badge>
      <Badge bg="dark">Viento</Badge>
      <Badge bg="success">Luteria</Badge>
      <Badge bg="dark">Arte</Badge>
      <Badge bg="success">Cerámica</Badge>
      </div>
    </div>
  )
}

export default Footer