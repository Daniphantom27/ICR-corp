import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"


const Formulario = ({ingresoU, setIngresoU, ingresoC, setIngresoC, nav, setNav, db, setDb, Link}) => { 
let usuario = "797";
let contraseña = "985";

const navigate = useNavigate();
  
const handleSubmit = (e) => {
  e.preventDefault();
  //console.log("ola si sonido xd")
  console.log(ingresoU, ingresoC)
  if (ingresoU.value === usuario && ingresoC.value === contraseña){
    let usuario2 = (parseInt (usuario.slice(2,3)))
    let contraseña2 = (parseInt (contraseña.slice(2,3))) 

    //console.log((usuario2) + (contraseña2));
    var sum = usuario2 + contraseña2 ;
    console.log(sum);
    //let opcion = prompt(usuario2 + '+' + contraseña2); 
    let opcion2 =  (parseInt(prompt(usuario2 + '+' + contraseña2)));
    if(opcion2 === sum){
      Swal.fire(
        'Todo ha ido bien!',
        'Sesion Iniciada!',
        'success'
      )
      navigate('/Menu'); 
    }
    else{
      Swal.fire(
        'ERROR!',
        'Captcha Incorrecto!',
        'error' 
      )
    }
    
  }else{
    Swal.fire(
      'ERROR!',
      'Usuario o contraseña Incorrecto!',
      'error'
    )
    }
  };

  

const handleChangeU = (e)=>{
  setIngresoU({value:e.target.value});
}
const handleChangeC = (e) => {
  setIngresoC({value:e.target.value});
}

return (
    
    <div className="overlay">
<form onSubmit={handleSubmit} >
  <div className="con">

  <header className="head-form">
      <h2>Log In</h2>
      <p>Bienvenido al sistema de ubicación para zonas públicas WIFI</p>
  </header>

  <br>
  </br>
  <div className="field-set">

        <span className="input-item">
          <i className="fa fa-user-circle"></i>
        </span>
    
        <input className="form-input" id="txt-input" type="text" placeholder="Ingresar Usuario" onChange={handleChangeU} required ></input>
      <br>
    </br>
      <span className="input-item">
        <i className="fa fa-key"></i>
      </span>
      <input className="form-input" type="password" placeholder="Ingresar Contraseña" id="pwd"  name="password" onChange={handleChangeC} required></input>
        
      <br>
      </br>
      <button className="log-in" > Log In </button>
  </div>
  </div>
  <div>
  </div>
</form>
</div>
  );
};

export default Formulario;
