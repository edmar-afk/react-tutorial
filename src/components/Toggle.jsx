import { useState } from "react";
function Toggle() {
	const [showAlert, setShowAlert] = useState(false);

	// const setToggle = () => {
	// 	if (showAlert) {
	// 		setShowAlert(false);
	// 		return;
	// 	}
	// 	setShowAlert(true);
	// };
	return (
		<>
			<div className="flex flex-col justify-center p-6">
				<button
					onClick={() => {
						setShowAlert(!showAlert);
					}}
					className="bg-purple-600 p-3 rounded-xl text-sm my-4 w-24 text-white font-semibold mx-auto">
					Toggle Show/Hide
				</button>
				{showAlert && <p className="bg-red-200 p-2 rounded-xl text-center mx-8">Error Sample</p>}
			</div>
		</>
	);
}

export default Toggle;
