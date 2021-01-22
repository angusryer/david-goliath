import React from "react";
import "./Comparison.scss";

export const Comparison = ({ selectedItem }) => {
	if (selectedItem) {
		return (
			<div className='comparison'>
				<div className='comparison__box'>
					<img
						src={selectedItem.url}
						alt={selectedItem.name}
						className='comparison__box-content'
					/>
				</div>
				<span className='comparison__text'>
					{selectedItem.name ? selectedItem.name : "Random Object Name!"}
				</span>
			</div>
		); //95A4-399E

		// EAASyQureELQBAMLT7Rqc7jLN5NWPiydtsySTxAoABZBmWB3XVbfDeYGnSHvgbgEWp7xQF1BZBTJWKX6lLxAbKOXrTUEi0zujeSSyw5w5iNJZCX6r5ZAKHcCHXIYb7JpEmRtJ2HCOEj3jrQkVdjlT1bZAoKTUb8bbaOSlY3MXFXjUClPFGvqV9
	} else {
		return (
			<div className='comparison'>
				<div className='comparison__box'></div>
				<span className='comparison__text'>
					Please select an item on the right!
				</span>
			</div>
		);
	}
};
