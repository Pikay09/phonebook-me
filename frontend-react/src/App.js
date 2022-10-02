import './App.css';
import {useState, useEffect} from 'react'
import Phonelists from './components/Phonelists';
import UpdateForm from './components/UpdateForm';


function App() {
  const [phonenums, setPhonenums] = useState(['pleasewait'])
  const [editednumber, setEditednumber] = useState(null)

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

  const editnumber = (phonenum) => {
    setEditednumber(phonenum)
  }

  const updatedData = (phonenum) => {
    const new_phonenumber = phonenums.map(my_phonenumbers => {
      if (my_phonenumbers.id === phonenum.id) {
        return phonenum
      } else {
        return my_phonenumbers
      }
    })
    setPhonenums(new_phonenumber)   
  }

  return (
    <div className="App">
      
      <Phonelists phonenums={phonenums} editNumber={editnumber}/>
      {editednumber? <UpdateForm phonenum={editednumber} updatedData={updatedData} /> : null}
    </div>
  ); 
}

export default App;
