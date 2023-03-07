import { RootState } from './RootState';

export type { RootState };

export interface ProfilePageProps {
  image?: string;
  progress?: number;
  back?: string;
  children?: JSX.Element | JSX.Element[];
}
export interface PopupProps {
  name?: string;
  image?: string;
  content?: string;
  show?: any;
  toggle?: any;
  children?: JSX.Element | JSX.Element[];
  position?: string | number;
  isClose?: boolean;
}
