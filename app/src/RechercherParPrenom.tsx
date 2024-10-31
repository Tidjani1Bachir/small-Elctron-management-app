import React, { useState } from 'react';

interface RechercherParPrenomProps {
  text: string;
}

const RechercherParPrenom: React.FC<RechercherParPrenomProps> = ({ text }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState<string>(text);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  return (
    <div className='w-full'>
      
        <input className=' text-center border border-pink-500 ' placeholder='rechercher par prenom'  type="text" value={editText} onChange={handleChange} onBlur={handleEditClick} />
      
    </div>
  );
};

export default RechercherParPrenom;
