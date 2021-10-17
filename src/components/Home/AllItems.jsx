import React, { useState } from "react";

//Img
import check from "../../img/check.svg";
import checkTwo from "../../img/checkTwo.svg";
import trash from "../../img/trash.svg";
import back from "../../img/back.svg";
import close from "../../img/close.svg";

const AllItems = ({
	name,
	handleItemsStatus,
	handleItemsRecycle,
	status,
	recycle,
	handleItemsBack,
	handleItemsDetele,
}) => {
	const [btCheck, setBtCheck] = useState(status);
	const [btRecycle, setBtRecycle] = useState(false);

	const handleCheck = () => {
		if (btCheck) {
			handleItemsStatus(false, name);
		} else {
			handleItemsStatus(true, name);
		}
		setBtCheck(!btCheck);
	};
	// console.log(btCheck);
	const handleRecycle = () => {
		if (btRecycle) {
			handleItemsRecycle(false, name);
		} else {
			handleItemsRecycle(true, name);
		}
		setBtRecycle(!btRecycle);
	};

	const handleBack = () => {
		handleItemsBack(false, name);
	};

	const handleDelete = () => {
		handleItemsDetele(name);
	};

	return (
		<div className="bg-white rounded px-2 py-3 flex justify-between items-center mb-4 w-full">
			<div className="inline-flex">
				<button className="mr-3" onClick={handleCheck}>
					{btCheck ? (
						<img src={checkTwo} alt={name} />
					) : (
						<img src={check} alt={name} />
					)}
				</button>
				<p className={btCheck ? "line-through" : "block"}>{name}</p>
			</div>
			<div className="flex items-center">
				{recycle ? (
					<button className="mr-4" onClick={handleBack}>
						<img src={back} alt={name} />
					</button>
				) : (
					<button onClick={status ? handleRecycle : console.log()}>
						<img src={trash} alt={name} />
					</button>
				)}
				{recycle ? (
					<button onClick={handleDelete}>
						<img src={close} alt={name} />
					</button>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
};

export default AllItems;
