import { SuccessOrderWrapper, SuccessOrderBtn } from "./SuccessOrder.styled";

const SuccessOrder = () => {
  return (
    <SuccessOrderWrapper>
      <h2>Ваше замовлення успішно відправлено!</h2>
      <p>Очікуйте дзвінка менеджера.</p>
      <SuccessOrderBtn to="/">Повернутися до каталогу</SuccessOrderBtn>
    </SuccessOrderWrapper>
  );
};


export default SuccessOrder;