import React, { useEffect, useRef, useState } from 'react';
import { FileButton, Button, Group, Text, List } from '@mantine/core';
import { apiPost } from 'utils/http/request';

export default function Demo() {
  const ImgFile = new FormData();
  const [selectedFile, setSelectedFile] = useState({ name: '', filename: '' });

  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };
  const handleUploadImage = e => {
    setSelectedFile({ name: 'one', filename: e.target.files[0] });
    // setFile();
  };
  console.log(selectedFile);

  useEffect(() => {
    if (file) {
      ImgFile.append('file', file);
      apiPost('/v1/uploadgeturl', ImgFile, {
        'content-type': 'multipart/form-data',
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  }, [file]);
  return (
    <>
      <Group
        position="center"
        onClick={e => {
          handleUploadImage(e);
        }}
      >
        <FileButton
          name="one"
          resetRef={resetRef}
          onChange={setFile}
          accept="image/png,image/jpeg"
        >
          {props => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>
      </Group>
      {file && (
        <Text size="sm" align="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );

  // const [files, setFiles] = useState<File[]>([]);
  // return (
  //   <>
  //     <Group position="center">
  //       <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
  //         {props => <Button {...props}>Upload image</Button>}
  //       </FileButton>
  //     </Group>

  //     {files.length > 0 && (
  //       <Text size="sm" mt="sm">
  //         Picked files:
  //       </Text>
  //     )}

  //     <List size="sm" mt={5} withPadding>
  //       {files.map((file, index) => (
  //         <List.Item key={index}>{file.name}</List.Item>
  //       ))}
  //     </List>
  //   </>
  // );
}
