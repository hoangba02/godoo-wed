import { LoadingOverlay, Text } from '@mantine/core';
import React, { useState } from 'react';
import './Demo.css';
import axios from 'axios';
export default function Demo() {
  const [image, setImage] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);
  const handleDeleteImage = () => {
    setImage('');
  };
  // const handleUpload = async e => {
  //   // Tạo đối tượng FormData để gửi file lên server
  //   const file = e.target.files[0];
  //   ImgFile.append('image', file);

  //   // Gửi request đến server để upload file
  //   await axios
  //     .post(
  //       ` https://api.imgbb.com/1/upload?key=a891c7c14df787f65466375e811c221a`,
  //       ImgFile,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       },
  //     )
  //     .then(res => {
  //       console.log(res.data);
  //       setImage(res.data.data.url);
  //     })
  //     .catch(err => console.log(err));
  // };
  const handleUpload = async e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async event => {
      const base64 = event.target?.result;

      let newBase: any = event.target?.result?.toString().indexOf(',');
      let num = newBase + 1;
      const newString = base64?.toString().slice(num);
      axios
        .post(`https://ttvnapi.com/v1/upload/base64/uploadgetname`, {
          file_base64: newString,
        })
        .then(res => {
          console.log(res.data.data.filename);

          setImage(`https://ttvnapi.com/v1/getfile/${res.data.data.filename}`);
        })
        .catch(err => console.log(err));
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <label className="label-image">
        <input type="file" className="hidden-input" onChange={handleUpload} />
        {!image && (
          <div className="selector-img">
            <img
              src="/img-upload.png"
              alt="upload-img"
              className="upload-img"
            />
            <Text fw={700}>Choose photo</Text>
          </div>
        )}
        {image && (
          <>
            <LoadingOverlay
              visible={loading}
              overlayBlur={2}
              loaderProps={{ color: '#E46125' }}
            />
            <img src={image} className="img-avatar" alt="" />
            <button
              type="button"
              className="btn-delete-img"
              onClick={handleDeleteImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </>
        )}
      </label>
    </>
  );
}
