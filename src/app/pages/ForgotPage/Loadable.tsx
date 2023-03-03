/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const ForgotPage = lazyLoad(
  () => import('./index'),
  module => module.ForgotPage,
);
