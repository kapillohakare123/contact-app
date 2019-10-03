import * as React from 'react';
import { Box } from 'rebass';

export const ContactList = props => {
  const { contacts } = props;
  return (
    <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="secondary">
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>email</th>
            <th>Address</th>
            <th>notes</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(value => (
            <tr key={value.id}>
              <td>{value.name}</td>
              <td>{value.phone}</td>
              <td>{value.email}</td>
              <td>{value.address}</td>
              <td>{value.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
export default ContactList;
