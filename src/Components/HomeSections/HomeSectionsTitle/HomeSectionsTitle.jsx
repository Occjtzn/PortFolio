import React, { useState, useEffect } from 'react';

export const HomeSectionsTitle = ({ section }) => {
  const [title, setTitle] = useState('');
  const [BackTitle, setBackTitle] = useState('');

  useEffect(() => {
    switch (section) {
      case 'presentation':
        setTitle('A propos');
        setBackTitle('About me');
        break;
      case 'projets':
        setTitle('Mes Projets');
        setBackTitle('My Projects');
        break;
      case 'skills':
        setTitle('Mes compétences');
        setBackTitle('My Professional Skills');
        break;
      case 'contact':
        setTitle('Contactez-moi');
        setBackTitle('Feel free to contact me');
        break;
      default:
        setTitle('Titre par défault');
        setBackTitle('Arrière titre par défault');
    }
  }, [section]);

  return (
    <h2 className="relative text-6xl mb-5 text-title">
      {title}
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[120px] text-[#c4c3c334] z-[-1] pointer-events-none whitespace-nowrap uppercase">
        {BackTitle}
      </span>
    </h2>
  );
};
