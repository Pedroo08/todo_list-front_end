import React from "react";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from "../../components/AuthForm";
import img from './Welcome.gif'


function Register (){
  const navegate = useNavigate();

  const handleNewUser = async (email,senha,auth) =>{

    if(!email|| !senha){

      alert("Por favor preencha os campos para continuar")

  }else{

    await createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      localStorage.setItem("userid",userCredential.user.uid)
      //console.log(userCredential)
      navegate('/tasks')
     })
    .catch((error) => {
      console.log(error.message);
      if(error.code ==  "auth/email-already-in-use")
      alert('O email digitado já estar em uso')
     });

  }

    
    
}

    return (
      <section className="main-Login">
          <img  className= "login-img"src={img} alt="bem-vindo"/>
          <AuthForm Titulo={"Cadastro"} Submit={handleNewUser} Register={true}/>
      </section>
    );
  }

export default Register;