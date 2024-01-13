/* eslint-disable react/prop-types */
function Modal(props) {
	const { submit, close, productName, price, valueName, valuePrice } = props;
	return (
		<>
			<div
				onClick={close}
				className="z-40 bg-black/70 w-full h-full absolute top-0"></div>
			<div
				id="crud-modal"
				aria-hidden="true"
				className="flex overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
				<div className="relative p-4 w-full max-w-md max-h-full">
					<div className="relative bg-white rounded-lg shadow">
						{/* <!-- Modal header --> */}
						<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
							<h3 className="text-lg font-semibold text-gray-900">Create New Product</h3>
							<button
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
								onClick={close}>
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
						{/* <!-- Modal body --> */}
						<form className="p-4 md:p-5">
							<div className="grid gap-4 mb-4 grid-cols-2">
								<div className="col-span-2">
									<label
										htmlFor="name"
										className="block mb-2 text-sm font-medium text-gray-900">
										Product Name
									</label>
									<input
										type="text"
										name="name"
										value={valueName}
										onChange={productName}
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
										placeholder="Type product name"
										required
									/>
								</div>
								<div className="col-span-2 sm:col-span-1">
									<label
										htmlFor="price"
										className="block mb-2 text-sm font-medium text-gray-900">
										Price
									</label>
									<input
										type="number"
										name="price"
										id="price"
										value={valuePrice}
										onChange={price}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400focus:ring-primary-500 focus:border-primary-500"
										placeholder="Enter Price"
										required
									/>
								</div>
								<div className="col-span-2 sm:col-span-1">
									<label
										htmlFor="category"
										className="block mb-2 text-sm font-medium text-gray-900">
										Category
									</label>
									<select
										id="category"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500">
										<option defaultValue="Book">Book</option>
										<option value="TV/Monitors">TV/Monitors</option>
										<option value="PC">PC</option>
										<option value="Laptop">Laptop</option>
										<option value="Phones">Phones</option>
									</select>
								</div>
							</div>
							<div className="flex flex-row items-center">
								<button
									type="submit"
									onClick={submit}
									className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									<svg
										className="me-1 -ms-1 w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
											clipRule="evenodd"></path>
									</svg>
									Add new product
								</button>

								<button
									type="button"
									onClick={close}
									className="text-white mx-4 inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Close
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
