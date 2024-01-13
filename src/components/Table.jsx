/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Modal from "./Modal";
import { products } from "../assets/js/products";
function Table() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [modal, setModal] = useState(false);
	const [product, setProduct] = useState(products);
	const [addNotif, setAddNotif] = useState(false);
	const [deleteNotif, setDeleteNotif] = useState(false);

	const handleModalShow = () => {
		setModal(true);
	};
	const handleModalHide = () => {
		setModal(false);
	};

	const handleProductName = (e) => {
		setName(e.target.value);
	};

	const handlePrice = (e) => {
		setPrice(e.target.value);
	};

	const addProductSubmit = (e) => {
		e.preventDefault();
		const fakeId = Date.now();
		const newProduct = { id: fakeId, productName: name, price };
		const updatedUser = [...product, newProduct];
		setProduct(updatedUser);
		setModal(false);
		setAddNotif(true);
		setDeleteNotif(false);
	};

	const removeProduct = (id) => {
		const updatedUser = product.filter((items) => items.id !== id);
		setProduct(updatedUser);
		setDeleteNotif(true);
		setAddNotif(false);
	};
	return (
		<>
			<div className="flex justify-end">
				<button
					onClick={handleModalShow}
					className="mt-8 mr-4 p-2 rounded-lg text-white px-4 bg-blue-600 hover:bg-blue-800 active:scale-90 duration-150">
					Add Product
				</button>
			</div>
			{modal && (
				<Modal
					close={handleModalHide}
					submit={addProductSubmit}
					productName={handleProductName}
					price={handlePrice}
					valueName={name}
					valuePrice={price}
				/>
			)}
			<div className="relative overflow-x-auto mt-8">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3">
								Product name
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Category
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Price
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{product.map((items) => {
							const { id, productName, category, price } = items;
							return (
								<tr
									className="bg-white border-b border-gray-400"
									key={id}>
									<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{productName}</td>
									<td className="px-6 py-4">{category}</td>
									<td className="px-6 py-4">₱ {price}</td>
									<td className="px-6 py-4">
										<button className="bg-blue-700 p-1 px-3 text-white rounded-xl mx-1">Edit</button>
										<button
											onClick={() => removeProduct(id)}
											className="bg-red-700 p-1 px-3 text-white rounded-xl">
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className="mt-16">
				{addNotif && <p className="bg-green-400 p-2 text-center font-bold text-xl">Product Added!</p>}
				{deleteNotif && <p className="bg-red-400 p-2 text-center font-bold text-xl">Product Deleted!</p>}
			</div>
		</>
	);
}

export default Table;
