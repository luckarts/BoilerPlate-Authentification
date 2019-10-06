import styled from 'styled-components';

const Container = styled.div`
	max-width: 500px;
	margin: 15vh auto;
	padding: 20px 20px 60px 20px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	h1 {
		padding-top: 32px;
		padding-bottom: 32px;
		text-align: center;
		color: #222;
	}
	form {
		padding-right: 32px;
		padding-left: 32px;
	}

	label {
		display: block;
		margin-bottom: 1rem;
	}
	span {
		color: red;
	}
	input {
		margin-bottom: 10px;
		padding: 10px;
		width: 100%;
		font-family: inherit;
		font-size: 1.2rem;
		border-style: solid;
		border-width: 1px;
		border-radius: 5px;
		border-color: #d6d6d6;
		transition: border-bottom-color 0.25s ease-in;

		&:focus {
			border-bottom-color: #e5195f;
			outline: 0;
		}
	}

	button {
		display: block;
		width: 100%;
		padding: 12px 0;
		font-family: inherit;
		font-size: 14px;
		font-weight: 700;
		color: #fff;
		background-color: #e5195f;
		border: 0;
		border-radius: 10px;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
		margin: 5vh 0;
		cursor: pointer;
		transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
	}
	fieldset {
		border-radius: 5px;
		padding: 0;
		&[disabled] {
			opacity: 0.5;
		}
		&::before {
			height: 10px;
			content: '';
			display: block;
		}
	}
`;
export default Container;
