import React from 'react';
import { Box } from 'rebass';
const Wrapper = (props) => {
    return (
        <Box sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
        }}>
            <label htmlFor='name' p={3} bg='muted' >
                {props.label}
            </label>
            <Box p={3} color='background' >
                {props.children}
            </Box>
        </Box>
    );
}
export default Wrapper;