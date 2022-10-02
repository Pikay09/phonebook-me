import './App.css';
import {useState, useEffect} from 'react'
import Phonelists from './components/Phonelists';
import UpdateForm from './components/UpdateForm';
import { Button } from '@mui/material';


function App() {
  const [phonenums, setPhonenums] = useState([])
  const [editednumber, setEditednumber] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/get', {
      method: 'GET',
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

  const openForm = () => {
    setEditednumber({fullname: '', number:''})
  }

  const insertedPhonenum = (phonenum) => {
    const new_nombor = [...phonenums, phonenum]
    setPhonenums(new_nombor)
  }

  const deletePhonenum = (phonenum) => {
    const new_nombors = phonenums.filter(mynumbers => {
      if(mynumbers.id === phonenum.id) {
        return false;
      } else {
        return true;
      }
    })
    setPhonenums(new_nombors)
  }

  
  
  return (
    <div className="App">
      <div>
        <Button onClick={openForm} variant='outlined' color='success'>
        Insert New Number
      </Button>
      </div>
      <Phonelists phonenums={phonenums} editNumber={editnumber} 
      deletePhonenum={deletePhonenum}/>
      <div>
        {editednumber? <UpdateForm phonenum={editednumber} updatedData={updatedData} insertedPhonenum={insertedPhonenum} /> : null}
      </div>
    </div>
  ); 
}

export default App;
