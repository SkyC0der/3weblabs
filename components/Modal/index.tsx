import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";



type ModalType  = {
  onClose?: () => void,
  show: boolean,
  title?: string,
  children?: any
}


const Modal = (props: ModalType) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  const closeOnEscapeKeyDown = (e : KeyboardEvent) => {
    if ((e.charCode || e.keyCode) === 27) {
      props?.onClose && props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return mounted ? ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {/* <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div> */}
          <div className="modal-body">{props.children}</div>
          {/* <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div> */}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("myportal") as HTMLElement
  ): null
};

export default Modal;
