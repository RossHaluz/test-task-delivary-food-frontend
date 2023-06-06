import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operetions';
import { RegisterForm } from './Register.styled';

let schema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
  });

  return (
    <RegisterForm onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        type="text"
        label="Name"
        variant="outlined"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
      />

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
        Regisater
      </Button>

      <Typography variant="p">
        If you already have an account <Link to="/login">Log in</Link>
      </Typography>
    </RegisterForm>
  );
};

export default Register;
