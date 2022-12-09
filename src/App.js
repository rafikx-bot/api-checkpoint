import axios from 'axios';
import { useState ,useEffect} from 'react';
import './App.css';
import UserList from './UserList';


function App() {
  const[users, listOfUsers]=useState([null]);

  useEffect(()=>
  {axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
    listOfUsers(result.data)
  });},[]);


  return (
    <div className="App">
      <div><UserList users={users}/></div>
    <UserList/>
    </div>
  );
}

export default App;
