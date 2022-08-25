import React from "react";
import { Container } from "./styles/essentials.styled";
const ShowCreds = ({ creds }) => {
	return (
		<Container>
			{creds ? (
				<div>
					<h2>Please copy both links</h2>
					{creds[1] ? (
						<>
							<br />
							<h5>
								Form Link <br />
								<a
									href={`https://anonyform.netlify.app/
									forms/${creds[1]}`}
									target="_blank"
									rel="noreferrer"
								>
									https://anonyform.netlify.app/
									{`forms/${creds[1]}`}
								</a>
							</h5>
							<h5>
								Responses <br />
								<a
									href={`https://anonyform.netlify.app/
									forms/responses/${creds[1]}/${creds[0]}`}
									target="_blank"
									rel="noreferrer"
								>
									https://anonyform.netlify.app/
									{`forms/responses/${creds[1]}/${creds[0]}`}
								</a>
							</h5>
							<br />
						</>
					) : (
						"Loading link ... Please wait"
					)}
					<p>Token : {creds[0] ? creds[0] : "loading..."}</p>
					<p>Form Id : {creds[1] ? creds[1] : "loading..."}</p>
					{/* <h6>Format : https://anonyform.netlify.app/forms/ formID </h6> */}
					{/* {/* <h6>Response Format : https://anonyform.netlify.app/forms/responses/ formID / accessToken</h6> */}
				</div>
			) : (
				"Something went wrong!"
			)}
		</Container>
	);
};

export default ShowCreds;
