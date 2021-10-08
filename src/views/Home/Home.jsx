import React, { useState } from "react";

//Components
import AddItem from "../../components/Home/AddItem";
import AllItems from "../../components/Home/AllItems";

const Home = () => {
	const [title, setTitle] = useState("");
	const [allList, setAllList] = useState([]);
	const [titletDup, setTitleDup] = useState(false);

	const [option, setOption] = useState(0);

	const handleAddItems = (e) => {
		e.preventDefault();
		if (title.trim() !== "") {
			const data = allList.some((name) => {
				if (name.title === title) {
					setTitleDup(true);
					return true;
				} else {
					setTitleDup(false);
					return false;
				}
			});
			if (!data) {
				setAllList([
					...allList,
					{ title: title, status: false, recycle: false },
				]);
			}
		}
	};

	const handleAll = () => {
		setOption(0);
	};

	const handleComplete = () => {
		setOption(1);
	};

	const handleIncomplete = () => {
		setOption(2);
	};

	const handleRecycle = () => {
		setOption(3);
	};

	const handleItemsStatus = (status, name) => {
		setAllList(
			allList.map((items) => {
				if (items.title === name) {
					items.status = status;
				}
				return items;
			})
		);
	};

	const handleItemsRecycle = (status, name) => {
		setAllList(
			allList.map((items) => {
				if (items.title === name) {
					items.recycle = status;
				}
				return items;
			})
		);
	};

	const handleItemsBack = (status, name) => {
		setAllList(
			allList.map((items) => {
				if (items.title === name) {
					items.recycle = status;
				}
				return items;
			})
		);
	};

	const handleItemsDetele = (name) => {
		let count = 0;
		let result = allList.map((items, index) => {
			if (items.title === name) {
				count = index;
			}
			return items;
		});
		result.splice(count, 1);
		setAllList(result);
	};

	// console.log(allList);

	return (
		<div className="bg-second">
			<div className="min-h-screen flex pt-28 items-center flex-col">
				<div className="bg-first p-4">
					<AddItem
						handleAddItems={handleAddItems}
						setTitle={setTitle}
						titletDup={titletDup}
					/>
				</div>

				<div className="flex m-3">
					<button onClick={handleAll} className="p-4 text-white mr-4 bg-first">
						All
					</button>
					<button
						onClick={handleComplete}
						className="p-4 text-white mr-4 bg-first"
					>
						Complete
					</button>
					<button
						onClick={handleIncomplete}
						className="p-4 text-white mr-4 bg-first"
					>
						Incomplete
					</button>
					<button onClick={handleRecycle} className="p-4 text-white bg-first">
						Recycle Bin
					</button>
				</div>
				<div className="bg-first p-4 mt-5">
					<div className="mt-5 overflow-auto h-80">
						{option === 0
							? allList.map(
									(all, index) =>
										!all.recycle && (
											<AllItems
												key={index}
												name={all.title}
												handleItemsStatus={handleItemsStatus}
												recycle={all.recycle}
												handleItemsRecycle={handleItemsRecycle}
												status={all.status}
											/>
										)
							  )
							: option === 1
							? allList.map(
									(all, index) =>
										!all.recycle &&
										all.status && (
											<AllItems
												key={index}
												name={all.title}
												handleItemsStatus={handleItemsStatus}
												status={all.status}
												recycle={all.recycle}
												handleItemsRecycle={handleItemsRecycle}
											/>
										)
							  )
							: option === 2
							? allList.map(
									(all, index) =>
										!all.recycle &&
										!all.status && (
											<AllItems
												key={index}
												name={all.title}
												handleItemsStatus={handleItemsStatus}
												recycle={all.recycle}
												status={all.status}
												handleItemsRecycle={handleItemsRecycle}
											/>
										)
							  )
							: option === 3 &&
							  allList.map(
									(all, index) =>
										all.recycle && (
											<AllItems
												key={index}
												name={all.title}
												handleItemsStatus={handleItemsStatus}
												recycle={all.recycle}
												status={all.status}
												handleItemsRecycle={handleItemsRecycle}
												handleItemsBack={handleItemsBack}
												handleItemsDetele={handleItemsDetele}
											/>
										)
							  )}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
