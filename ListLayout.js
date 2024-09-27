// ListLayout.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography,
Divider } from '@mui/material';
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
const ListLayout = ({ searchQuery }) => {
const filteredDestinations = destinations.filter((destination) =>
destination.name.toLowerCase().includes(searchQuery.toLowerCase())
);
return (
<List>
{filteredDestinations.map((destination, index) => (
<React.Fragment key={index}>
<ListItem>
<ListItemAvatar>
<Avatar src={destination.img} alt={destination.name} />
</ListItemAvatar>
<ListItemText
primary={<Typography style={{ color: '#FFD700'
}}>{destination.name}</Typography>}
secondary={`Explore the beauty of ${destination.name}.`}
/>
</ListItem>
{index < filteredDestinations.length - 1 && <Divider />}
</React.Fragment>
))}
</List>
);
};
export default ListLayout;
