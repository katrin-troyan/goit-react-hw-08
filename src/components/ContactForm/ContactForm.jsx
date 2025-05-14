import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const initialValues = {
    name: '',
    number: '',
  };
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format 000-00-00')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact added successfully!');
        actions.resetForm();
      })
      .catch(() => {
        toast.error('Failed to add contact.');
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForma}>
        <label htmlFor={nameFieldId} className={css.formaNameLabel}>
          Name
        </label>
        <Field
          className={css.formaNameInput}
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId} className={css.formaNumberLabel}>
          Number
        </label>
        <Field
          className={css.formaNumberInput}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage name="number" component="span" />

        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
