import React from 'react';
import AddContact from './components/AddContact';
import preset from '@rebass/preset';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Flex, Box } from 'rebass';
function App() {

  return (
    <ThemeProvider theme={preset}>
      <Router>
        <Flex>
          <Box
            width={1 / 4}>
            Logo
        </Box>
          <Box
            width={3 / 4}
          >
            <ul>
              <li>
                <Link to="/">Add Contact</Link>
              </li>
              <li>
                <Link to="/about">All Contacts</Link>
              </li>
            </ul>
          </Box>
        </Flex>
        <hr />
        <Route exact path="/" component={AddContact} />
        <Route path="/about" component={AddContact} />
        <Route path="/topics" component={AddContact} />
      </Router>
    </ThemeProvider>

  );
}

export default App;
