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
    const name = document.getElementById("name")
    name.focus()
  };
  return (
    <motion.form
      initial={{ x: -2000, y: 0 }}
      animate={{ x: 0, y: 0 }}
      transition={{ delay: 0.5 }}
      onSubmit={handleSubmit}
    >
      <input
        id="name"
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
        type="submit"
        value="add book"
      />
    </motion.form>
  );
};

export default NewBookForm;
