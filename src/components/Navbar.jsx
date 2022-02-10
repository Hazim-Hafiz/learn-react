import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import {motion} from 'framer-motion';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <motion.h1
      initial={{ y: -200}}
      animate={{ y:0 }}
      transition={{ delay:0.1 }}
      >List of Books</motion.h1>
      <motion.p
      initial={{ x: -2000}}
      animate={{ x:0 }}
      transition={{ delay:0.2 }}
      >Currently you have {books.length} books.</motion.p>
    </div>
  );
};

export default Navbar;
