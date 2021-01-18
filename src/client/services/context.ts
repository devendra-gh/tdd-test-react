import React from 'react';
import { Store } from 'redux';

export const StoreContext = React.createContext<Store | null>(null);
