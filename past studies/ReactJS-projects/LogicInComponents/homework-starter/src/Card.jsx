import { useEffect, useRef } from 'react';
import './Card.css';
import { render } from 'react-dom';

export const Card = ({
  id,
  title,
  onTitleChange,
  done,
  onToggle,
  onDelete,
}) => {
  

  const handleTitleChange = (event) => {

    onTitleChange(id, event.target.value);

  };

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onToggle(id);
  };

  const handleTitleBlur = () => {
    if (title === '') {
      onDelete(id);
    }
  };

  const handleForceDelete = () => {
    onDelete(id);
  }



  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        className="card__done"
        type="checkbox"
        checked={done}
        onChange={handleCheckboxChange}
        tabIndex={-1}
      />

      <input
        className="card__title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
      />
      <button type="button" style={{color: "white", backgroundColor: "red", borderRadius: 1000}} onClick={handleForceDelete}>
        x
      </button>

    </form>
  );
};
