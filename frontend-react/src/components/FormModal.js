import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { blueGrey } from '@mui/material/colors';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  height:"20%",
  bgcolor: blueGrey[200],
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '27px',
};

export default function FormModal({children}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Editor</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {children}  
        </Box>
      </Modal>
    </div>
  );
}