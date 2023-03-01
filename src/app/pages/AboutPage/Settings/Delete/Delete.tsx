import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Image,
  List,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { images } from 'assets/images';
import { AboutPage } from '../../Loadable';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { apiPost } from 'utils/http/request';
import { ReactComponent as X } from 'assets/icons/edit/x.svg';
import AutoModal from 'app/components/Modals/AutoModal';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';

function Delete() {
  const user = useSelector(getUserSelector);
  // Local
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [autoModal, setAutoModal] = useState<boolean>(false);
  const [isContinue, setIsContinue] = useState<boolean>(true);
  const [pass, setPass] = useState<string>('');
  const [error, setErorr] = useState<string>('');

  const form = useForm({
    initialValues: {
      password: '',
    },
    validate: {
      password: value => {
        if (value.length === 0) {
          return t('LoginPage.error.Please fill in this field');
        } else if (value !== user.password) {
          return t('LoginPage.password.Incorrect password');
        } else {
          return null;
        }
      },
    },
  });

  const handleClearPassword = () => {
    setPass('');
    inputRef.current?.focus();
  };
  const handleInputPassword = e => {
    setPass(e.target.value);
  };
  const handleDeletePass = () => {
    if (isContinue) {
      setIsContinue(false);
    } else {
      console.log('first');
      apiPost(
        '/v1/godoo/deleteaccount',
        {
          password: pass,
        },
        {
          userid: user.id,
          token: user.token,
        },
      ).then(res => {
        setAutoModal(true);
        console.log(res);
      });
    }
  };
  return (
    <AboutPage title="Delete account" isEdit={false}>
      {isContinue ? (
        <>
          <Stack
            sx={{
              width: 570,
              alignItems: 'center',
            }}
          >
            <Image width={80} src={images.warn} />
            <Text
              sx={{
                width: '45%',
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 18,
                lineHeight: '22px',
              }}
            >
              Once deleting this account, you cannot take back:
            </Text>
          </Stack>
          <List
            sx={{
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '18px',
              marginTop: 20,
            }}
          >
            <List.Item>All the coins in your GoDoo Wallet</List.Item>
            <List.Item>All the gift in your Gift box</List.Item>
            <List.Item>
              All the contacts with your friends or lover (including texts,
              pictures, gifts,...)
            </List.Item>
            <List.Item>
              All the matches (including <b>You liked</b> and <b>Liked you</b>)
            </List.Item>
            <List.Item>
              Information of this profile for the next time setting up
            </List.Item>
          </List>
          <button onClick={() => setIsContinue(false)} className="aboutBtn">
            Continue
          </button>
        </>
      ) : (
        <form onSubmit={form.onSubmit(handleDeletePass)}>
          <Text
            sx={{
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '22px',
            }}
          >
            You need to enter your password:
          </Text>
          <Box
            sx={{
              position: 'relative',
            }}
          >
            {pass && (
              <Button
                sx={{
                  width: '24px !important',
                  height: '24px !important',
                  padding: 0,
                  position: 'absolute',
                  right: 10,
                  top: '55%',
                  transform: 'translateY(-50%)',
                }}
                variant="subtle"
                onClick={handleClearPassword}
              >
                <X />
              </Button>
            )}
            <TextInput
              sx={{
                width: 570,
                [`@media (max-width:575px)`]: {
                  width: '100%',
                },
              }}
              ref={inputRef}
              value={pass}
              onChange={handleInputPassword}
              placeholder="Password"
              withAsterisk
              {...form.getInputProps('password')}
            />
          </Box>
          <button
            style={{ color: '#FF0000' }}
            type="submit"
            className="aboutBtn"
          >
            Delete now!
          </button>
        </form>
      )}
      <AutoModal
        autoModal={autoModal}
        setAutoModal={setAutoModal}
        image={images.success}
        notification="Xóa tài khoản thành công"
        translateX="35%"
      />
    </AboutPage>
  );
}

export default Delete;
