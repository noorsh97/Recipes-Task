import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

import { Filters, Recipes } from "src/types";
import { useAxios } from "src/hooks";
import Loader from "src/asstes/loader.svg";
import useScrollPosition from "src/hooks/useScrollPosition";

import FilterHeader from "./FilterHeader";
import Card from "./Card";



const Home = () => {
  const [filters, setFilters] = useState<Filters>({
    type: "",
    cuisine: "",
    diet: "",
    query: "",
  });
  const itemsPerPage = 20;
  const [offset, setOffset] = useState(0);

  const queryParams = useMemo(() => {
    let queryString = "";
    if (filters?.type) queryString += `&type=${filters?.type}`;
    if (filters?.cuisine) queryString += `&cuisine=${filters?.cuisine}`;
    if (filters?.diet) queryString += `&diet=${filters?.diet}`;
    if (filters?.query) queryString += `&query=${filters?.query}`;
    return `${queryString}&offset=${offset}&number=${itemsPerPage}`;
  }, [filters?.cuisine, filters?.diet, filters?.query, filters?.type, offset]);

  const { data, loading, error } = useAxios<Recipes>({
    url: `recipes/complexSearch?${queryParams}`,
  });

  const handleFilterChange = (filterName: keyof Filters, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
    setOffset(0);
  };

  const handlePageClick = ({ selected }: { selected: number }) => {
    setOffset((selected + 1) * itemsPerPage);
  };

  //Handling Sticky Scroll Position
  const { trigger: isSticky } = useScrollPosition();

  return (
    <div className="flex flex-col pt-[22rem] items-center min-h-full">
      {loading ? (
        <div className="h-16 w-16">
          <img src={Loader} className="w-100 h-100" />
        </div>
      ) : (
        <>
          <FilterHeader
            isSticky={isSticky}
            filters={filters}
            setFilters={handleFilterChange}
            results={data?.totalResults}
          />
          <div className="flex flex-col flex-start w-full container mx-auto">

            <div className="p-5 md:pb-20 md:px-20  content w-full flex flex-col gap-[3rem]">
              <div className=" flex flex-col gap-[1rem]">
                {data?.results && data?.results?.length > 0 ? (
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {data?.results?.map((item, index) => (
                      <Card
                        key={item?.id}
                        {...item}
                        isGuestFavorite={index % 2 === 0 && index % 5 !== 0}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="font-bold text-xl h-64 w-full flex justify-center items-center">No Results</div>
                )}
              </div>
              {error && <div className="font-boltext-xl">{error}</div>}
              {(data?.totalResults ?? 0) > itemsPerPage && (
                <ReactPaginate
                  pageCount={
                    Math.ceil((data?.totalResults ?? 0) / itemsPerPage) - 1
                  }
                  onPageChange={handlePageClick}
                  containerClassName={
                    "flex w-full justify-center items-center gap-5 flex-wrap"
                  }
                  // pageClassName={"text-white"}
                  activeClassName={
                    " p-2 rounded-full w-10 h-10 text-center font-bold"
                  }
                  breakLabel="..."
                  breakLinkClassName=""
                  previousLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="black"
                      className="bi bi-chevron-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                    </svg>
                  }
                  nextLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="black"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  }
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
