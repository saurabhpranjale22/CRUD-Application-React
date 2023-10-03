import axios from 'axios';
import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Forma = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();




const dataSubmit = (e) =>{
    e.preventDefault()
    axios.post('https://651b2521194f77f2a5ae490c.mockapi.io/sp',{
        name: name,
        email: email,
        phone:phone
    })
    navigate('/admin')
}    

    
  return (
    <>
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form onSubmit={dataSubmit} className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <button
          className="bg-slate-900 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
        >
          ADD USER
        </button>
      </form>
    </div>
    </>
  )
}

export default Forma