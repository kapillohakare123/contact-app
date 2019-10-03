import { Box, Button } from 'rebass';
import { Formik } from 'formik';
import * as React from 'react';
import Wrapper from './Wrapper';

const AddContact = props => {
  const { addContact } = props;
  const [contact] = React.useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    notes: ''
  });
  const addNewContact = value => {
    const id = new Date().getTime();
    addContact({ ...value, id });
  };
  return (
    <Box width={1 / 2}>
      <Formik
        initialValues={contact}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required';
          }

          if (!values.email) {
            errors.email = 'Email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          addNewContact(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Wrapper
              error={!!(errors.name && touched.name)}
              label="Enter your name"
            >
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name ? (
                <p>{errors.name && touched.name && errors.name}</p>
              ) : (
                ''
              )}
            </Wrapper>

            <Wrapper label="Enter your address">
              <input
                name="address"
                value={values.address}
                onChange={handleChange}
              />
            </Wrapper>
            <Wrapper label="Enter your phone">
              <input
                type="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </Wrapper>
            <Wrapper
              error={!!(errors.email && touched.email)}
              label="Enter your email"
            >
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <p>{errors.email && touched.email && errors.email}</p>
              ) : (
                ''
              )}
            </Wrapper>

            <Wrapper label="Enter your notes">
              <textarea
                name="notes"
                value={values.notes}
                onChange={handleChange}
              />
            </Wrapper>
            <Button
              variant="primary"
              mr={2}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Loading' : 'Add Contact'}
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddContact;
