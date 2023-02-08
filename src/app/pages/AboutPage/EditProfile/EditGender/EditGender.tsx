import React, { useState } from 'react';
import { Checkbox, Container, Text } from '@mantine/core';
import { AboutPage } from '../../Loadable';
import GendersList from 'app/components/GendersList/GendersList';

function EditGender() {
  const [showProfile, setShowProfile] = useState<boolean>(true);
  return (
    <AboutPage title="Gender">
      <Container
        sx={{
          maxWidth: 570,
          paddingTop: 24,
        }}
      >
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
        <GendersList isTitle={false} />
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
    </AboutPage>
  );
}

export default EditGender;
