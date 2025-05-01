import React from 'react';

// interface ContainerProps extends React.PropsWithChildren {}

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <div className="w-full px-5 max-w-7xl mx-auto">{children}</div>;
};

export default Container;
