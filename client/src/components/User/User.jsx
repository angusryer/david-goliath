import React from "react";
import "./User.scss";
import avatar from "./avatar.png";

export const User = ({ relativeHeight, actualHeight }) => {
	return (
		<div className='user'>
			<div
				className='user__box'
				style={{height: relativeHeight}}
			>
				<img src={avatar} alt='User Avatar' className="user__box-content" />
			</div>
			<span className='user__text'>{actualHeight ? `You're ${actualHeight} meters tall!` : "YOU"}</span>
		</div>
	);
};
