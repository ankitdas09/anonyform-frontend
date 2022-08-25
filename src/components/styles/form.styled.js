import styled from "styled-components";

export const StyledForm = styled.div`
	h2 {
		font-size: 1.8rem;
		font-weight: lighter;
		margin: 10px 0;
	}
	h3 {
		font-size: 1rem;
		font-weight: lighter;
		margin: 10px 0;
	}
	input[type="text"] {
		width: 100%;
		margin-right: 1em;
		max-width: 450px;
		min-height: 30px;
		border: none;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		padding: 10px;
		font-weight: normal;
		font-size: 1em;
		color: #121212;
		margin-bottom: 10px;
	}
	label {
		font-size: 1rem;
	}
`;

export const StyledLabels = styled.div`
	h4 {
		font-size: 1.2rem;
		font-weight: lighter;
		margin: 10px 0;
	}
	div {
		width: 100%;
		background-color: #fff;
		min-height: 40px;
		display: flex;
		justify-content: start;
		align-items: center;
		padding: 1em;
		border-radius: 10px;
		color: #121212;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
		margin: 10px 0;
	}
`;
