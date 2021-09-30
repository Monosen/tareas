import React, { useState } from "react";

//Components
import AddItem from "../../components/Home/AddItem";
import AllItems from "../../components/Home/AllItems";

const Home = () => {
	const [title, setTitle] = useState("");
	const [allList, setAllList] = useState([]);
	const [titletDup, setTitleDup] = useState(false);

	const handleAddItems = (e) => {
		e.preventDefault();
		if (title !== "") {
			const data = allList.some((name) => {
				if (name.title === title) {
					console.log("duplicado");
					setTitleDup(true);
					return true;
				} else {
					console.log("no duplicado");
					setTitleDup(false);
					return false;
				}
			});
			if (!data) {
				setAllList([...allList, { title: title, status: false }]);
			}
		}
	};
	// console.log(titletDup);
	// console.log(allList);
	return (
		<div className="bg-second">
			<div className="min-h-screen flex justify-center items-center">
				<div className="bg-first p-4">
					<AddItem
						handleAddItems={handleAddItems}
						setTitle={setTitle}
						titletDup={titletDup}
					/>
					<div className="mt-5">
						{allList.map((all, index) => (
							<AllItems key={index} name={all.title} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
