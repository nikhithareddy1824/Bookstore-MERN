import Book from "../model/book.model.js";

/*export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}; */

export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from the database
        res.status(200).json(books); // Send the books as a JSON response
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Failed to retrieve books." });
    }
};