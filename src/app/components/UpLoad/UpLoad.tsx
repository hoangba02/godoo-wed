import React, { useEffect, useState } from 'react';
import { IconPlus } from '@tabler/icons';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import { ReactComponent as Clear } from 'assets/icons/clear.svg';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  createStyles,
  FileButton,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { apiPost } from 'utils/http/request';
import { CounterSlice } from 'store/slice/counterSlice';
import { UserSlice } from 'store/slice/userSlice';

interface Props {
  id: string;
  name: string;
  link: string;
  img: any;
  setImg: any;
  isEdit?: boolean;
}
function UpLoad({ link, id, name, setImg, img, isEdit }: Props) {
  const ImgFile = new FormData();
  // Local
  const { t } = useTranslation();
  const { classes } = useStyles();
  const [zIndex, setZIndex] = useState(() => {
    if (link) return 4;
    return 2;
  });
  const [selectedFile, setSelectedFile] = useState({ name: '', filename: '' });
  const [file, setFile] = useState<File | null>(null);
  // Global
  const profile = useSelector(getProfileSelector);

  const handleUploadImage = e => {
    setSelectedFile({ name: e.target.name, filename: e.target.files[0] });
    // setFile();
  };
  console.log(selectedFile);
  const handleClearImg = url => {
    setImg({ ...img, [name]: '' });
    setZIndex(2);
    // apiPost(
    //   '/v1/deletefile',
    //   {
    //     url: url,
    //   },
    //   {},
    // )
    //   .then(res => {
    //     if (res.error === 0) {
    //       setImg({ ...img, [name]: '' });
    //       setZIndex(2);
    //     }
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    if (file) {
      ImgFile.append('file', file);
      console.log(ImgFile);
      apiPost('/v1/uploadgeturl', ImgFile, {
        'content-type': 'multipart/form-data',
      })
        .then(res => {
          setImg({
            ...img,
            [name]: `https://ttvnapi.com/v1/getfile/${res.data[0].filename}`,
          });
          setZIndex(4);
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
    <Card
      sx={{
        backgroundColor: isEdit ? '#F3F3F3' : '#FFFFFF',
        [`@media (max-width:575px)`]: {
          height: id === '0' ? '100%' : 106,
          width: id === '0' ? '100%' : 106,
        },
      }}
      className={classes.picCard}
    >
      {img[name] && (
        <button
          className={classes.clearBtn}
          onClick={() => {
            handleClearImg(img[name]);
          }}
        >
          <Clear width={20} height={20} />
        </button>
      )}
      <BackgroundImage
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: zIndex,
        }}
        src={profile.picture[id] || link}
      ></BackgroundImage>
      <Box
        sx={{
          width: '35%',
          height: '35%',
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <Blink
          width="100%"
          height="100%"
          color={isEdit ? '#D6D6D6' : '#F3F3F3'}
        />
      </Box>
      <FileButton
        // resetRef={resetRef}
        onChange={setFile}
        accept="image/png,image/jpeg"
      >
        {props => (
          <Button
            sx={{
              position: 'absolute',
              bottom: '8%',
              width: '56%',
              height: 26,
              color: 'var(--white)',
              padding: 0,
              backgroundColor: '#E46125',
              borderRadius: 34,
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '18px',
              zIndex: 3,
              '&::before': {
                display: 'none',
              },
              '&:hover': {
                transition: '0.5s',
                backgroundColor: '#E46125 !important',

                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              },
              '&[data-disabled]': {
                cursor: id === '0' ? 'default' : 'no-drop',
                color: 'var(--white) !important',
                backgroundColor: id === '0' ? '#E46125' : '#BFBFBF',
              },
              [`@media (max-width:575px)`]: {
                width: '100%',
                height: '100%',
              },
            }}
            disabled={id === '0' && !img.one ? false : true}
            leftIcon={
              <IconPlus
                width={id === '0' ? 29 : 18}
                height={id === '0' ? 29 : 18}
              />
            }
            {...props}
          >
            {t('Profile.text.Add')}
          </Button>
        )}
      </FileButton>
    </Card>
  );
}

export default UpLoad;

const useStyles = createStyles(() => ({
  picCard: {
    height: '100%',
    width: '100%',
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '8%',
    zIndex: 3,
    userSelect: 'none',
    '&.disable': {
      cursor: 'no-drop',
    },
    [`@media (max-width:575px)`]: {
      width: '58%',
    },
  },
  clearBtn: {
    position: 'absolute',
    right: 14,
    top: 14,
    border: 'none',
    width: '15%',
    height: '15%',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'transform 0.5s ease',
    zIndex: 5,

    '&:active': {
      transform: 'translateY(3px)',
    },
  },
}));
