import * as React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import './scss/l-header.scss'
const LHeader = ({changeThemeMode, changeMode, handleModal }) => {
  return (
    <div className='l-header'>
      <IconButton aria-label="add" onClick={handleModal}>
        <AddToPhotosIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={changeThemeMode} className={changeMode ? 'change-mode' : 'change-mode_return'}>
        {changeMode ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </div>
  )
}
export default LHeader