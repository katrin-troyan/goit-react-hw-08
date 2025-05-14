import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from '@mui/material';
import css from './LoginForm.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });
    resetForm();
  };

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.loginForm} autoComplete="off">
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

          <button className={css.loginBtn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </Container>
  );
}
