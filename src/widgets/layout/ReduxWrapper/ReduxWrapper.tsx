'use client';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../shared/store/store';

const ReduxWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
