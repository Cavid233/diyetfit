import { MMKV } from 'react-native-mmkv';
import Config from 'react-native-config';

const { MMKV_ENCRYPTION_KEY } = Config;

export enum StorageKeys {
  AUTH_DATA = '@AUTH_DATA',
}

const storage = new MMKV({
  id: `diyetfit-storage-dev-${__DEV__}`,
  encryptionKey: MMKV_ENCRYPTION_KEY,
});

const generateUserSpecificStorage = (userId: number | string) => {
  if (!userId) throw Error('userId is undefined');

  const instance = new MMKV({
    id: `diyetfit-storage-${userId}-dev-${__DEV__}`,
    encryptionKey: MMKV_ENCRYPTION_KEY,
  });

  return instance;
};

export { storage, generateUserSpecificStorage };
