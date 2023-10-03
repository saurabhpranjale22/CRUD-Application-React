import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { id } = useParams();



  useEffect(() => {
    axios.get(`https://651b2521194f77f2a5ae490c.mockapi.io/sp/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
  
    });
  }, []);

  const navigate = useNavigate();

  console.log(name)



  function Update(e) {
    e.preventDefault();
    axios.put(`https://651b2521194f77f2a5ae490c.mockapi.io/sp/${id}`,{ 
    name: name,
    email: email,
    phone: phone}).then(navigate("/admin"));
  }

  return (
    <>
    
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
    <Link
          to={`/admin`}
          className="hover:bg-gray-600 absolute left-2 top-2 bg-white hover:shadow-md  outline-none  font-bold border  hover:text-gray-200 text-slate-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
      <h2 className="text-2xl font-bold">User Details</h2>
      <form onSubmit={Update} className="w-[50%] h-full flex flex-col mt-2">
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
          UPDATE USER
        </button>
      </form>
    </div>
    
    </>
  )
}

export default Edit