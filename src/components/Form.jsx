function Form() {
	const handleFormInput = () => {
        console.log('you typed here')
    }

    const handleBtnClick = () => {
        alert('you clicked the buttton!')
	}
	
	const formSubmit = (e) => {
		e.preventDefault()
		console.log('form submitted!')
	}

	return (
		<>
			<form
				onSubmit={formSubmit}
				className="max-w-sm mx-auto mt-12">
				<div className="mb-5">
					<label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
					<input
						type="text"
						id="text"
						onChange={handleFormInput}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  placeholder-gray-400"
						placeholder="name@flowbite.com"
					/>
				</div>
				<div className="mb-5">
					<label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
					<input
						type="password"
						id="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  placeholder-gray-400"
					/>
				</div>
				<div className="flex items-start mb-5">
					<div className="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							value=""
							className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  ring-offset-gray-800 focus:ring-offset-gray-800"
							required
						/>
					</div>
					<label className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
				</div>
				<button
					type="button"
					onClick={handleBtnClick}
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					Click
				</button>

				<button
					type="submit"
					className="text-white bg-blue-700 mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					Submit
				</button>
			</form>
		</>
	);
}

export default Form;
