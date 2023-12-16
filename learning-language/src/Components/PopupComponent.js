import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const Popup = ({ open, onClose, title, content, actionText, onAction }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
        }}
      >
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2}}>
          <Typography variant="h6">
            {title}
          </Typography>
          <Button onClick={onClose} color='error'  variant="text" sx={{borderRadius:28, fontWeight:'900', fontSize:16}}>
            X
          </Button>
        </Box>
        <Typography variant="body1" gutterBottom>
          {content}
        </Typography>
        {onAction && (
          <Button variant="contained" onClick={onAction}>
            {actionText}
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default Popup;
