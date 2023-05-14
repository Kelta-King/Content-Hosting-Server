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
        <div>
            <div style={{ padding: '18px' }}>
                <Box sx={{padding: '32px 0px'}}>
                    <center>
                    <OndemandVideoIcon style={{ fontSize: '36px' }}/>
                    </center>
                </Box>
                <Divider sx={{background: theme.other }}/>
                <List>
                    <ListItem key={"Dashboard"} disablePadding>
                        <ListItemButton 
                            sx={{ borderRadius:'8px', transitionDuration:'0.3s', mt:3,
                                '&:hover': {
                                    cursor: 'pointer',
                                    background:theme.secondaryLight,
                                }
                            }}
                            onClick={() => window.location.replace("/Dashboard", "_self")}
                        >
                            <ListItemIcon>
                                <DashboardIcon sx={{color: theme.other }}/>
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Content"} disablePadding>
                        <ListItemButton 
                            sx={{ borderRadius:'8px', transitionDuration:'0.3s', mt:1,
                                '&:hover': {
                                    cursor: 'pointer',
                                    background:theme.secondaryLight,
                                }
                            }}
                            onClick={() => window.location.replace("/Content", "_self")}
                        >
                            <ListItemIcon>
                                <VideoCameraBackIcon sx={{color: theme.other }}/>
                            </ListItemIcon>
                            <ListItemText primary={"Content"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Schedule"} disablePadding>
                        <ListItemButton 
                            sx={{ borderRadius:'8px', transitionDuration:'0.3s', mt:1,
                                '&:hover': {
                                    cursor: 'pointer',
                                    background:theme.secondaryLight,
                                }
                            }}
                            onClick={() => window.location.replace("/Schedule", "_self")}
                        >
                            <ListItemIcon>
                                <ScheduleSendIcon sx={{color: theme.other }} />
                            </ListItemIcon>
                            <ListItemText primary={"Schedule"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"VDSO"} disablePadding>
                        <ListItemButton 
                            sx={{ borderRadius:'8px', transitionDuration:'0.3s', mt:1, mb:2,
                                '&:hover': {
                                    cursor: 'pointer',
                                    background:theme.secondaryLight,
                                }
                            }}
                            onClick={() => window.location.replace("/VDSO", "_self")}
                        >
                            <ListItemIcon>
                                <TvIcon sx={{color: theme.other }}/>
                            </ListItemIcon>
                            <ListItemText primary={"VDSO"} />
                        </ListItemButton>
                    </ListItem>

                </List>
                <Divider sx={{background: theme.other }}/>
            </div>
        </div>
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
            // style={{backgroundColor: theme.secondary}}
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
                style={{backgroundColor: theme.secondary}}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    backgroundColor:theme.secondary,
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth, backgroundColor: theme.secondary, color: theme.other },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>);
}