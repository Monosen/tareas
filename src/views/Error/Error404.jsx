import React from "react";
import { Link } from "react-router-dom";

//Icons
import { CgSmileSad, CgArrowLeft } from "react-icons/cg";

const Error404 = () => {
	return (
		<main className="flex flex-col items-center justify-center w-full min-h-screen text-gray text-center">
			<CgSmileSad className="w-52 h-52 " />
			<h1 className="text-7xl my-5">404</h1>
			<p className="text-4xl mb-3">page not found</p>
			<Link to={"/"}>
				<CgArrowLeft className="w-10 h-10" />
			</Link>
		</main>
	);
};

export default Error404;
