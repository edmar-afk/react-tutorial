import { useState } from "react";
function ObjectState() {
	const [person, setPerson] = useState({
		name: "Edmar Jay",
		age: 26,
		lastName: "Heolin",
	});

	const displayPerson = () => {
		setPerson({
			...person, name: "Jessiel Jane",
		});
	};

	const { name, age, lastName } = person;
	return (
		<>
			<div className="text-center text-5xl mt-24">
				<p>Name: {name}</p>
				<p className="my-8">Age: {age}</p>
				<p>Last name: {lastName}</p>
				<button
					type="button"
					onClick={displayPerson}
					className="text-2xl bg-green-600 p-4 rounded-xl text-white mt-12">
					Show Jane
				</button>
			</div>
		</>
	);
}

export default ObjectState;
