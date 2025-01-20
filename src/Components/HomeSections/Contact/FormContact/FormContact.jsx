import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const FormContact = () => {
  const form = useRef();
  const [modalState, setModalState] = useState({
    confirm: false,
    success: false,
    error: false,
  });

  const toggleModal = (type, state) => {
    setModalState((prev) => ({ ...prev, [type]: state }));
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_hdlk3qp',
        'template_osv8628',
        form.current,
        'D_qmx7p3dICy8uYMM'
      )
      .then(
        () => toggleModal('success', true),
        () => toggleModal('error', true)
      );
    form.current.reset();
    toggleModal('confirm', false);
  };

  const commonModalStyles =
    'bg-white p-6 rounded-xl shadow-xl max-w-md mx-auto';
  const buttonStyles = 'px-4 py-2 rounded-lg transition-colors duration-300';

  return (
    <section className="flex flex-col items-center justify-center p-10 bg-bgLight rounded-xl shadow-xl w-full max-w-3xl mx-auto">
      <h2 className="text-4xl font-heading font-bold mb-8 text-textDarker">
        Contactez-moi
      </h2>
      <form
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
          toggleModal('confirm', true);
        }}
        className="flex flex-col gap-6 w-full"
      >
        <input type="hidden" name="reply_to" value="" />
        {['Nom', 'Email', 'Message'].map((field, index) => (
          <div className="flex flex-col" key={index}>
            <label
              htmlFor={field.toLowerCase()}
              className="block text-lg font-medium text-textDark mb-2"
            >
              {field}
            </label>
            {field === 'Message' ? (
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                rows="4"
                required
                className="w-full p-3 border border-bgMedium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
              />
            ) : (
              <input
                type={field === 'Email' ? 'email' : 'text'}
                id={field.toLowerCase()}
                name={field === 'Email' ? 'user_email' : 'from_name'}
                placeholder={`Votre ${field.toLowerCase()}`}
                required
                className="w-full p-3 border border-bgMedium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-highlight text-white text-lg font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300"
        >
          Envoyer
        </button>
      </form>

      {['confirm', 'success', 'error'].map((type) => (
        <Modal
          key={type}
          isOpen={modalState[type]}
          onRequestClose={() => toggleModal(type, false)}
          className={commonModalStyles}
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h3 className="text-2xl font-heading font-bold mb-4 text-textDarker">
            {type === 'confirm' && "Confirmez l'envoi"}
            {type === 'success' && 'Message envoyé'}
            {type === 'error' && 'Erreur'}
          </h3>
          <p className="text-textDark mb-6">
            {type === 'confirm' &&
              'Êtes-vous sûr de vouloir envoyer cet email ?'}
            {type === 'success' &&
              "Votre message a été envoyé avec succès. Merci de m'avoir contacté !"}
            {type === 'error' && 'Une erreur est survenue, veuillez réessayer.'}
          </p>
          <div className="flex justify-end">
            {type === 'confirm' && (
              <button
                onClick={() => toggleModal('confirm', false)}
                className={`${buttonStyles} bg-gray-300 hover:bg-gray-400`}
              >
                Annuler
              </button>
            )}
            <button
              onClick={
                type === 'confirm' ? sendEmail : () => toggleModal(type, false)
              }
              className={`${buttonStyles} bg-highlight text-white hover:bg-opacity-90 ml-4`}
            >
              {type === 'confirm' ? 'Confirmer' : 'Fermer'}
            </button>
          </div>
        </Modal>
      ))}
    </section>
  );
};
