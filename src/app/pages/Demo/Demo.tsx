import React, { useState } from 'react';

export default function Demo() {
  const [image, setImage] = useState<any>('');

  const handleImageChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Send the image to the server
    console.log(image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
  );
}
