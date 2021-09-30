import React from "react";

const AddItem = ({ handleAddItems, setTitle, titletDup }) => {
	return (
		<>
			<form action="" onSubmit={handleAddItems}>
				<input
					className="mr-3 rounded px-4 py-1"
					type="text"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input className="px-5 py-1 rounded" type="submit" value="ADD" />
			</form>
			{titletDup ? (
				<p className="text-xl capitalize">nombre repetido</p>
			) : (
				console.log("new text")
			)}
		</>
	);
};

export default AddItem;
