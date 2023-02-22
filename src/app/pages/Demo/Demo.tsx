import { LoadingOverlay, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { apiPost } from 'utils/http/request';
import './Demo.css';
export default function Demo() {
  const [image, setImage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<any>(false);

  const handleImageChange = e => {
    const ImgFile = new FormData();
    setLoading(true);
    const file = e.target.files[0];
    if (!file) {
      return console.log('Ko có file');
    }
    const link = URL.createObjectURL(file);
    setImage(link);
    ImgFile.append('file', file);
    // call api
    apiPost('/v1/uploadgeturl', ImgFile, {
      'content-type': 'multipart/form-data',
    })
      .then(res => {
        console.log(res);
        setTimeout(() => {
          setImage(
            res.data[0].filename
              ? `https://ttvnapi.com/v1/getfile/${res.data[0].filename}`
              : '',
          );
          if (!res.data[0].filename) {
            setError('Có lỗi');
          }
          setLoading(false);
        }, 5000);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  const handleDeleteImage = () => {
    setImage('');
  };
  return (
    <>
      <label className="label-image">
        <input
          type="file"
          className="hidden-input"
          onChange={handleImageChange}
        />

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
              overlayBlur={9}
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

      <p>{error}</p>
    </>
  );
}
