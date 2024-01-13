import { useEffect, useState } from "react";
import Cards from "./subComponents/Cards";
const url = "https://api.github.com/users";
function FetchData() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const users = await response.json();
				setPeople(users);
				console.log(users);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<div className="text-center">
				<p className="text-7xl font-bold mt-12 mb-12">Fetch Data (Github API)</p>
				<p className="text-4xl font-semibold mb-8">Github Users</p>
			</div>
			<div className="flex flex-row justify-evenly flex-wrap">
				{people.map((user) => {
					return (
						<Cards
							key={user.id}
							avatar_url={user.avatar_url}
							login={user.login}
							id={user.id}
							type={user.type}
						/>
					);
				})}
			</div>
		</>
	);
}

export default FetchData;
