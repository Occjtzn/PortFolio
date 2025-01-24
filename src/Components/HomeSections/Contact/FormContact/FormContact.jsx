import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const FormContact = () => {
  const form = useRef();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_hdlk3qp',
        'template_osv8628',
        form.current,
        'D_qmx7p3dICy8uYMM'
      )
      .then(
        () => {
          setIsSuccessOpen(true);
          setIsConfirmOpen(false);
        },
        () => {
          setIsErrorOpen(true);
          setIsConfirmOpen(false);
        }
      );
    form.current.reset();
  };

  return (
    <section className="flex flex-col items-center p-10 bg-gray-100 rounded-xl shadow-lg w-full max-w-3xl mx-auto border border-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Besoin d'échanger ?
      </h2>
      <form
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
          setIsConfirmOpen(true);
        }}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Votre nom"
            required
            className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Votre email"
            required
            className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            rows="4"
            required
            className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight"
          />
        </div>

        <button
          type="submit"
          className="py-3 bg-highlight text-white font-bold rounded-lg hover:bg-opacity-90 transition-all"
        >
          Envoyer
        </button>
      </form>

      {isConfirmOpen && (
        <Modal
          isOpen={isConfirmOpen}
          onRequestClose={() => setIsConfirmOpen(false)}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto border border-gray-300"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Confirmez l'envoi
          </h3>
          <p className="text-gray-700 mb-6">
            Êtes-vous sûr de vouloir envoyer cet email ?
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => setIsConfirmOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Annuler
            </button>
            <button
              onClick={sendEmail}
              className="px-4 py-2 bg-highlight text-white rounded-lg hover:bg-opacity-90 ml-4"
            >
              Confirmer
            </button>
          </div>
        </Modal>
      )}

      {isSuccessOpen && (
        <Modal
          isOpen={isSuccessOpen}
          onRequestClose={() => setIsSuccessOpen(false)}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto border border-gray-300"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Message envoyé
          </h3>
          <p className="text-gray-700 mb-6">
            Votre message a été envoyé avec succès. Merci de m'avoir contacté !
          </p>
          <button
            onClick={() => setIsSuccessOpen(false)}
            className="px-4 py-2 bg-highlight text-white rounded-lg hover:bg-opacity-90"
          >
            Fermer
          </button>
        </Modal>
      )}

      {isErrorOpen && (
        <Modal
          isOpen={isErrorOpen}
          onRequestClose={() => setIsErrorOpen(false)}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto border border-gray-300"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Erreur</h3>
          <p className="text-gray-700 mb-6">
            Une erreur est survenue, veuillez réessayer.
          </p>
          <button
            onClick={() => setIsErrorOpen(false)}
            className="px-4 py-2 bg-highlight text-white rounded-lg hover:bg-opacity-90"
          >
            Fermer
          </button>
        </Modal>
      )}
    </section>
  );
};
