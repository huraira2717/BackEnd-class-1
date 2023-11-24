import { useState , useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [user, setUser] = useState([])

 useEffect(()=>{
  axios.get('/api/user')
  .then((response) => {
     setUser(response.data) 
    }).catch((err) => {
      console.error(err)
    });
  })

  return (
    <>
    <h1>user : {user.length}</h1>
    {
      user.map((user , index)=>(
        <div key={user.id}>
          <h2>{user.title}</h2>
          <h2>{user.des}</h2>
        </div>
      ))
    }
    </>
  )
}

export default App
