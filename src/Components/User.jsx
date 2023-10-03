import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://651b2521194f77f2a5ae490c.mockapi.io/sp/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  
  return (
    <>
    <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/admin`}
          className="hover:bg-gray-600 bg-white hover:shadow-md  outline-none  font-bold border mt-8 hover:text-gray-200 text-slate-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {user && (
          <div className="w-[700px] h-[200] px-6 py-4 flex  bg-red-200  justify-center items-center  mt-16 ">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-black font-bold text-3xl ">
                Name
              </h2>
              <h2 className="text-black font-bold text-3xl ">
                Email
              </h2>
              <h2 className="text-black font-bold text-3xl ">
                Phone
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-slate-900 font-bold text-3xl ">
                {user.name}
              </h2>
              <h2 className="text-slate-900 font-bold text-3xl ">
                {user.email}
              </h2>
              <h2 className="text-slate-900 font-bold text-3xl ">
                {user.phone}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default User