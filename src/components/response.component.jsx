import React from "react";

const Response = ({ response }) => {
	return (
		<div>
			<br />
			{response &&
				response.map((data, idx) => (
					<p key={idx}>
						{data["label"]} : {data["data"]}
					</p>
				))}
			<br />
			<hr></hr>
		</div>
	);
};

export default Response;
