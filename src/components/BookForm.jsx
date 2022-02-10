import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { motion } from "framer-motion";

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <motion.form
      initial={{ x: -2000, y: 0 }}
      animate={{ x: 0, y: 0 }}
      transition={{ delay: 0.5 }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <motion.input
        initial={{ x: 0, y: -1000 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1, delay: 0.1 }}
        type="submit"
        value="add book"
      />
    </motion.form>
  );
};

export default NewBookForm;
