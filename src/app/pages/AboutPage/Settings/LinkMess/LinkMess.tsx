import React, { useEffect, useState } from 'react';
import {
  Button,
  Center,
  createStyles,
  Flex,
  Paper,
  Stack,
  Text,
} from '@mantine/core';
import { AboutPage } from '../../Loadable';
import { ReactComponent as Copy } from 'assets/icons/about/copy.svg';
import { ReactComponent as Link } from 'assets/icons/about/link.svg';
import { ReactComponent as Face } from 'assets/icons/about/face.svg';
import { useInterval, useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

function LinkMess() {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const [seconds, setSeconds] = useState(300);
  const interval = useInterval(() => setSeconds(s => s - 1), 1000);
  const phone = useMediaQuery('(max-width:575px)');

  useEffect(() => {
    if (seconds === 0) {
      return () => {
        interval.stop();
      };
    }
    interval.start();
    return () => {
      interval.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);
  return (
    <AboutPage title="Link to Messenger" isEdit={false}>
      <Stack className={classes.container}>
        <Paper>
          <Text className={classes.step}>Bước 1: Nhận mã OTP của bạn</Text>
          <Center sx={{ flexDirection: 'column' }}>
            <Flex className={classes.otp}>
              <Text className={classes.code}>1234566</Text>
              <Button variant="subtle" className={classes.linkBtn}>
                <Copy />
              </Button>
            </Flex>
            <Flex
              mt={18}
              align="center"
              justify={phone ? 'center' : 'flex-start'}
            >
              <Text
                sx={{
                  marginTop: 0,
                  marginBottom: 2,
                  [`@media (max-width:575px)`]: {
                    marginTop: 0,
                  },
                }}
                className={classes.desc}
              >
                {seconds === 0
                  ? t('ForgotPage.text.OTP code has expired!')
                  : `${t(
                      'ForgotPage.text.OTP code is valid in',
                    )} (${seconds})s!`}
              </Text>
              <Button
                variant="subtle"
                className={classes.senTo}
                onClick={() => {
                  setSeconds(300);
                }}
              >
                {t('ForgotPage.button.Send back!')}
              </Button>
            </Flex>
          </Center>
        </Paper>
        <Paper>
          <Text className={classes.step}>Bước 2: Gửi mã OTP tới Fanpage</Text>
          <Flex className={classes.link}>
            <Flex align="center">
              <Face />
              <Text className={classes.url}>
                http://www.facebook.com/tranphi
              </Text>
            </Flex>
            <Button variant="subtle" className={classes.linkBtn}>
              <Link />
            </Button>
          </Flex>
        </Paper>
        <Paper>
          <Text className={classes.step}>Bước 3: Liên kết thành công</Text>
          <Text className={classes.nofi}>
            Fanpage gửi thông báo về liên kết thành công.
          </Text>
        </Paper>
      </Stack>
    </AboutPage>
  );
}

export default LinkMess;

const useStyles = createStyles(() => ({
  container: {
    gap: 35,
    width: 570,
    '@media (max-width:575px)': {
      width: '100%',
    },
  },
  otp: {
    borderRadius: 8,
    backgroundColor: '#FFE0D2',
    alignItems: 'center',
    padding: '8px 16px',
    marginTop: 12,
  },
  code: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '20px',
  },
  linkBtn: {
    width: '20px !important',
    height: '20px !important',
    padding: 0,
    marginLeft: 4,
    border: 'none',
  },
  link: {
    height: 55,
    border: '1px solid #D6D6D6',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
    marginTop: 10,
    '@media (max-width:575px)': {
      height: 45,
    },
  },
  url: {
    color: '#108EE9',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    marginLeft: 16,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width:575px)': {
      maxWidth: 240,
    },
  },
  step: {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
  },
  nofi: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '18px',
    marginTop: 4,
  },
  desc: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '4px',
    [`@media (max-width:575px)`]: {
      fontSize: '14px',
      lineHeight: '15px',
      marginTop: '38px',
    },
  },
  senTo: {
    width: '53px !important',
    height: '20px !important',
    padding: '0 8px',
    color: 'var(--black)',
    textDecoration: 'underline',
    [`@media (max-width:575px)`]: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '17.5px',
    },
  },
}));
