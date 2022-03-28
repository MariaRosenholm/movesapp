import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import Loader from './Loader';

const Search = ({ dancelist }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [searchkey, setSearchKey] = useState('');

	useEffect(() => {
		setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const searchInputHandler = (event) => {
		setSearchKey(event.target.value);
	};

	let filteredDanceMoves = dancelist.filter((dancemove) => {
		const key = searchkey.toLowerCase();
		const move = dancemove.Move.toLowerCase();
		const creator = dancemove.Creator.toLowerCase();
		return move.includes(key) || creator.includes(key);
	});

	return (
		<div className="search">
			<div className="searchWrapper">
				<input
					placeholder="search"
					onChange={searchInputHandler}
					className="searchValue" // onClick={deleteSearch}
				/>
			</div>
			{isLoading && <Loader />}
			{!isLoading && (
				<div>
					{filteredDanceMoves.map((dancemove) => (
						<ListItem
							key={dancemove.Id}
							move={dancemove.Move}
							creator={dancemove.Creator}
							Id={dancemove.Id}
							link={dancemove.Link}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
