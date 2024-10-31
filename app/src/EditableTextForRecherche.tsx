import React, { useState } from 'react';

interface EditableParagraphProps {
  text: string;
}

const EditableParagraph: React.FC<EditableParagraphProps> = ({ text }) => {
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
      
        <input className=' text-center border border-pink-500 ' placeholder='rechercher par nom'  type="text" value={editText} onChange={handleChange} onBlur={handleEditClick} />
      
    </div>
  );
};

export default EditableParagraph;
