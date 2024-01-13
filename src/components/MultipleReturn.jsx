import { useEffect, useState } from "react";
function MultipleReturn() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		},3000);
	});

	if (loading) {
		return (
			<>
				<div className="text-center">
					<h2 className="text-center text-6xl mt-12">Loading...</h2>
					<button
						type="button"
						
						className="bg-green-600 p-6 rounded-xl text-2xl text-white font-semibold mt-12">
						Set to False
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="text-center">
				<p className="text-7xl font-bold mt-12 mb-12">Multiple Returns</p>
				<button
					type="button"
					
					className="bg-green-600 p-6 rounded-xl text-2xl text-white font-semibold">
					Set to True
				</button>
			</div>
		</>
	);
}

export default MultipleReturn;
