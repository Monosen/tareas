import React from "react";

const AddItem = ({ handleAddItems, setTitle, titletDup, title }) => {
	return (
		<>
			<form action="" onSubmit={handleAddItems}>
				<input
					className="mr-3 rounded px-4 py-1"
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<input className="px-5 py-1 rounded" type="submit" value="ADD" />
			</form>
			{titletDup && (
				<p className="text-xl capitalize text-third">nombre repetido</p>
			)}
		</>
	);
};

export default AddItem;
