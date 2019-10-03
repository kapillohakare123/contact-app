import * as React from 'react';
import { Flex, Box } from 'rebass';
import AddContact from './AddContact';
import { ContactList } from './ContactList';

const contactData = [
  {
    id: 1,
    name: 'Kapil',
    email: 'kapillohakare@gmail.com',
    address: 'Pune',
    phone: '9665773414',
    notes: 'UI Developer'
  },
  {
    id: 2,
    email: 'kapillohakare@gmail.com',
    name: 'Rohit',
    address: 'Pune',
    phone: '9665773414',
    notes: 'Sr. UI Developer'
  },
  {
    id: 3,
    email: 'kapillohakare@gmail.com',
    name: 'Sam',
    address: 'Pune',
    phone: '9665773414',
    notes: 'UI Lead Developer'
  }
];
export const Contacts = () => {
  const [contacts, addContact] = React.useState(contactData);
  return (
    <Flex mx={5} p={[2]}>
      <Box width={3 / 4} color="white" bg="secondary">
        <ContactList contacts={contacts} />
      </Box>
      <Box width={1 / 4} bg="muted" pl={4}>
        <AddContact
          addContact={newContact => {
            return addContact(contacts.concat(newContact));
          }}
        />
      </Box>
    </Flex>
  );
};
export default Contacts;
