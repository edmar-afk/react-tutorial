import { useState } from "react";
function UseStateGatcha() {
	const [value, setValue] = useState(0);

	const btnCount = () => {
		setValue((currentState) => {
			const newState = currentState + 1;
			console.log(currentState);
			return newState;
		});
	};
	return (
		<>
			<div className="text-center">
				<h1 className="text-7xl font-bold mt-12 mb-12">useState Gatcha</h1>
				<p className="text-5xl font-bold">{value}</p>
				<button
					onClick={btnCount}
					className="bg-green-700 p-4 rounded-xl text-white mt-6 text-xl">
					Increase
				</button>
			</div>
		</>
	);
}

export default UseStateGatcha;
