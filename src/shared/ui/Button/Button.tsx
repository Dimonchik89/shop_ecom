import React from 'react';
import classNames from 'classnames';
import { ButtonEnum } from './button';

interface ButtonProps {
	title: string;
	activeButton?: string;
	handleClick: (str: ButtonEnum) => void;
}

const Button: React.FC<ButtonProps> = ({ title, activeButton, handleClick }) => {
	return (
		<button className={classNames('bg-green-500 px-3 py-1 rounded-xl text-white font-bold cursor-pointer ease-in-out duration-300', { 'bg-green-700': title === activeButton })} onClick={() => handleClick(title as ButtonEnum)}>
			{title}
		</button>
	);
};

export default Button;
