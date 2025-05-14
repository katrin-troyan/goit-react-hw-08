import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from '@mui/material';
import css from './RegisterForm.module.css';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.contactForma} autoComplete="off">
          <label className={css.formaLabel}>
            Username
            <Field className={css.formaInput} type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.formaLabel}>
            Email
            <Field className={css.formaInput} type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.formaLabel}>
            Password
            <Field className={css.formaInput} type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>

          <button className={css.registertBtn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </Container>
  );
}
