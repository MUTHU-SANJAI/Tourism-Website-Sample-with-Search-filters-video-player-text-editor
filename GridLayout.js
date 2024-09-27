// GridLayout.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from
'@mui/material';
const destinations = [
{ name: 'Melbourne', img:
'https://upload.wikimedia.org/wikipedia/commons/1/19/Melburnian_Skyline.jpg'
},
{ name: 'Tokyo', img: 'https://citygame.com/wpcontent/blogs.dir/1/files/sites/37/2023/02/City-Game-Tokyo-e1677225958158-
1920x1080.jpg' },
{ name: 'Los Angeles', img:
'https://static.independent.co.uk/2023/07/07/10/iStock515064346.jpg?quality=75&width=1200&auto=webp' },
{ name: 'Bali', img:
'https://idsb.tmgrup.com.tr/ly/uploads/images/2024/03/25/320999.jpg' },
{ name: 'Barcelona', img:
'https://img1.10bestmedia.com/Images/Photos/378847/GettyImages1085317916_55_660x440.jpg' },
];
const GridLayout = ({ searchQuery }) => {
const filteredDestinations = destinations.filter((destination) =>
destination.name.toLowerCase().includes(searchQuery.toLowerCase())
);
return (
<Grid container spacing={2}>
{filteredDestinations.map((destination, index) => (
<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
<Card>
<CardMedia component="img" height="140" image={destination.img}
alt={destination.name} />
<CardContent>
<Typography variant="h6" style={{ color: '#FFD700' }}>
{destination.name}
</Typography>
<Typography variant="body2" color="text.secondary">
Explore the beauty of {destination.name}.
</Typography>
</CardContent>
</Card>
</Grid>
))}
</Grid>
);
};
export default GridLayout;
