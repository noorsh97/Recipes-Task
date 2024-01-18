interface IProps {
  image: string;
  title: string;
  onSelect?: (event) => void;
  isSelected: boolean;
}

export default function FoodTypeButton({
  image,
  title,
  isSelected,
  onSelect,
}: IProps) {
  return (
    <>
      <div
        onClick={onSelect}
        className={`ml-5 lg:ml-0 w-20 min-w-20 *:whitespace-nowrap border-b
                 ${isSelected ? "border-gray-700" : "border-white"} flex
                 hover:border-gray-700 
                 cursor-pointer hover:opacity-75 
                 justify-center items-center flex-col 
                 pb-1 transition-all duration-200`}
      >
        <img className="h-10 max-w-10" src={image} />
        <p className="text-sm font-light pt-2">{title}</p>
      </div>
    </>
  );
}
