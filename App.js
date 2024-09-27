// App.js
import React, { useState } from 'react';
import {
ThemeProvider,
createTheme,
CssBaseline,
Button,
TextField,
AppBar,
Toolbar,
Typography,
} from '@mui/material';
import GridLayout from './GridLayout';
import ListLayout from './ListLayout';
import RealTimeForm from './RealTimeForm';
import VideoPlayer from './VideoPlayer';
import TextEditor from './TextEditor';
const App = () => {
const [layout, setLayout] = useState('grid');
const [searchQuery, setSearchQuery] = useState('');
const [currentPage, setCurrentPage] = useState('home');
const handleLayoutChange = () => {
setLayout((prevLayout) => (prevLayout === 'grid' ? 'list' : 'grid'));
};
const handleNavigation = (page) => {
setCurrentPage(page);
};
// Define custom theme with yellow AppBar and black text
const theme = createTheme({
palette: {
mode: 'dark',
primary: {
main: '#FFD700', // Yellow color for AppBar
},
text: {
primary: '#ffffff', // Black text color for Button
},
},
components: {
MuiAppBar: {
styleOverrides: {
root: {
backgroundColor: '#FFD700', // Yellow color for AppBar
},
},
},
MuiButton: {
styleOverrides: {
root: {
color: '#000000', // Black text color for Button
},
},
},
},
});
return (
<ThemeProvider theme={theme}>
<CssBaseline />
<AppBar position="static">
<Toolbar>
<Typography variant="h6" sx={{ flexGrow: 1, color: '#000000' }}>
Epic Holidays
</Typography>
<Button color="inherit" onClick={() => handleNavigation('home')}>
Home
</Button>
<Button color="inherit" onClick={() => handleNavigation('form')}>
Real-Time Form
</Button>
<Button color="inherit" onClick={() => handleNavigation('video')}>
Video Player
</Button>
<Button color="inherit" onClick={() => handleNavigation('editor')}>
Text Editor
</Button>
</Toolbar>
</AppBar>
<div style={{ padding: '20px' }}>
{currentPage === 'home' && (
<>
<TextField
label="Search Destinations"
variant="outlined"
fullWidth
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
style={{ marginBottom: '20px' }}
/>
<Button
variant="contained"
color="primary"
onClick={handleLayoutChange}
style={{ marginBottom: '20px' }}
>
Switch to {layout === 'grid' ? 'List' : 'Grid'} Layout
</Button>
{layout === 'grid' ? (
<GridLayout searchQuery={searchQuery} />
) : (
<ListLayout searchQuery={searchQuery} />
)}
</>
)}
{currentPage === 'form' && <RealTimeForm />}
{currentPage === 'video' && <VideoPlayer />}
{currentPage === 'editor' && <TextEditor />}
</div>
</ThemeProvider>
);
};
export default App;
