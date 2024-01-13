import { useEffect, useState } from "react";
import Cards from "./subComponents/Cards";

const api = "https://api.github.com/users/edmar-afk";
function MultipleReturnFetchData() {
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await fetch(api);
				const user = await response.json();
				if (!response.ok) {
					setError(true);
				}
				console.log(response);
				console.log(user);
				setProfile(user);
			} catch (error) {
				setError(true);
				console.log(error);
			}
			setLoading(false);
		};
		fetchProfile();
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>There was an error...</h1>;
	}

	const { login, avatar_url, bio, link, id } = profile;
	return (
		<>
			<div className="text-center">
				<h2 className="text-center text-6xl mt-12">Multiple Returns - Fetch Data</h2>
				<Cards
					login={login}
					avatar_url={avatar_url}
					bio={bio}
					link={link}
					id={id}
				/>
			</div>
		</>
	);
}

export default MultipleReturnFetchData;
