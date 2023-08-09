// import me from '../img/me.jpg';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


const CCard = ({card, handleExpandClick, ExpandMore, expanded, comment, addComment, commentValue, commentChange}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 return (
  <>
    <Card>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          H
        </Avatar>
      }
      action={
        <div>
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              horizontal: 'right',
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '&.MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top:5,
                  right: -8,
                  width: 0,
                  height: 0,
                  borderLeft: '0 solid transparent;',
                  borderBottom: '13px solid #fff',
                  borderRight: '10px solid transparent',
                  transform: 'translateY(-50%) rotate(90deg)',
                  zIndex: 0,
                },
              },
            }}
          >
            <MenuItem>
            삭제
            </MenuItem>
            <MenuItem>
            수정
            </MenuItem>
          </Menu>
        </div>
      }
      title="Hwnag wung hui"
      subheader="1999.07.13"
    />
    <CardMedia
      component="img"
      height="600"
      image={card.image}
      alt="NaN"
      sx={{
        objectFit: 'contain',
      }}
    />
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <Paper
        sx={{display: 'flex', alignItems: 'center', width: '100%', boxShadow: 'none',  borderRadius: '0' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="답글 달기"
          inputProps={{ 'aria-label': 'search google maps' }}
          value={commentValue}
          onChange={commentChange}
        />
        <Button type="button" sx={{ p: '10px' }} aria-label="search" onClick={addComment}>
          게시하기
        </Button>
      </Paper>
      <Divider />
      </CardContent>
      <CardContent>
        {
          comment.map((el, idx) => {
            return(
            <Typography paragraph key={el.id}>
                {el.text}
            </Typography>
            )
          })
        }
      </CardContent>
    </Collapse>
    </Card>
  </>
 )
}

export default CCard