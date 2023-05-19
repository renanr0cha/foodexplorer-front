import React from 'react'
import logo from "../assets/logo.svg"
import Input from '../components/Input'

export default function SignIn() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-4/5 h-lg flex flex-col align-middle'>
        <div className='w-full h-full flex items-center justify-center'>
          <img src={logo} alt='logo of food explorer, an teal hexagon with the name food explorer'/>
        </div>
        <div className='flex flex-col items-start justify-start gap-8 w-full mt-16'>
          <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" label="Email"/>
          <Input type="password" placeholder="No mínimo 6 caracteres" label="Senha"/>
          <button className='flex items-center w-full h-12 justify-center font-poppins bg-tomato-100 text-sm text-light-100 font-medium'>Entrar</button>
          <a href="/register" className='flex items-center w-full justify-center font-poppins text-sm text-light-100 font-medium'>Crie sua conta</a>
        </div>
      </div>

    </div>
  )
}
