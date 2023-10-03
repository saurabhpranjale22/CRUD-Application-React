import React, { useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context'

const Admin = () => {
  const [dataRetrive,setDataRetrive] = useState([])    

  const {setState} = useContext(AuthContext)

const dataRead = () =>{
axios.get('https://651b2521194f77f2a5ae490c.mockapi.io/sp').then((item)=>{setDataRetrive(item.data)})
    
}
useEffect(()=>{
dataRead()
},[])

const deleteIt = (id) =>{
axios.delete(`https://651b2521194f77f2a5ae490c.mockapi.io/sp/${id}`).then(()=>{dataRead()})
}

// const EditIt = (id,name,email) =>{
// localStorage.setItem('id',id)
// localStorage.setItem('name',name)
// localStorage.setItem('email',email)
// }

    const navigate = useNavigate()
  return (
    <>
    <button className='bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 mt-2 ml-2 cursor-pointer'  onClick={()=>{setState(false)}}>LogOut</button>
  
    

    <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
    <button className="bg-slate-600 outline-none font-bold border text-white border-zinc-400 py-2 px-6 hover:bg-slate-900  mb-4 pl-4 mt-4" onClick={()=>{navigate('/cform')}}>Create</button>
        <h1 className="text-3xl font-bold">DATA TABLE</h1> <button className="bg-green-500 hover:bg-green-600 outline-none font-bold border text-white border-zinc-400 py-2 px-4 rounded-full mb-4 pl-4 mt-1 absolute right-2 top-2" onClick={()=>{dataRead()}}>Refresh</button>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {dataRetrive.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.name}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.email}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.phone}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/user/${data.id}`}
                            className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                          >
                            VIew
                          </Link>
                          <Link
                            to={`/edit/${data.id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                           
                            Edit
                          </Link>
                          <Link
                            onClick={()=>deleteIt(data.id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin