import { motion } from "framer-motion";

interface ISearchBarProps {
  value: string;
  onChange: (v) => void;
  isSticky?: boolean;
}

export default function SearchBar({
  value,
  onChange,
  isSticky,
}: ISearchBarProps) {
  return (
    <motion.div
      animate={{
        flexDirection: !isSticky ? "row" : "column",
        alignItems: !isSticky ? "center" : "flex-start",
        justifyContent: "center",
        height: "100%",
      }}
      className="hover:bg-gray-100 pl-5  flex flex-grow transition-all duration-300 cursor-pointer"
    >
      <motion.div
        style={{
          paddingRight: !isSticky ? "0.5rem" : "0",
        }}
        className="text-sm font-bold">RECIPE</motion.div >
      <input
        className="outline-none bg-transparent w-24 focus:border-b focus:mr-5 focus:placeholder:text-gray-500 placeholder:text-black transition-all duration-300 lg:focus:w-[15vh]"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </motion.div>
  );
}
