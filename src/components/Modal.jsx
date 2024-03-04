import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// const Modal = forwardRef(function Modal({ children }, ref) {
const Modal = ({ open, onClose, children }) => {
  const dialog = useRef();

  // Code comment left on purpose to compare approaches useImperativeHandle/UseEffect
  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onclose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
