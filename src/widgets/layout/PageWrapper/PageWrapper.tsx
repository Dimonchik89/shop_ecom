import React from 'react';
import Header from '../../Header/ui/Header';
import Footer from '../../Footer/ui/Footer';
import Container from '../../../shared/ui/Container/Container';
import ReduxWrapper from '../ReduxWrapper/ReduxWrapper';

const PageWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<ReduxWrapper>
			<div className="flex flex-col min-h-screen">
				<div className="flex flex-col flex-auto">
					<Header />
					<main className="flex-auto">
						<Container>{children}</Container>
					</main>
				</div>
				<Footer />
			</div>
		</ReduxWrapper>
	);
};

export default PageWrapper;
