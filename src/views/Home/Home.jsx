import React, { useState, useEffect } from "react";
import { Title } from "../../components/Custom/Title/Title";

//Components
import AddItem from "../../components/Home/AddItem";
import AllItems from "../../components/Home/AllItems";

//Styles
import "./Home.styles.css";

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
		setTitle("");
	};

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("AllItems"))) {
			setAllList(JSON.parse(localStorage.getItem("AllItems")));
		} else {
			setAllList(localStorage.setItem("AllItems", JSON.stringify([])));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("AllItems", JSON.stringify(allList));
	}, [allList]);

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

	return (
		<main className="bg-box min-h-screen flex pt-28 items-center flex-col">
			<Title data={"To Do"} />
			<div className="container px-5 mx-auto mt-5 w-full max-w-prose">
				<header className="bg-first px-2 py-2 rounded-lg glassmorphism">
					<AddItem
						handleAddItems={handleAddItems}
						setTitle={setTitle}
						titletDup={titletDup}
						title={title}
					/>
				</header>

				<main className="bg-first mt-5 rounded-lg overflow-hidden glassmorphism ">
					<section className="overflow-auto max-h-80 scrollbar">
						{option === 0 && allList?.length > 0
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
							: option === 1 && allList?.length > 0
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
							: option === 2 && allList?.length > 0
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
							  allList?.length > 0 &&
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
					</section>

					<div className="grid grid-cols-2 border-white border-t-2 font-josefin gap-x-2 text-sm">
						<button onClick={handleAll} className="p-4 text-white uppercase">
							All
						</button>
						<button
							onClick={handleComplete}
							className="p-4 text-white uppercase"
						>
							Complete
						</button>
						<button
							onClick={handleIncomplete}
							className="p-4 text-white uppercase"
						>
							Incomplete
						</button>
						<button
							onClick={handleRecycle}
							className="p-4 text-white uppercase"
						>
							Recycle Bin
						</button>
					</div>
				</main>
			</div>
		</main>
	);
};

export default Home;
