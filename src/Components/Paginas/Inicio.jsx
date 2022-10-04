import React from 'react'
import '../Assets/Main.css'
import Swal from "sweetalert2" 
import { useNavigate } from 'react-router-dom';

const Inicio = ({Link}) => {
  const icr = true;
  const Navigate = useNavigate();

  function handleClick(e){
    e.preventDefault();
    
    if(icr === true){
      Swal.fire({
        title: 'Inicia Sesión de Chill',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://fondosmil.com/fondo/54336.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url('https://www.teleport.mx/wp-content/uploads/2016/12/tumblr_mjphnqLpNy1s5jjtzo1_400.gif')
          left top
          no-repeat
        `
      })
      Navigate('/Formulario')
    }
    }

  return (
  
    <div className='inicio'>
      <h3>Realizado por DANIEL SANCHEZ</h3>
      <ul>

      {/* <Link to="/Menu">MENU</Link><br></br> */}
      {/* <Link to="/Formulario">ICRcorp</Link> */}
      <button onClick={handleClick} className='adivinanza'>ICR-corp</button>

        </ul>

      
    </div>
  )
}

export default Inicio