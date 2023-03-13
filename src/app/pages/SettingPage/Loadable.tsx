/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const SettingPage = lazyLoad(
  () => import('./index'),
  module => module.SettingPage,
);
