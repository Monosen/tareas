import React from "react";

const AddItem = ({ handleAddItems, setTitle, titletDup, title }) => {
	return (
		<>
			<form action="" className="text-center" onSubmit={handleAddItems}>
				<span className="w-1/12 text-center inline-block">
					<input
						className="bg-transparent w-8 h-8 border-2 rounded-full text-white hover:bg-first font-bold"
						type="submit"
						value="+"
					/>
				</span>
				<input
					className="px-4 py-3 bg-transparent focus:outline-none text-white w-11/12 placeholder-white"
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					placeholder="Create a new todo..."
				/>
			</form>
			{titletDup && (
				<p className="text-xl capitalize text-third">nombre repetido</p>
			)}
		</>
	);
};

export default AddItem;
