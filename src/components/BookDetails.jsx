import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { motion } from "framer-motion";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <motion.div
    initial={{ x:-2000, y:0 }}
    animate={{ x: 0 }}
    transition={{delay: 0.2, stiffness: 300}}
    whileHover={{ scale: 1.09 }}
>
      <motion.button
      initial={{ x:0 , y:-500 }}
      animate={{ x: 0, y: 0 }}
      transition={{delay: 0.4}}
      className="remove" onClick={() => removeBook(book.id)}>x</motion.button>

      <motion.li
      initial={{ x: -10 }}
      animate={{ x: 0 }}
      transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 400,
      }}
      >
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </motion.li>
    </motion.div>
  );
};

export default BookDetails;
