import { getData } from 'client/utils/appData';

let featureFlags: Record<string, boolean> = {};

export function initFeatureFlags() {
  featureFlags = {};
  getData()
    .featureFlags?.split(',')
    .forEach((flag: string) => {
      featureFlags[flag] = true;
    });
}

export function hasFeatureFlag(flag: string) {
  return !!featureFlags[flag];
}
