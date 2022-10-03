import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import APIservice from './APIservice';
import { cyan } from '@mui/material/colors';

function Phonelists(props) {
  const editNumber = (phonenum) => {
    props.editNumber(phonenum)
  }

  const deletePhonenum = (phonenum) => {
    APIservice.DeletePhonenum(phonenum.id)
    .then(() => props.deletePhonenum(phonenum))
  }

  return (
    <div>
       {props.phonenums.map(phonenum => {
        return (
          <div key={phonenum.id}>
            <Card sx={{ justifyContent:"center", alignItems:"center",marginY:10,marginX:10,padding:5,border:"1px solid",borderRadius:27,bgcolor:cyan[600] }}>
            <Typography sx={{ fontSize: 27 }} variant="body2">{phonenum.fullname}</Typography>
            <Typography sx={{ fontSize: 27 }} variant="body2">{phonenum.number}</Typography>
            <Typography sx={{ fontSize: 14 }} variant="body2">Date created: {phonenum.date}</Typography>

            <Stack spacing={2} direction="row" sx={{ justifyContent:"center", alignItems:"center" }}>
                <Button variant='contained' onClick={() => editNumber(phonenum)}>Update</Button>
                <Button variant="outlined" color='error'
                onClick={()=>deletePhonenum(phonenum)} >Delete</Button>    
            </Stack>
            </Card>
          </div>  
        )
        })} 
    </div>
  )
}

export default Phonelists