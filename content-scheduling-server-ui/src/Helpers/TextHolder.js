import { Box } from "@mui/material";

export default function TextHolder(props){
    return (
        <Box 
            sx={{background:'#ffffff', borderRadius:'4px', p:2}} 
            style={props.style}
        >
            {props.data}
        </Box>
    );
}