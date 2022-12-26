import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundImage, Box, Button, Card } from '@mantine/core';
import { IconPlus } from '@tabler/icons';

import { ReactComponent as Clear } from 'assets/icons/clear.svg';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileSelector } from 'store/slice/profileSlice/selectors';
import { DemoStyles } from './DemoStyles';
export default function Demo() {
  const profile = useSelector(getProfileSelector);

  // Local
  const { t } = useTranslation();
  const [img, setImg] = useState({
    one: profile.picture[0],
    two: profile.picture[1],
    three: profile.picture[2],
    four: profile.picture[3],
    fire: profile.picture[4],
    six: profile.picture[5],
  });
  console.log(img.one);
  const [zIndex, setZIndex] = useState(2);

  const { classes } = DemoStyles();
  const [x, setX] = useState(570);
  const [y, setY] = useState(570);
  const [rotate, setRotate] = useState(0);

  const handleUploadImage = e => {
    setZIndex(4);

    setImg({ ...img, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };
  useEffect(() => {
    if (!img.one) {
      return;
    } else {
      setX(370);
      setY(370);
    }
  }, [img.one]);
  return (
    <Box className={classes.container}>
      <Box
        sx={{
          width: x,
          height: y,
          background: ' var(--white)',
          aspectRatio: '1 / 1',
          position: 'relative',
          zIndex: 99,
          transition: 'all 1s ease',
          borderRadius: 30,
        }}
        // className={classes.box}
      >
        <Card className={classes.picCard}>
          {img.one && (
            <button
              className={classes.clearBtn}
              onClick={e => {
                setImg({ ...img, one: URL.revokeObjectURL(img.one) });
                setZIndex(2);
              }}
            >
              <Clear />
            </button>
          )}
          <BackgroundImage
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: zIndex,
            }}
            src={profile.picture[0] || img.one}
          ></BackgroundImage>
          <Box
            sx={{
              width: '35%',
              height: '38%',
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}
          >
            <Blink width="100%" height="100%" />
          </Box>
          <input
            name="one"
            className={classes.upImg}
            type="file"
            accept="image/*"
            onChange={e => {
              handleUploadImage(e);
            }}
            id="0"
          />
          <label htmlFor="0" className={classes.label}>
            <Button
              styles={{
                leftIcon: {
                  margin: 0,
                },
                root: {
                  fontSize: 32,
                  [`@media (min-width:768px) and (max-width:991px)`]: {
                    fontSize: 24,
                  },
                },
              }}
              component="span"
              leftIcon={<IconPlus width={29} height={29} />}
              className={classes.addBtnSmall}
            >
              {t('Profile.text.Add')}
            </Button>
          </label>
        </Card>
      </Box>
    </Box>
  );
}
