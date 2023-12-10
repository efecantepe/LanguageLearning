import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, FormControl,MenuItem  } from '@mui/material';
import Popup from './PopupComponent';


const PopupLanguageContent = ({languageContent, action }) => {
    const { id, language, level} = languageContent;

    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                Add Language
                </Typography>
                <hr/>
                <FormControl fullWidth>
                    <MenuItem disabled value="">
                        <em>Select Language</em>
                    </MenuItem>
                    {language.map((language) => ( <MenuItem key={language} value={language}> {language} </MenuItem> ))}
                </FormControl>
            </CardContent>
        </Card>
    );
};
  
export default PopupLanguageContent;