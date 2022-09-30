import './App.css';
import {useState, useEffect} from 'react'


function App() {
  const [phonenums, setPhonenums] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'},
    })
    .then((resp) => resp.json())
    .then((resp) => setPhonenums(resp))
    .catch((err) => console.log(err))

  },[])  

  return (
    <div className="App">
      {phonenums.map(phonenum => {
        return (
          <div key={phonenum.id}>
            <h1>{phonenum.fullname}</h1>
            <p>{phonenum.number}</p>
            <p>{phonenum.date}</p>
          </div>  
        )
      } )}

    </div>
  );
}

export default App;
