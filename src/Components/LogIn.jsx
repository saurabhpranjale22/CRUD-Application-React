import React, { useContext, useState } from 'react';

import {AuthContext} from './Context'

import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const {state,setState} = useContext(AuthContext);

 console.log(state)
  const handleSubmit = (event) => {
    event.preventDefault();
    if(username == "Admin" && password == "Admin@123" ){
     setState(true)
     navigate('/admin')
    }
  };

  
 

  return (
    <>
    <div className='h-[40rem] flex justify-center items-center'>
    <form onSubmit={handleSubmit} className='h-[29rem] w-[22rem] flex flex-col items-center '>
      <h1 className='text-2xl font-bold'>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        className="bg-gray-200 w-[95%]  outline-none font-normal border border-zinc-400 py-4 pl-6 mt-4"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="bg-gray-200 w-[95%]  outline-none font-normal border border-zinc-400 py-4 pl-6 mt-4"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="bg-slate-900 outline-none font-bold border px-6 text-white border-zinc-400 py-4 pl-4 mt-4" type="submit">Submit</button>
    </form>
    
    </div>
    </>
  );
};

export default LogIn;