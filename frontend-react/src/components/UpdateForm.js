import { Button } from '@mui/material'
import {useState, useEffect} from 'react'
import APIservice from './APIservice'
import FormModal from './FormModal'

const style = {
  position: 'absolute',
  left: '50%',
  top:"75%",
  transform: 'translate(-50%, -50%)',
  p: 10,
};
const style2 = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 10,
  margin:9
};
const style3 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 10,
  margin:9
};

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
      <FormModal >
        {props.phonenum? (
        <div >
          
          <div style={style2}>
            <label style={{padding:10,fontSize:20}} htmlFor='tittle' className='form-label'>Full Name</label>
            <input style={{width:200,margin:5}} type='text' className='form-control' placeholder='e.g: John Doe' 
            value={fullname} 
            onChange= {(e) => setFullname(e.target.value)} />
          </div>

          <div style={style3}>
            <label style={{padding:10,fontSize:20}} htmlFor='tittle' className='form-label'>Phone Number</label>
            <input style={{width:200,margin:5}} type='text' className='form-control' placeholder='e.g: 0123456789'
            value={number}
            onChange= {(e) => setNumber(e.target.value)} />
          </div>
            
          <div style={style}>
            {
            props.phonenum.id? <Button variant="contained" color="success" onClick={updatePhonenum}>Update</Button> : 
            <Button variant="contained" color="success" onClick={insertPhonenum}>Save Number</Button>
            }
          </div>
        </div>  
        ): 'fetching data'
        }
      </FormModal>
    </div>
  )
}

export default UpdateForm