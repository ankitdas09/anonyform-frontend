import styled from "styled-components";

export const Container = styled.div`
	max-width: 1000px;
	margin: auto;
	padding: 1em;
`;

export const Flex = styled.div`
	display: flex;
	& > div {
		flex: 1;
	}
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Button = styled.button`
	width: 150px;
	min-height: 40px;
	color: #f5f3f5;
	background-color: #274690;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	margin: 10px 10px 0 0;
	&:hover {
		transform: scale(0.98);
	}
`;
