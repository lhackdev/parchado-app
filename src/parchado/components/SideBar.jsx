import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link } from 'react-router-dom';

const itemsList = [
    {
      text: "Planeación",
      icon: <EventAvailableIcon/>,
      to: "/planeacion" // <-- add link targets
    },
    {
      text: "Aprobaciones",
      icon: <EventAvailableIcon/>,
      to: "/approval"
    }
];


export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Parchado
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    itemsList.map( item => (
                        <ListItem component={Link} key={ item.text } to={item.to} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ item.text } />
                                    {/* <ListItemText secondary={ 'Registra y envía planeciones' } /> */}
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
