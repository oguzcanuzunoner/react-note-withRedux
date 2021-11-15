import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Style from './style.module.css';
import { addNote } from '../../redux/notes/notesSlice';
import { nanoid } from '@reduxjs/toolkit';
const TextArea = () => {
  const [note, setNote] = useState('');
  const [color, setColor] = useState('yellow');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    if (!note) return;
    e.preventDefault();
    dispatch(addNote({ id: nanoid(), note, color }));
    setNote('');
    setColor('yellow');
  };
  return (
    <div className={Style.container}>
      <form onSubmit={handleSubmit} style={{ background: 'white' }}>
        <textarea
          className={Style.textArea}
          placeholder="Enter your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <div className={Style.inputContainer}>
          <div className={Style.inputBg}>
            <input
              id="radio-1"
              className={Style.radioCustom}
              name="radio-group"
              type="radio"
              value="yellow"
              checked={color === 'yellow'}
              onChange={(e) => setColor(e.target.value)}
            />
            <label
              htmlFor="radio-1"
              className={Style.radioCustomLabel}
              style={{
                background: 'yellow',
                borderRadius: '50px',
                opacity: '0.8',
              }}
            />
          </div>
          <div className={Style.inputBg}>
            <input
              id="radio-2"
              className={Style.radioCustom}
              name="radio-group"
              type="radio"
              value="red"
              checked={color === 'red'}
              onChange={(e) => setColor(e.target.value)}
            />
            <label
              htmlFor="radio-2"
              className={Style.radioCustomLabel}
              style={{
                background: 'red',
                borderRadius: '50px',
                opacity: '0.8',
              }}
            />
          </div>
          <div className={Style.inputBg}>
            <input
              id="radio-3"
              className={Style.radioCustom}
              name="radio-group"
              type="radio"
              value="blue"
              checked={color === 'blue'}
              onChange={(e) => setColor(e.target.value)}
            />
            <label
              htmlFor="radio-3"
              className={Style.radioCustomLabel}
              style={{
                background: 'blue',
                borderRadius: '50px',
                opacity: '0.8',
              }}
            />
          </div>
          <div className={Style.inputBg}>
            <input
              id="radio-4"
              className={Style.radioCustom}
              name="radio-group"
              type="radio"
              value="green"
              checked={color === 'green'}
              onChange={(e) => setColor(e.target.value)}
            />
            <label
              htmlFor="radio-4"
              className={Style.radioCustomLabel}
              style={{
                background: 'green',
                borderRadius: '50px',
                opacity: '0.8',
              }}
            />
          </div>
          <div className={Style.submitButtonContainer}>
            <input type="submit" value="ADD" className={Style.submitButton} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TextArea;
