import React from 'react'
import Swal from "sweetalert2" 
import { useNavigate } from "react-router-dom";

const Menu = ({Link}) => {
  const cerrar = true
  const adi = true;
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
  if(cerrar === true){
    Swal.fire({
      title: 'Esta usted seguro?',
      text: "Cerrando Sesión !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo salir!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Todo ha ido bien!',
          'Ha cerrado sesión.',
          'success'
        )
        console.log("cerraste")
        navigate('/Formulario');
      }
      else {
        console.log("no cerraste")
      }
    })  
  }
  else{
  }
  }

  function handleClick2(e) {
    e.preventDefault();
    if(adi === true){
      Swal.fire({
        title: '¿Jugamos?',
        text: "Tienes que Adivinar el numero secreto!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Vamos!'
      }).then((result2) => {
        if (result2.isConfirmed) {
          navigate('/Adivinanza');
        }
        else {
          console.log("no juegas")
        }
      })  
    }
    else{
    }
    }
    
    
  return (
    <div>
      
      {/* <Link to="/Adivinanza">Adivinanza</Link><br></br>  */}
      {/*  <Link to="/">Cerrar Sesion</Link><br></br>  */}
      <button onClick={handleClick} className='cerrar'>CERRAR SESIÓN</button><br></br>
      <button onClick={handleClick2} className='adivinanza'>ADIVINANZA</button>
    </div>
  )


}

export default Menu