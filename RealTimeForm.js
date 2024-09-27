// RealTimeForm.js
import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
const RealTimeForm = () => {
const [formData, setFormData] = useState({ name: '', email: '' });
const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prevData) => ({ ...prevData, [name]: value }));
};
return (
<Box>
<TextField
label="Name"
name="name"
value={formData.name}
onChange={handleChange}
fullWidth
margin="normal"
/>
<TextField
label="Email"
name="email"
value={formData.email}
onChange={handleChange}
fullWidth
margin="normal"
/>
<Typography variant="h6" style={{ marginTop: '20px' }}>
Name: {formData.name}
</Typography>
<Typography variant="h6">Email: {formData.email}</Typography>
</Box>
);
};
export default RealTimeForm;
