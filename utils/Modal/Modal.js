import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onhideDetails}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className="">{props.children}</div>
    </div>
  );
};

// const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {typeof document !== "undefined" && (
        <>
          {ReactDOM.createPortal(
            <Backdrop onhideDetails={props.onhideDetails} />,
            document.getElementById("overlays")
          )}
          {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            document.getElementById("overlays")
          )}
        </>
      )}
    </Fragment>
  );
};

export default Modal;
