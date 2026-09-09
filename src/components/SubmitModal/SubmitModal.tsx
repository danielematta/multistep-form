import styles from "./SubmitModal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  formReset: () => void;
};

const SubmitModal = ({ isOpen, onClose, formReset }: ModalProps) => {
  if (!isOpen) return null;

  const handleOkButton = () => {
    onClose();
    formReset();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        I dati sono stati inviati correttamente.
        <div className={styles.okButtonContainer}>
          <button className={styles.okButton} onClick={handleOkButton}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
