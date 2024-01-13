import { useState, useEffect } from "react";
function UseEffect() {
	const [value, setValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);

	const increaseValue = () => {
		setValue(value + 1);
	};

	const decreaseValue = () => {
		setSecondValue(secondValue - 1);
	};

	// const sayHello = () => {
	// 	console.log("Say Hello");
	// };
	// sayHello();

	useEffect(() => {
		console.log("Hello from Increase");
	}, [value]);

	useEffect(() => {
		console.log("Hello From Decrease!");
	}, [secondValue]);
	return (
		<>
			<div className="text-center">
				<h1 className="text-7xl font-bold mt-12 mb-12">useEffect</h1>
				<p className="text-5xl font-bold">{value}</p>
				<p className="text-5xl font-bold">{secondValue}</p>
				<button
					onClick={increaseValue}
					className="bg-green-700 p-4 rounded-xl text-white mt-6 text-xl">
					Increase
				</button>

				<button
					onClick={decreaseValue}
					className="bg-green-700 p-4 rounded-xl text-white mt-6 text-xl">
					Decrease
				</button>
			</div>
		</>
	);
}

export default UseEffect;
