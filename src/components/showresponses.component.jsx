import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Response from "./response.component";

import { getResponses } from "../api";
import { Button, Container } from "./styles/essentials.styled";
const ShowResponses = () => {
	const { id, token } = useParams();
	const [responses, setResponses] = useState(null);
	const handleGetResponses = async () => {
		const response = await getResponses(id, token);
		if (response) {
			setResponses(response);
		}
	};

	useEffect(() => {
		handleGetResponses();
	}, []);

	return (
		<Container>
			{responses ? (
				<>
					<div>All Responses</div>
					<h6>Total : {responses.length}</h6>
					<hr></hr>
					<table>
						<tbody>
							{responses &&
								responses.map((response, idx) => (
									<tr>
										<td>
											<p style={{ margin: "20px" }}>
												{idx + 1}
											</p>
										</td>
										<td style={{ width: "100%" }}>
											<Response
												key={idx}
												response={response}
											/>
										</td>
									</tr>
								))}
						</tbody>
					</table>
					<br />
					<Button onClick={handleGetResponses}>Refresh</Button>
				</>
			) : (
				"Loading Responses"
			)}
		</Container>
	);
};

export default ShowResponses;
