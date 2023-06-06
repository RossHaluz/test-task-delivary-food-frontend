import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operetions';
import { LoginForm } from './Login.styled';

let schema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      dispatch(login({ email, password }));
      resetForm();
    },
  });

  return (
    <LoginForm onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        type="email"
        label="E-mail"
        variant="outlined"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <Button variant="contained" type="submit">
        Log in
      </Button>

      <Typography variant="p">
        If you don't have an account <Link to="/register">Register</Link>
      </Typography>
    </LoginForm>
  );
};

export default Login;
