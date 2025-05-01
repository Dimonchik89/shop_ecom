import React from 'react';

interface ErrorProps {
	message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
	return <h2 className="w-full text-center">{message}</h2>;
};

export default Error;
