import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const FormContact = () => {
  const form = useRef();
  const [modals, setModals] = useState({
    confirm: false,
    success: false,
    error: false,
    rgpd: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  const toggleModal = (modal, state) =>
    setModals((prev) => ({ ...prev, [modal]: state }));

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_hdlk3qp',
        'template_osv8628',
        form.current,
        'D_qmx7p3dICy8uYMM'
      )
      .then(() => toggleModal('success', true))
      .catch(() => toggleModal('error', true));

    toggleModal('confirm', false);
    form.current.reset();
    setIsChecked(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) return setError('Vous devez accepter les règles RGPD.');
    setError('');
    toggleModal('confirm', true);
  };

  return (
    <section className="flex flex-col items-center p-10 bg-gray-100 rounded-xl shadow-lg w-full max-w-3xl mx-auto border border-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Envie d'échanger ?
      </h2>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full"
      >
        {[
          {
            id: 'name',
            name: 'from_name',
            type: 'text',
            label: 'Nom',
            placeholder: 'Votre nom',
          },
          {
            id: 'email',
            name: 'user_email',
            type: 'email',
            label: 'Email',
            placeholder: 'Votre email',
          },
        ].map(({ id, name, type, label, placeholder }) => (
          <div key={id} className="flex flex-col">
            <label
              htmlFor={id}
              className="text-lg font-medium text-gray-700 mb-2"
            >
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={name}
              placeholder={placeholder}
              required
              className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight"
            />
          </div>
        ))}

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

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="rgpd"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-5 h-5 text-highlight border-gray-300 rounded focus:ring-2 focus:ring-highlight"
          />
          <label htmlFor="rgpd" className="text-gray-700">
            J'accepte{' '}
            <button
              type="button"
              onClick={() => toggleModal('rgpd', true)}
              className="text-highlight font-bold ml-1 underline"
            >
              les règles RGPD
            </button>
          </label>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={!isChecked}
          className={`py-3 text-white font-bold rounded-lg transition-all ${
            isChecked
              ? 'bg-highlight hover:bg-opacity-90'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Envoyer
        </button>
      </form>

      {['rgpd', 'confirm', 'success', 'error'].map((modal) => (
        <Modal
          key={modal}
          isOpen={modals[modal]}
          onRequestClose={() => toggleModal(modal, false)}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto border border-gray-300"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          {modal === 'rgpd' && (
            <>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Règles RGPD
              </h3>
              <p className="text-gray-700 mb-6">
                Le RGPD est une réglementation européenne visant à protéger vos
                données personnelles. En cochant cette case, vous consentez à la
                collecte et au traitement de vos informations dans le seul but
                de répondre à votre demande de contact, conformément à notre
                politique de confidentialité.
              </p>
              <button
                onClick={() => toggleModal('rgpd', false)}
                className="px-4 py-2 bg-highlight text-white rounded-lg hover:bg-opacity-90"
              >
                J'ai compris
              </button>
            </>
          )}

          {modal === 'confirm' && (
            <>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Confirmez l'envoi
              </h3>
              <p className="text-gray-700 mb-6">
                Êtes-vous sûr de vouloir envoyer cet email ?
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => toggleModal('confirm', false)}
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
            </>
          )}

          {modal === 'success' && (
            <>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Message envoyé
              </h3>
              <p className="text-gray-700 mb-6">
                Votre message a été envoyé avec succès. Merci de m'avoir
                contacté !
              </p>
              <button
                onClick={() => toggleModal('success', false)}
                className="px-4 py-2 bg-highlight text-white rounded-lg hover:bg-opacity-90"
              >
                Fermer
              </button>
            </>
          )}

          {modal === 'error' && (
            <>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Erreur</h3>
              <p className="text-gray-700 mb-6">
                Une erreur est survenue, veuillez réessayer.
              </p>
              <button
                onClick={() => toggleModal('error', false)}
                className="px-4 py-2 bg-highlight text-white rounded-lg hover:bg-opacity-90"
              >
                Fermer
              </button>
            </>
          )}
        </Modal>
      ))}
    </section>
  );
};
