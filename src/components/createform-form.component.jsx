import React, { useState } from "react";
import { getForm, createForm } from "../api";
import { v4 as uuidv4 } from "uuid";
import { StyledForm, StyledLabels } from "./styles/form.styled";
import { Container, Flex, Button } from "./styles/essentials.styled";
const CreateForm = ({ handleFormCreated, setCreds }) => {
	const [label, setLabel] = useState("");
	const [labels, setLabels] = useState([]);

	const handleChange = (e) => {
		setLabel(e.target.value);
	};
	const handleAdd = () => {
		if (label) {
			setLabel("");
			setLabels([...labels, label]);
		}
	};
	const handleCreate = async () => {
		const data = await createForm(labels);
		console.log(data);
		setLabel("");
		setLabels([]);
		// setFormCreated(1)
		setCreds(data);
	};
	return (
		<Container>
			<Flex>
				<StyledForm className="form-input-container">
					<h2 style={{ fontWeight: "lighter" }}>Create New Form</h2>
					<h3>Add New Field: </h3>
					<input
						type="text"
						name=""
						id=""
						onChange={handleChange}
						value={label}
					/>
					<Button type="button" value="Add" onClick={handleAdd}>
						Add
					</Button>
					{labels.length ? (
						<Button
							className="btn btn-createform"
							onClick={() => {
								handleCreate();
								handleFormCreated();
							}}
						>
							Create Form
						</Button>
					) : (
						""
					)}
				</StyledForm>
				<StyledLabels>
					<h4>Form Fields: </h4>
					{labels.map((label, idx) => (
						<div key={uuidv4()}>
							<p>{label}</p>
						</div>
					))}
				</StyledLabels>
			</Flex>
			{/* <div>
				{labels.length ? (
					<Button
						className="btn btn-createform"
						onClick={() => {
							handleCreate();
							handleFormCreated();
						}}
					>
						Create Form
					</Button>
				) : (
					""
				)}
			</div> */}
		</Container>
	);
};

export default CreateForm;
