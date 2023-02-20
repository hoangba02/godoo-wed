import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Flex,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { AboutStyles } from './AboutStyles';

import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as Settings } from 'assets/icons/about/settings.svg';
import { ReactComponent as Gift } from 'assets/icons/about/gift.svg';
import { ReactComponent as Wallet } from 'assets/icons/about/wallet.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/about/chevronRight.svg';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { useNavigate } from 'react-router-dom';
import { images } from 'assets/images';

interface Props {
  animation?: any;
  onAnimationEnd?: any;
  isEdit?: boolean;
}
function About({ animation, onAnimationEnd, isEdit }: Props) {
  const navigate = useNavigate();
  const { classes } = AboutStyles();

  // Global
  const profile = useSelector(getProfileSelector);

  return (
    <motion.div
      initial={animation && { width: '100%' }}
      animate={animation && { width: '32%' }}
      transition={{ duration: 1.5 }}
      onAnimationComplete={() => {
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }}
      className={classes.wrapper}
    >
      <Container className={classes.container}>
        <Flex className={classes.header}>
          <Button
            variant="subtle"
            className={classes.aboutBtn}
            onClick={() => navigate('/')}
          >
            <ArrowLeft />
          </Button>
          <Stack align="center" spacing={0}>
            <Center
              sx={{
                position: 'relative',
                width: 166,
                height: 166,
                borderRadius: '50%',
                background: 'linear-gradient(90deg, #E46125 0%, #C91A44 100%)',
                '::before': {
                  content: '""',
                  position: 'absolute',
                  width: 158,
                  height: 158,
                  borderRadius: '50%',
                  background: 'var(--white)',
                },
              }}
            >
              <Avatar size={150} radius={9999} src={profile.picture[0]} />
            </Center>
            <Text className={classes.nickname}>{profile.nickname}</Text>
            <Button
              sx={{
                color: isEdit ? '#E46125' : '#929292',
                backgroundColor: isEdit ? '#FFE9E0' : '#EAEAEA',
              }}
              variant="subtle"
              className={classes.editBtn}
              onClick={() => {
                navigate('/about/profile');
              }}
            >
              edit my profile
            </Button>
          </Stack>
          <Button
            variant="subtle"
            className={classes.aboutBtn}
            onClick={() =>
              navigate('/about/setting', {
                state: {
                  animation: true,
                },
              })
            }
          >
            <Settings />
          </Button>
        </Flex>
        <Flex className={classes.wallet}>
          <Stack
            sx={{
              background:
                'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
            }}
            className={classes.moneyBtn}
          >
            <Gift />
            <Text className={classes.textWallet}>Gift Box</Text>
          </Stack>
          <Stack
            sx={{
              background:
                'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
            }}
            className={classes.moneyBtn}
          >
            <Wallet />
            <Text className={classes.textWallet}>Wallet</Text>
          </Stack>
        </Flex>
        <Stack className={classes.premiums}>
          <Premium
            title="GoDoo Premium"
            cost="250 000"
            isRe={true}
            desc="Unlock all features, enjoy your time."
            diamond={images.diaYellow}
          />
          <Premium
            title="Premium 1"
            cost="50 000"
            isRe={false}
            desc="Undo if you swipe left by accident"
            diamond={images.diaBlue}
          />
          <Premium
            title="Premium 2"
            cost="50 000"
            isRe={false}
            diamond={images.diaBlue}
          />
        </Stack>
      </Container>
    </motion.div>
  );
}

export default About;
interface PremiumProps {
  title: string;
  cost: string;
  isRe: boolean;
  desc?: string;
  diamond: any;
}
export function Premium({ title, cost, isRe, desc, diamond }: PremiumProps) {
  const { classes } = PremiumStyles();
  const [hover, setHover] = useState<boolean>(false);
  const handleHoverPremium = () => {
    setHover(prev => !prev);
  };
  return (
    <Flex
      sx={{
        gap: 8,
        width: '100%',
        borderRadius: 9,
        padding: 10,
        border: isRe ? '2px solid #FFA800' : '2px solid #D6D6D6',
        boxShadow: isRe ? '0px 8px 25px rgba(0, 0, 0, 0.2)' : 'initial',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.45s ease',
        ':hover': {
          border: '2px solid #E46125',
        },
      }}
      onMouseOver={handleHoverPremium}
      onMouseOut={handleHoverPremium}
    >
      {isRe && (
        <Text
          sx={{
            width: 113,
            height: 24,
            right: 12,
            top: -12,
            background: '#FFA800',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '20px',
            color: '#FFFFFF',
            borderRadius: 8,
            position: 'absolute',
            padding: '0px 10px',
          }}
        >
          recommend
        </Text>
      )}
      <Image width={42} height={42} src={diamond} />
      <Stack
        sx={{
          gap: 10,
          flex: 1,
        }}
      >
        <Box>
          <Text
            sx={{
              fontWeight: 600,
              fontSize: 20,
              lineHeight: '25px',
              color: isRe ? '#E46125' : '#000',
            }}
          >
            {title}
          </Text>
          <Text
            sx={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '18px',
              color: '#929292',
            }}
          >
            {desc ? (
              desc
            ) : (
              <p>
                "Keep the list <span className={classes.span}>You liked</span>{' '}
                and <span className={classes.span}>Liked you</span> longer"
              </p>
            )}
          </Text>
        </Box>

        <Flex
          sx={{
            width: '100%',
            padding: '4px 4px 4px 20px',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#EAEAEA',
            borderRadius: 32,
            transition: 'all 0.45s linear',
            backgroundColor: hover ? '#E46125' : '#EAEAEA',
          }}
        >
          <Text
            sx={{
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '20px',
              transition: 'all 0.45s linear',
              color: hover ? '#FFFFFF' : '#000',
            }}
          >
            Upgrade now {cost}
          </Text>
          <Button
            variant="subtle"
            sx={{
              width: '24px !important',
              height: '24px !important',
              borderRadius: '50%',
              padding: 0,
              color: hover ? '#E46125' : '#FFFFFF',
              transition: 'all 0.45s linear',
              backgroundColor: hover ? '#FFFFFF' : '#E46125',
            }}
          >
            <ArrowRight />
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}

const PremiumStyles = createStyles(() => ({
  span: {
    color: '#000',
    fontWeight: 600,
  },
}));
