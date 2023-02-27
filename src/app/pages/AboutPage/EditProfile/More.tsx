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
// interest
import { ReactComponent as Running } from 'assets/icons/interest/sport/running.svg';
import { ReactComponent as Yoga } from 'assets/icons/interest/sport/yoga.svg';
import { ReactComponent as Baseball } from 'assets/icons/interest/sport/baseball.svg';
import { ReactComponent as Soccer } from 'assets/icons/interest/sport/soccer.svg';
import { ReactComponent as MoutainBiking } from 'assets/icons/interest/sport/moutainBiking.svg';
import { ReactComponent as Fishing } from 'assets/icons/interest/sport/fishing.svg';
import { ReactComponent as Marathon } from 'assets/icons/interest/sport/marathon.svg';
import { ReactComponent as Golf } from 'assets/icons/interest/sport/golf.svg';
import { ReactComponent as Tennis } from 'assets/icons/interest/sport/tennis.svg';
import { ReactComponent as HorsebackRiding } from 'assets/icons/interest/sport/horsebackRiding.svg';
import { ReactComponent as Hunting } from 'assets/icons/interest/sport/hunting.svg';
import { ReactComponent as PhysicalFitness } from 'assets/icons/interest/sport/physicalFitness.svg';
import { ReactComponent as Meditation } from 'assets/icons/interest/sport/meditation.svg';
import { ReactComponent as WeightTraining } from 'assets/icons/interest/sport/weightTraining.svg';
import { ReactComponent as Snowboarding } from 'assets/icons/interest/sport/snowboarding.svg';
import { ReactComponent as Swimming } from 'assets/icons/interest/sport/swimming.svg';
import { ReactComponent as Pingpong } from 'assets/icons/interest/sport/pingpong.svg';
import { ReactComponent as Wrestling } from 'assets/icons/interest/sport/wrestling.svg';
import { ReactComponent as Skiing } from 'assets/icons/interest/sport/skiing.svg';
import { ReactComponent as AutoRacing } from 'assets/icons/interest/sport/autoRacing.svg';
import { ReactComponent as Surfing } from 'assets/icons/interest/sport/surfing.svg';
import { ReactComponent as Parachute } from 'assets/icons/interest/sport/parachute.svg';
import { ReactComponent as Camping } from 'assets/icons/interest/sport/camping.svg';
import { ReactComponent as Biking } from 'assets/icons/interest/sport/biking.svg';
import { ReactComponent as Boating } from 'assets/icons/interest/sport/boating.svg';
import { ReactComponent as Chess } from 'assets/icons/interest/sport/chess.svg';
import { ReactComponent as Cricket } from 'assets/icons/interest/sport/cricket.svg';
import { ReactComponent as Badminton } from 'assets/icons/interest/sport/badminton.svg';
import { ReactComponent as Skateboard } from 'assets/icons/interest/sport/skateboard.svg';
import { ReactComponent as Volleyball } from 'assets/icons/interest/sport/volleyball.svg';
import { ReactComponent as Boxing } from 'assets/icons/interest/sport/boxing.svg';
import { ReactComponent as AmericanFootball } from 'assets/icons/interest/sport/americanFootball.svg';

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

export const INTERESTS = [
  'Sport & Outdoor',
  'Food & Cuisine',
  'Drink',
  'Art',
  'Pets',
  'Traveling',
  'Beauty',
  'Game',
  'Movies & TV',
  'Music',
  'Reading',
];
export const INTEREST = [
  { type: 'Sport & Outdoor', name: 'Running', icon: <Running /> },
  { type: 'Sport & Outdoor', name: 'Yoga', icon: <Yoga /> },
  { type: 'Sport & Outdoor', name: 'Soccer', icon: <Soccer /> },
  { type: 'Sport & Outdoor', name: 'Baseball', icon: <Baseball /> },
  { type: 'Sport & Outdoor', name: 'MoutainBiking', icon: <MoutainBiking /> },
  { type: 'Sport & Outdoor', name: 'Fishing', icon: <Fishing /> },
  { type: 'Sport & Outdoor', name: 'Marathon', icon: <Marathon /> },
  { type: 'Sport & Outdoor', name: 'Golf', icon: <Golf /> },
  { type: 'Sport & Outdoor', name: 'Tennis', icon: <Tennis /> },
  {
    type: 'Sport & Outdoor',
    name: 'HorsebackRiding',
    icon: <HorsebackRiding />,
  },
  { type: 'Sport & Outdoor', name: 'Hunting', icon: <Hunting /> },
  {
    type: 'Sport & Outdoor',
    name: 'PhysicalFitness',
    icon: <PhysicalFitness />,
  },
  { type: 'Sport & Outdoor', name: 'Meditation', icon: <Meditation /> },
  { type: 'Sport & Outdoor', name: 'WeightTraining', icon: <WeightTraining /> },
  { type: 'Sport & Outdoor', name: 'Snowboarding', icon: <Snowboarding /> },
  { type: 'Sport & Outdoor', name: 'Swimming', icon: <Swimming /> },
  { type: 'Sport & Outdoor', name: 'Pingpong', icon: <Pingpong /> },
  { type: 'Sport & Outdoor', name: 'Wrestling', icon: <Wrestling /> },
  { type: 'Sport & Outdoor', name: 'Skiing', icon: <Skiing /> },
  { type: 'Sport & Outdoor', name: 'AutoRacing', icon: <AutoRacing /> },
  { type: 'Sport & Outdoor', name: 'Surfing', icon: <Surfing /> },
  { type: 'Sport & Outdoor', name: 'Parachute', icon: <Parachute /> },
  { type: 'Sport & Outdoor', name: 'Camping', icon: <Camping /> },
  { type: 'Sport & Outdoor', name: 'Biking', icon: <Biking /> },
  { type: 'Sport & Outdoor', name: 'Boating', icon: <Boating /> },
  { type: 'Sport & Outdoor', name: 'Chess', icon: <Chess /> },
  { type: 'Sport & Outdoor', name: 'Cricket', icon: <Cricket /> },
  { type: 'Sport & Outdoor', name: 'Badminton', icon: <Badminton /> },
  { type: 'Sport & Outdoor', name: 'Skateboard', icon: <Skateboard /> },
  { type: 'Sport & Outdoor', name: 'Volleyball', icon: <Volleyball /> },
  { type: 'Sport & Outdoor', name: 'Boxing', icon: <Boxing /> },
  {
    type: 'Sport & Outdoor',
    name: 'AmericanFootball',
    icon: <AmericanFootball />,
  },
];
