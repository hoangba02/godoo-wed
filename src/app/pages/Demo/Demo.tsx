import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Demo() {
  const handleUpload = file => {
    console.log(file);
  };
  return <ImageUploader handleUpload={handleUpload} />;
}

function ImageUploader({ handleUpload }) {
  const onDrop = useCallback(
    acceptedFiles => {
      // Gọi hàm handleUpload để xử lý các tệp tải lên
      handleUpload(acceptedFiles);
    },
    [handleUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} accept="image/*" />
      {isDragActive ? (
        <p>Kéo và thả các tập tin ảnh vào đây</p>
      ) : (
        <p>Kéo và thả các tập tin ảnh vào đây, hoặc nhấp để chọn các tập tin</p>
      )}
    </div>
  );
}
