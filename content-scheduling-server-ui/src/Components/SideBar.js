import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import TvIcon from '@mui/icons-material/Tv';
import Box from '@mui/material/Box';
import theme from '../Theme/theme';

export default function sideBar(props) {

    console.log(theme.primary);
    const drawer = (
        <div style={theme.secondary}>
            <div style={{ padding: '18px' }}>
                <Box sx={{padding: '32px 0px'}}>
                    <center>
                    <OndemandVideoIcon style={{ fontSize: '36px' }}/>
                    </center>
                </Box>
                <Divider />
                <List>
                    <ListItem key={"Dashboard"} disablePadding>
                        <ListItemButton 
                            style={theme.secondary}
                            sx={{ borderRadius:'8px 0px 0px 8px', transitionDuration:'0.3s', borderRight: 5}}
                        >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Content"} disablePadding>
                        <ListItemButton style={{borderRadius:'8px', transitionDuration:'0.3s'}}>
                            <ListItemIcon>
                                <VideoCameraBackIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Content"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Schedule"} disablePadding>
                        <ListItemButton style={{borderRadius:'8px', transitionDuration:'0.3s'}}>
                            <ListItemIcon>
                                <ScheduleSendIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Schedule"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"VDSO"} disablePadding>
                        <ListItemButton style={{borderRadius:'8px', transitionDuration:'0.3s'}}>
                            <ListItemIcon>
                                <TvIcon />
                            </ListItemIcon>
                            <ListItemText primary={"VDSO"} />
                        </ListItemButton>
                    </ListItem>

                </List>
                <Divider />
            </div>
        </div>
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={props.container}
                variant="temporary"
                open={props.mobileOpen}
                onClose={props.handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>);
}