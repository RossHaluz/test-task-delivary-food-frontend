import { Formik} from 'formik';
import { FormCart, InputCart, BtnCart, ErrorText } from './CartForm.styled';
import * as yup from 'yup';

const validateSchema = yup.object({
    name: yup.string('Type a name').required('Name is require'),
    phone: yup.number('Type a number').min(8, 'Number must be min 8 length').required('Phone is require'),
    address: yup.string("Type your address").required('Address is require')
})


const CartForm = () => {
  const initialValue = {
    name: '',
    phone: '',
    address: '',
  };
  const onSubmit = (value, action) => {
    console.log(value);
    console.log(action);
  };

  return (
    <>
      <Formik initialValues={initialValue} validationSchema={validateSchema} onSubmit={onSubmit}>
        <FormCart>
          <InputCart type="text" name="name" placeholder="Type your name" />
          <ErrorText component='p' name="name" />

          <InputCart type="text" name="phone" placeholder="Type your phone" />

          <ErrorText component='p' name="phone" />
          <InputCart type="text" name="address" placeholder="Type your address" />

          <ErrorText component='p' name="address" />

          <BtnCart type="submit">Order now</BtnCart>
        </FormCart>
      </Formik>
    </>
  );
};


export default CartForm;