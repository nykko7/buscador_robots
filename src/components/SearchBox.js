import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--near-black bg-light-gray"
				placeholder="Buscar Robot" 
				type="search" 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;