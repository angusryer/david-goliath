import React from "react";
import User from "../User";
import Comparison from "../Comparison";
import "./Visualization.scss";

const getAvatarHeight = (userHeight, selectedItem) => {
	if (selectedItem) {
		return selectedItem.hasOwnProperty("height")
			? userHeight / selectedItem.height * 100 + "%"
			: "min-content";
	} else {
		return "min-content";
	}
};

export const Visualization = ({ userHeight, selectedItem }) => {
	const relativeHeight = getAvatarHeight(userHeight, selectedItem);
	return (
		<div className='visual'>
			<User relativeHeight={relativeHeight} actualHeight={userHeight} />
			<Comparison selectedItem={selectedItem} />
		</div>
	);
};
