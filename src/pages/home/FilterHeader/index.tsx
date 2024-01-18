import { motion } from "framer-motion";
import { useEffect } from "react";

import { Filters } from "src/types";
import { types, cuisines, diet, typeImage } from "src/constants";
import { _assets } from "src/asstes";

import FoodTypeButton from "./FoodTypeButton";
import OptionSelector from "./OptionSelector";
import SearchBar from "./SearchBar";

type IProps = {
  filters: Filters;
  setFilters: (name: keyof Filters, value: string) => void;
  results: number;
  isSticky: boolean;
};

const Seperator = () => {
  return <div className="flex">
    <div className="bg-gray-200 h-12 w-[0.25px] hidden lg:block self-center"></div>
  </div>;
};

const FilterHeader = ({
  filters,
  setFilters,
  results,
  isSticky
}: IProps) => {
  const typesOptions = () => {
    return types?.map((type) => {
      return {
        value: type,
        label: type,
      };
    });
  };
  const cuisinesOptions = () => {
    return cuisines?.map((cuisine) => {
      return {
        value: cuisine,
        label: cuisine,
      };
    });
  };
  const dietOptions = () => {
    return diet?.map((value) => {
      return {
        value: value,
        label: value,
      };
    });
  };

  useEffect(() => {
    console.log("IS", isSticky);
  }, [isSticky]);

  return (
    <motion.div
      animate={{
        paddingBottom: isSticky ? "2rem" : "1rem",
      }}
      className="fixed top-0 z-50 border-b bg-white w-full"
    >
      <div className="container mx-auto pt-5 lg:pt-10  bg-white flex flex-col lg:flex-row items-start md:items-center px-2 gap-2">
        <div className=" flex justify-between">
          <img className="h-6 w-auto" src={_assets.logo.light} />
        </div>
        <motion.div
          animate={{
            paddingBottom: isSticky ? "2rem" : "1rem",
          }}
          className="flex flex-col flex-grow w-full pb-10 border-b justify-center items-center "
        >
          <motion.div
            className={`border-2 flex overflow-hidden flex-col lg:flex-row rounded-xl w-full lg:w-2/3 items-center transition-all duration-300`}
          >
            <div className="flex flex-row lg:flex-row flex-grow w-full gap-2">
              <div className="flex-grow">
                <SearchBar
                  isSticky={isSticky}
                  value={filters.query}
                  onChange={({ target: { value } }) => {
                    setFilters("query", value);
                  }}
                />
              </div>
              <Seperator />

              <OptionSelector
                isSticky={isSticky}
                onClear={() => setFilters("cuisine", "")}
                options={cuisinesOptions()}
                placeholder="International"
                value={filters.cuisine}
                onSelect={(e) => setFilters("cuisine", e)}
                category={"Cuisine"}
              />

              <Seperator />

              <OptionSelector
                isSticky={isSticky}
                onClear={() => setFilters("diet", "")}
                options={dietOptions()}
                placeholder="Any"
                value={filters.diet}
                onSelect={(e) => setFilters("diet", e)}
                category={"diet"}
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="text-start md:text-end">
          <div className="font-medium">{` ${results} search results`}</div>
          <div
            className="text-sm lg:self-end underline cursor-pointer"
            onClick={() => {
              setFilters("diet", "");
              setFilters("cuisine", "");
              setFilters("type", "");
              setFilters("query", "");
            }}
          >
            Clear Filters
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          paddingTop: isSticky ? "2rem" : "1.5rem",
        }}
        className="flex flex-row lg:container lg:mx-auto items-center justify-between overflow-y-auto"
      >
        {typesOptions().map((option, i) => {
          return (
            <FoodTypeButton
              key={option.value + i}
              isSelected={filters.type == option.value}
              onSelect={() => {
                setFilters(
                  "type",
                  filters.type == option.value ? "" : option.value
                );
              }}
              title={option.label}
              image={typeImage?.[option.label]}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default FilterHeader;
