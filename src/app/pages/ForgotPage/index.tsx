import React from 'react';
import PublicLayout from 'app/components/Layout/PublicLayout/PublicLayout';
import { Container, Flex, Text } from '@mantine/core';
import { makePublicStyles } from 'app/components/Layout/PublicLayout/PublicStyles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-narrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';

interface Props {
  back?: string;
  children?: JSX.Element | JSX.Element[];
}
export function ForgotPage({ children, back }: Props) {
  const navigate = useNavigate();
  // Local
  const { t } = useTranslation();
  const { classes } = makePublicStyles();
  return (
    <PublicLayout>
      <Flex className={classes.header}>
        <SubtleButton
          variant="subtle"
          className={classes.backBtn}
          onClick={() => {
            navigate(`/${back}`);
          }}
        >
          <ArrowLeft />
        </SubtleButton>
        <Text className={classes.title}>{t('Forgot.Reset your password')}</Text>
      </Flex>
      <Container fluid sx={{ paddingTop: 38 }}>
        {children}
      </Container>
    </PublicLayout>
  );
}
