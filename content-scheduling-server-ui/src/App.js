import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './Components/SideBar';
import Content from './Content';
import Schedule from './Schedule';
import VDSO from './VDSO';
import NoPage from './NoPage';
import Dashboard from './Dashboard';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* <AppBar
                position="fixed"
                
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background:theme.primary,
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Content Scheduling
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <SideBar
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                container={container}
            />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, background: '#f2f2f2', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Dashboard />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/content" element={<Content />} />
                            <Route path="/schedule" element={<Schedule />} />
                            <Route path="/VDSO" element={<VDSO />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
