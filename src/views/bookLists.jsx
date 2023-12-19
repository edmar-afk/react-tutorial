/* eslint-disable no-unused-vars */
import Book from '../components/Book'
import { books } from '../assets/js/books';

function bookLists() {
	

	const getBook = (id) => {
		const book = books.find((book) => book.id === id);
		console.log(book);
	}
	return (
		<>
			<div className="flex flex-row justify-evenly mt-12 p-12 flex-wrap">
				{books.map((book, index) => {
					const {title, sub, img, id} = book
					return (
						<Book title={title} subTitle={sub} image={img} key={id} id={id} getBook={getBook} number={index} />
					)
				})}
			</div>
		</>
	);
}

export default bookLists