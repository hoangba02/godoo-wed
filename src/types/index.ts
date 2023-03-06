import { RootState } from './RootState';

export type { RootState };

export interface ProfilePageProps {
  image?: string;
  progress?: number;
  back?: string;
  children?: JSX.Element | JSX.Element[];
}
