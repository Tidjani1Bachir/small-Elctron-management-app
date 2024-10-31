import React, { useState } from 'react';

interface EditableNumberProps {
  num: number;
}

const EditableNumber: React.FC<EditableNumberProps> = ({ num }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editnum, setEditnum] = useState<number>(num);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditnum(parseInt(event.target.value));
  };

  return (
    <div>
      {isEditing ? (
        <input className='text-center' type="number" value={editnum} onChange={handleChange} onBlur={handleEditClick} />
      ) : (
        <p className='text-center' onClick={handleEditClick}>{editnum }
        
        </p>
      )}
    </div>
  );
};

export default EditableNumber;
