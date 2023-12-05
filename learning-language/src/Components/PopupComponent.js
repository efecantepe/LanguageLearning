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
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {content}
        </Typography>
        {onAction && (
          <Button variant="contained" onClick={onAction}>
            {actionText}
          </Button>
        )}
        <Button variant="outlined" onClick={onClose} sx={{ marginLeft: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default Popup;
