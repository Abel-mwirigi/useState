import { useState } from 'react'
import { useForm } from './useForm';
import Snippet from './components/snippetList';

const App = ()=> {
  const [values, handleChange] = useForm({email:'', password:''});

  return (
    <div>
      <Snippet/>
      {/* <input name='email' value={values.email} onChange={handleChange}/>
      <input type='password' name='password' value={values.password} onChange={handleChange}/> */}
    </div>
  )
}

export default App
