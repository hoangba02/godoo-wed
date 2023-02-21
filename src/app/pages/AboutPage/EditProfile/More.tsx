import React from 'react';
import { ReactComponent as HeightIcon } from 'assets/icons/edit/Height.svg';
import { ReactComponent as StarSignIcon } from 'assets/icons/edit/StarSign.svg';
import { ReactComponent as CareerIcon } from 'assets/icons/edit/Career.svg';
import { ReactComponent as EducationLevelIcon } from 'assets/icons/edit/EducationLevel.svg';
import { ReactComponent as HometownIcon } from 'assets/icons/edit/Hometown.svg';
import { ReactComponent as LivingInIcon } from 'assets/icons/edit/LivingIn.svg';
import { ReactComponent as FavoritePlaceIcon } from 'assets/icons/edit/FavoritePlace.svg';
import { ReactComponent as DatingOrientationIcon } from 'assets/icons/edit/DatingOrientation.svg';
import { ReactComponent as SmokingIcon } from 'assets/icons/edit/Smoking.svg';
import { ReactComponent as DrinkingIcon } from 'assets/icons/edit/Drinking.svg';
import { ReactComponent as ChildrenIcon } from 'assets/icons/edit/Children.svg';
import { ReactComponent as LanguagesIcon } from 'assets/icons/edit/Languages.svg';
import Height from './Height/Height';
import StarSign from './StarSign/StarSign';
import Career from './Career/Career';
import EducationLevel from './EducationLevel/EducationLevel';
import LangSpeak from './LangSpeak/LangSpeak';
import Children from './Children/Children';
import Drinking from './Drinking/Drinking';
import DatingOrientation from './DatingOrientation/DatingOrientation';
import Smoking from './Smoking/Smoking';
import FavoritePlace from './FavoritePlace/FavoritePlace';
import LivingIn from './LivingIn/LivingIn';
import Hometown from './Hometown/Hometown';
import Politics from './Politics/Politics';
import Religion from './Religion/Religion';

export const MORE = [
  {
    icon: <HeightIcon />,
    name: 'Height',
    component: <Height />,
  },
  {
    name: 'Star Sign',
    icon: <StarSignIcon />,
    component: <StarSign />,
  },
  {
    name: 'Career',
    icon: <CareerIcon />,
    component: <Career />,
  },
  {
    name: 'Education level',
    icon: <EducationLevelIcon />,
    component: <EducationLevel />,
  },
  {
    name: 'Hometown',
    icon: <HometownIcon />,
    component: <Hometown />,
  },
  {
    name: 'Living in',
    icon: <LivingInIcon />,
    component: <LivingIn />,
  },
  {
    name: 'Favorite place',
    icon: <FavoritePlaceIcon />,
    component: <FavoritePlace />,
  },
  {
    name: 'Dating orientation',
    icon: <DatingOrientationIcon />,
    component: <DatingOrientation />,
  },
  {
    name: 'Smoking',
    icon: <SmokingIcon />,
    component: <Smoking />,
  },
  {
    name: 'Drinking',
    icon: <DrinkingIcon />,
    component: <Drinking />,
  },
  {
    name: 'Children',
    icon: <ChildrenIcon />,
    component: <Children />,
  },
  {
    name: 'Languages',
    icon: <LanguagesIcon />,
    component: <LangSpeak />,
  },
  {
    name: 'Religion',
    component: <Religion />,
  },
  {
    name: 'Politics',
    component: <Politics />,
  },
];
