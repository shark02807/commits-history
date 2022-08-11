/* eslint no-console: 0 */
export interface ISessionStorageService {
  setItem(key: string, token: string): void;
  getItem(key: string): string | null | undefined;
}

const setItem = (key: string, value: string): void => {
  try {
    window?.sessionStorage.setItem(key, value);
  } catch {
    console.log('There are no such property in Session Storage');
  }
};

const getItem = (key: string): string | null | undefined => {
  try {
    return window?.sessionStorage?.getItem(key);
  } catch {
    console.log('There are no such property in Session Storage');
    return null;
  }
};

export default {
  setItem,
  getItem
} as ISessionStorageService;
