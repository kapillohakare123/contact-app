import React from 'react';
import { Box } from 'rebass';

const Wrapper = props => {
  const { label, children, error } = props;
  return (
    <Box
      mb={[10]}
      sx={{
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))'
      }}
    >
      <label htmlFor="name" bg="muted">
        {label}
      </label>

      <Box b={1} mb={[30]} color={error ? 'danger' : 'muted'}>
        {children}
      </Box>
    </Box>
  );
};
export default Wrapper;
