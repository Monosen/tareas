import React, { useState } from "react";

//Img
import check from "../../img/check.svg";
import edit from "../../img/edit.svg";
import trash from "../../img/trash.svg";

const AllItems = ({ name }) => {
	const [btCheck, setBtCheck] = useState(false);

	const handleCheck = (e) => {
		e.preventDefault();
		setBtCheck(!btCheck);
	};

	return (
		<div className="bg-third rounded px-2 py-2 flex justify-between items-center mb-4">
			<p className={btCheck ? "line-through" : console.log("normal")}>{name}</p>
			<div className="inline-flex">
				<div>
					<form action="" onSubmit={handleCheck}>
						<input type="image" src={check} />
					</form>
					{/* <img src={check} alt="" onSubmit={handleCheck} /> */}
				</div>
				<div>
					<img src={edit} alt="" />
				</div>
				<div>
					<img src={trash} alt="" />
				</div>
			</div>
		</div>
	);
};

export default AllItems;
