import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function Phonelists(props) {
  const editNumber = (phonenum) => {
    props.editNumber(phonenum)

  }
  return (
    <div>
      <Card>
       {props.phonenums.map(phonenum => {
        return (
          <div key={phonenum.id}>
            <Typography sx={{ fontSize: 36 }} variant="body2">{phonenum.fullname}</Typography>
            <Typography sx={{ fontSize: 45 }} variant="body2">{phonenum.number}</Typography>
            <Typography sx={{ fontSize: 27 }} variant="body2">{phonenum.date}</Typography>


            <Stack spacing={2} direction="row">
                <Button variant='contained' onClick={() => editNumber(phonenum)}>Update</Button>
                <Button variant="outlined" color='error'>Delete</Button>    
            </Stack>
            
          </div>  
          
        )
        })} 
      </Card>
        
    </div>
  )
}

export default Phonelists