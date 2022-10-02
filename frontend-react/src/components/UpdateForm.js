import { Button } from '@mui/material'
import {useState} from 'react'
import APIservice from './APIservice'

function UpdateForm(props) {

    const [number, setNumber] = useState(props.phonenum.number)
    const [fullname, setFullname] = useState(props.phonenum.fullname)

    const updatePhonenum = () => {
      APIservice.UpdatePhonenum(props.phonenum.id, {number, fullname})
      .then((res) => {
            props.updatedData(res)
        })
        .catch((err) => console.log(err))

    }

  return (
    <div >
        {props.phonenum? (
        <div style={{marginBottom:"3"}}>
            <label htmlFor='tittle' className='form-label'>Numbers</label>
            <input type='text' className='form-control' placeholder='Enter the persons fullname here' 
            value={fullname} 
            onChange= {(e) => setFullname(e.target.value)} />
            <label htmlFor='tittle' className='form-label'>Numbers</label>
            <input type='text' className='form-control' placeholder='Enter phonenumber example: 0123456789'
            value={number}
            onChange= {(e) => setNumber(e.target.value)} />

            <Button variant="contained" color="success" onClick={updatePhonenum}>Update</Button>
        </div>  
        ): console.log('fetching data')
        }
    </div>
  )
}

export default UpdateForm