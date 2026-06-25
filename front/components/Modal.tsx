interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
    isOpen: boolean
}

const Modal = ({ isOpen }: ModalProps) => {
    return (
        <dialog open={isOpen}>

        </dialog>
    )
}

export default Modal