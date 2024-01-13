import { useState } from "react";function States() {
  

	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount(count + 1);
		console.log(count + 1);
	};

	const decreaseCount = () => {
		setCount(count - 1);
		console.log(count - 1);
  };
  
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-7xl mt-16 font-bold">UseState Basics</h1>
        <p className="text-2xl font-semibold mt-12"> You clicked it {count} times!</p>
        <p></p>
				<div className="flex flex-row">
					<button
						type="button"
						onClick={increaseCount}
						className="bg-blue-700 p-4 text-white font-semibold mt-6 rounded-xl mx-2">
						Increase Me!
					</button>

					<button
						type="button"
						onClick={decreaseCount}
						className="bg-blue-700 p-4 text-white font-semibold mt-6 rounded-xl mx-2">
						Decrease Me!
					</button>
				</div>
			</div>
		</>
	);
}

export default States;
