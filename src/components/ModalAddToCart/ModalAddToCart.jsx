import { Backdrop, Modal } from "./ModalAddToCart.styled";

const ModalAddToCart = ({children}) => {
return <Backdrop>
    <Modal>{children}</Modal>
</Backdrop>
}

export default ModalAddToCart;