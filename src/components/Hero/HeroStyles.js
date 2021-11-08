import styled from 'styled-components';
import { Column, Row, Section, Subtitle } from '../../globalStyles';
import { orange, white } from '../../Colors';

export const HeroSection = styled(Section)`
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
		url('./images/hero2.jpg');
	height: 100vh;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	display: flex;
	/* padding-top: 220px;
	@media screen and (max-width: 768px) {
		padding-top: 120px;
	} */
	/* @media screen and (max-width: 768px) {
		height: auto;
	} */
`;

export const HeroRow = styled(Row)`
	justify-content: center;
	> button {
		margin: 0 0.5rem;
	}
`;

export const HeroColumn = styled(Column)`
	align-items: center;
`;

export const HeroText = styled(Subtitle)`
	text-align: center;
	color: ${white};
	font-size: clamp(1rem, 3vw, 1.3rem);
`;

export const ButtonContainer = styled(Row)`
	justify-content: center;
	flex-flow: wrap;
	@media screen and (max-width: 720px) {
	}
	button {
		background-color: transparent;
		margin: 0 0.3rem;
		/* width: 50%; */
	}
	button:nth-child(1) {
		border: 2px solid ${orange};
		&:hover {
			border: 2px solid transparent;
		}
	}
	button:nth-child(2) {
		padding: 8px 32px;
		display: flex;
		align-items: center;
		&:hover {
			background-color: transparent;
			color: ${orange};
		}
		> svg {
			margin-right: 0.4rem;
		}
	}
`;