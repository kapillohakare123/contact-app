import React from 'react';
import preset from '@rebass/preset';
import { ThemeProvider } from 'emotion-theming';
import { Flex, Box } from 'rebass';
import {Contacts} from './components/Contacts';

const updatedPreset = preset;
updatedPreset.colors.danger = 'red';
function App() {
  return (
    <ThemeProvider theme={updatedPreset}>
      <Flex>
        <Box width={1}>
          <Contacts/>
        </Box>
      </Flex>
      <hr />
    </ThemeProvider>
  );
}

export default App;
