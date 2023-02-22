import { LoadingOverlay, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { apiPost } from 'utils/http/request';
import './Demo.css';
import axios from 'axios';
export default function Demo() {
  const ImgFile = new FormData();
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string>('');
  const [loading, setLoading] = useState<any>(false);
  const [imageUrl, setImageUrl] = useState('');
  // useEffect(() => {
  //   if (file) {
  //     apiPost('/v1/uploadgeturl', file, {
  //       'content-type': 'multipart/form-data',
  //     })
  //       .then(res => {
  //         setImage(`https://ttvnapi.com/v1/getfile/${res.data[0].filename}`);
  //         setLoading(false);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   } else {
  //     return;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [image]);

  // const handleImageChange = e => {
  //   setLoading(true);
  //   const file = e.target.files[0];
  //   const link = URL.createObjectURL(file);
  //   setImage(link);
  //   setFile(file);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // Send the image to the server
  // };
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
    // Tạo đối tượng FormData để gửi file lên server
    const file = e.target.files[0];
    ImgFile.append('image', file);

    // Gửi request đến server để upload file
    await axios
      .post(`http://192.168.1.48:8080/v1/uploadgeturl`, ImgFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        console.log(res.data.data);
        setImage(
          `http://192.168.1.48:8080/v1/getfile/${res.data.data[0].filename}`,
        );
      })
      .catch(err => console.log(err));
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
