import { Button } from '@mui/material'
import {useState, useEffect} from 'react'
import APIservice from './APIservice'

function UpdateForm(props) {

    const [number, setNumber] = useState('')
    const [fullname, setFullname] = useState('')


    useEffect(() => {
      setFullname(props.phonenum.fullname)
      setNumber(props.phonenum.number)
    },[props.phonenum])

    const updatePhonenum = () => {
      APIservice.UpdatePhonenum(props.phonenum.id, {fullname, number})
      .then((resp) => {
            props.updatedData(resp)
        })
        .catch((err) => console.log(err))

    }

    const insertPhonenum = () => {
      APIservice.InsertPhonenum({number, fullname})
      .then(resp => props.insertedPhonenum(resp))
      .catch((err) => console.log(err))
    }

  return (
    <div >
        {props.phonenum? (
        <div style={{marginBottom:"3"}}>
            <label htmlFor='tittle' className='form-label'>Full Name</label>
            <input type='text' className='form-control' placeholder='Enter the persons fullname here' 
            value={fullname} 
            onChange= {(e) => setFullname(e.target.value)} />
            <label htmlFor='tittle' className='form-label'>Phone Number</label>
            <input type='text' className='form-control' placeholder='Enter phonenumber example: 0123456789'
            value={number}
            onChange= {(e) => setNumber(e.target.value)} />

            {
              props.phonenum.id? <Button variant="contained" color="success" onClick={updatePhonenum}>Update</Button> : 
              <Button variant="contained" color="success" onClick={insertPhonenum}>Save Number</Button>
            }
            

            
        </div>  
        ): 'fetching data'
        }
    </div>
  )
}

export default UpdateForm