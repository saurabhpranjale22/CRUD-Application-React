
import Admin from './Admin';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from './Context'





const Protected = () => {
  const { state } = useContext(AuthContext);
 

  if (!state) {
    return <Navigate to="/" />;
  }

  return <Admin/>
   
};

export default Protected;