import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LHeader from './layouts/LHeader';
import { useState } from 'react';
import { Box, IconButton, Modal, Typography} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import styled from '@emotion/styled';
import CCard from './components/Card';
function App() {
  // Theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const [changeMode, setChangeMode] = useState(false)
  function changeThemeMode() {
    setChangeMode(!changeMode)
  }

  // Card Data 
  const card = [
    {
      id: 1,
      image: '123'
    },
    {
      id: 2,
      image: '123'
    }
  ]
  // Card
  const [expanded, setExpanded] = useState(false);
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Card comment 
  const [commentValue, setCommonValue] = useState('')
  const [comment, setComments] = useState([])

  function commentChange(e) {
    setCommonValue(e.target.value)
  }
  function addComment() {
    const newComment = {id: crypto.randomUUID(), text: commentValue}
    const newComments = [...comment, newComment]
    setCommonValue('')
    setComments(newComments)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: 'background.paper'
  };
  const modalHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    p: '8px 12px',
    "& h2": {
      fontSize: '16px'
    },
    "& button > svg" : {
      fontSize: '1rem'
    }
  }
  const [open, setOpen] = useState(false)
  function handleModal() {
    setOpen(true)
  }
  function handleClose() {
    setOpen(false)
  }
  return (
    <ThemeProvider theme={changeMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <LHeader handleModal={handleModal} changeMode={changeMode} changeThemeMode={changeThemeMode} />
      {
        card.map((card, idx) => {
          return (
            <CCard key={card.id} card={card} commentChange={commentChange} addComment={addComment} commentValue={commentValue} comment={comment} expanded={expanded} handleExpandClick={handleExpandClick} ExpandMore={ExpandMore} />
          )
        })
      }
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={modalHeader}>
            <h2>
              타이틀
            </h2>
            <IconButton onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default App;
