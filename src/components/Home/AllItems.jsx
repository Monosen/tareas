import React, { useState } from "react";

//Styles
import "./AllItems.styles.css";

//Icons
import {
	RiCheckboxBlankCircleLine,
	RiCheckboxCircleFill,
	RiCloseFill,
	RiArrowGoBackFill,
} from "react-icons/ri";

import { FiTrash2 } from "react-icons/fi";

const AllItems = (props) => {
	const {
		name,
		handleItemsStatus,
		handleItemsRecycle,
		status,
		recycle,
		handleItemsBack,
		handleItemsDetele,
	} = props;

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
		<div className="glassmorphism_item px-2 py-4 flex justify-between items-center w-full border-t-2 border-white text-white">
			<div className="inline-flex">
				<button className="mr-3" onClick={handleCheck}>
					{btCheck ? (
						<RiCheckboxCircleFill className="text-2xl" />
					) : (
						<RiCheckboxBlankCircleLine className="text-2xl" />
					)}
				</button>
				<p className={btCheck ? "line-through" : "block"}>{name}</p>
			</div>
			<div className="flex items-center">
				{recycle ? (
					<button className="mr-4" onClick={handleBack}>
						<RiArrowGoBackFill className="text-2xl" />
					</button>
				) : (
					<button onClick={status && handleRecycle}>
						<FiTrash2 className="text-3xl" />
					</button>
				)}
				{recycle && (
					<button onClick={handleDelete}>
						<RiCloseFill className="text-3xl" />
					</button>
				)}
			</div>
		</div>
	);
};

export default AllItems;
