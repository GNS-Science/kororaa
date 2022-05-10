import { createContext } from 'react';
import { noop } from 'lodash';

interface LocalStorageContextInterface {
  disclaimerVersion: string;
  setDisclaimerVersion: (newValue: string) => void;
}

const LocalStorageContext = createContext<LocalStorageContextInterface>({
  disclaimerVersion: '',
  setDisclaimerVersion: noop,
});

export default LocalStorageContext;
