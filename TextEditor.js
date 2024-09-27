// TextEditor.js
import React, { useState } from 'react';
import { TextField } from '@mui/material';
const TextEditor = () => {
const [text, setText] = useState('');
const handleChange = (e) => {
setText(e.target.value);
};
return (
<TextField
label="Write something..."
multiline
rows={10}
variant="outlined"
fullWidth
value={text}
onChange={handleChange}
/>
);
};
export default TextEditor;
