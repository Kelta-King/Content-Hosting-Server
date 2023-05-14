import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import TextHolder from "../Helpers/TextHolder";
import Divider from '@mui/material/Divider';

export default function Dashboard(props) {
    return (
        <>
            <Typography variant="h4" style={{ paddingTop: '4px', paddingBottom: '16px' }}>
                Dashboard
            </Typography>
            <Divider />
            <Box sx={{pt:3, pb:2}}>
                <TextHolder data="Content Scheduling In Metaverse" style={{textAlign:'center', fontSize:'24px'}} />
            </Box>
        </>
    );
}