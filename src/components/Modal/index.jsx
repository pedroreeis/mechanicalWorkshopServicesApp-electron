import './styles.scss';

import Modal from 'react-modal';  
import logoImg from '../../images/logo.png';

Modal.setAppElement(document.getElementById('root'));

export function ModalComponent({ isOpen = false, children , ...props }) {
    return (
      <Modal
        isOpen={isOpen}
        contentLabel="Deletar este serviço?"
        className="modal-delete-service"
        {...props}
      >
        <img src={logoImg} alt="Logo MWS"/>
        <div className="separator"></div>
        <h2>Atenção</h2>
        <p>Você tem certeza que deseja excluir o serviço?</p>
        <div className="separator"></div>
        {children}
      </Modal>
    )
}