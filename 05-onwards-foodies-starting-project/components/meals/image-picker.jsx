'use client'

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './image-picker.module.css';

export default function ImagePicker({label, name}) {

  const [preview, setPreview] = useState();
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if(!file){ 
      setPreview(null);
      return;
    }
   
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!preview && <p>No image set yet.</p>}
          {preview && (
            <Image 
              src={preview}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input 
          className={styles.input}
          type="file" 
          id={name}
          accept='image/pbg, image/jpeg' 
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button 
          className={styles.button} 
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  )
}
