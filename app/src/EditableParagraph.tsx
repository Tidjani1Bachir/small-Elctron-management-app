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
      {isEditing ? (
        <input className=' text-center' type="text" value={editText} onChange={handleChange} onBlur={handleEditClick} />
      ) : (
        <p className='text-center' onClick={handleEditClick}>{editText + '\u200B'}
        
        </p>
      )}
    </div>
  );
};

export default EditableParagraph;
