import React from 'react';

import { ReactComponent as Vn } from 'assets/icons/vi.svg';
import { ReactComponent as En } from 'assets/icons/en.svg';

export interface DataLanguageProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  value: 'vi' | 'en';
}

export const dataLanguage: DataLanguageProps[] = [
  {
    id: 1,
    icon: <Vn />,
    title: 'Vietnam',
    value: 'vi',
  },
  {
    id: 2,
    icon: <En />,
    title: 'English',
    value: 'en',
  },
];

export const lengthLanguage = dataLanguage.length;
