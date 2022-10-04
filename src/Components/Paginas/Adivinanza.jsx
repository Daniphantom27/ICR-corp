import React from 'react'
import Swal from "sweetalert2"
import { useState } from 'react'

const Adivinanza = () => {

const [numero, setNumero] = useState("");
const [count, setCount] = useState(0);
const [aleatorio, setAleatorio] = useState(Math.floor(Math.random() * 10))


    const handleChangeN = (e) => {
        setNumero({value:e.target.value})
        console.log(aleatorio)
      }

      const handleReiniciar = (e) => {
       setAleatorio((Math.floor(Math.random() * 10)))
      setCount(0)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(numero.value)>aleatorio && Number(numero.value)<=10) {
            setCount(count+1)
            Swal.fire({ 
              title:'Te pasaste',
              imageUrl:'https://images.uncyclomedia.co/inciclopedia/es/thumb/e/e8/Morty.png/300px-Morty.png'
            })
            
        } else if (Number(numero.value)<aleatorio && Number(numero.value)>0) {
          setCount(count+1)
          Swal.fire({ 
            title:'Estas por debajo',
            imageUrl:'https://images.uncyclomedia.co/inciclopedia/es/thumb/e/e8/Morty.png/300px-Morty.png',
          })

      } else if (Number(numero.value)>10 || Number(numero.value)<0) {
          setCount(count+1)
          Swal.fire({ 
            title:'Fuera de rango',
            imageUrl:'https://pa1.narvii.com/6379/ed0e84474e6740a8ba40a7afba89fac48cdfaefd_hq.gif'
          })

      } else if (Number(numero.value)===aleatorio) {
          setCount(count+1)
            Swal.fire({ 
              imageUrl: 'https://i.gifer.com/7FHx.gif',
              title:'Adivinaste con ' +count+ ' intentos'})
      }
      }
  return (
    <div>
        
        <form id='form-2' onSubmit={handleSubmit}>
        <header className="head-form">
      <h2>Adivinanza</h2>
      <p>Encuentra el numero secreto entre el 1 y el 10</p>
  </header>
        <div className="field-set"> 
        <input id='numero' type="text" value={numero.value} placeholder='Ingresa el numero'  autoComplete='off'  onChange={handleChangeN}/>
        <br></br>
        <br></br>
        <p>Presiona enter para verificar si acertaste</p>
        <button type="reset" onClick={handleReiniciar} id='resetear'>Generar numero</button>
        </div>

        </form>
        
    </div>
  )
}

export default Adivinanza