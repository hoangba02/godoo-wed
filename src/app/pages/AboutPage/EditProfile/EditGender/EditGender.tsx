import React, { useState } from 'react';
import { Button, Checkbox, Container, Flex, Text } from '@mantine/core';
import { AboutPage } from '../../Loadable';
import GendersList from 'app/components/GendersList/GendersList';
import { useDispatch, useSelector } from 'react-redux';
import { UserSlice } from 'store/slice/userSlice';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';

function EditGender() {
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  const profile = useSelector(getProfileSelector);
  // Local
  const [showProfile, setShowProfile] = useState<boolean>(true);
  const [items, setItems] = useState<string[]>([]);
  const handleUpdateGender = () => {
    dispatch(
      actions.requestProfile({
        id: user.id,
        token: user.token,
        profile: {
          nickname: profile.nickname,
          picture: profile.picture,
          date_of_birth: profile.date_of_birth,
          zodiac: profile.zodiac,
          gender: items,
          introduction: profile.introduction,
        },
      }),
    );
  };
  return (
    <AboutPage title="Gender" isEdit={true}>
      <Flex
        sx={{
          width: '100%',
          position: 'relative',
          margin: 0,
        }}
      >
        <Container
          sx={{
            maxWidth: 570,
            paddingTop: 24,
          }}
        >
          <Button
            variant="gradient"
            sx={{
              width: '152px !important',
              height: '45px !important',
              position: 'absolute',
              right: 0,
              top: -55,
            }}
            onClick={handleUpdateGender}
          >
            Save
          </Button>
          <Text
            sx={{
              fontWeight: 600,
              fontSize: 20,
              lineHeight: '25px',
              marginBottom: 18,
              textAlign: 'center',
            }}
          >
            Tell us which genders you are
          </Text>
          <GendersList isTitle={false} items={items} setItems={setItems} />
          <Checkbox
            checked={showProfile}
            onChange={e => {
              setShowProfile(e.currentTarget.checked);
            }}
            sx={{ marginTop: 12 }}
            styles={{
              label: {
                color: '#FF9565',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '18px',
                paddingLeft: 5,
              },
            }}
            color="orange.7"
            label="Show on my profile"
          />
        </Container>
      </Flex>
    </AboutPage>
  );
}

export default EditGender;
