import { useEffect, useState } from "react";
function UseStateTimeOut() {
	const [value, setValue] = useState(0);

	const btnCount = () => {
		setTimeout(() => {
			console.log("You clicked it!");
			setValue((currentState) => {
				console.log(currentState);
				return currentState + 1;
			});
		}, 3000);
	};

	const sayHello = () => {
		console.log("Say Hello");
	};
	sayHello();

	useEffect(() => {
		console.log('Hello From UseEffect!')
	});
	return (
		<>
			<div className="text-center">
				<h1 className="text-7xl font-bold mt-12 mb-12">useState Timeout</h1>
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

export default UseStateTimeOut;
