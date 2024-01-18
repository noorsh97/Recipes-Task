type IInputProps = {
  label: string;
  onChange: (value: string, name: string) => void;
  isDisabled?: boolean;
  placeholder?: string;
  value: string | undefined;
  name?: string;

};

const Input = ({
  label,
  onChange,
  isDisabled = false,
  value,
  placeholder,
  name,
}: IInputProps) => {
  return (
    <div className="flex gap-2 flex-col w-full">
      <label className="inline-block text-base font-semibold">{label}</label>
      <input
        className={`
        border-2
        border-gainsboro
        text-base
        rounded-[0.625rem]
        py-3
        w-full
        outline-none
        flex-shrink-0
        h-[46px]
        px-5
        font-custom
        bg-transparent
        placeholder-white
        disabled:bg-solitude
        disabled:text-gray4
        lg:text-sm
      `}
        name={name}
        list={label}
        type={"text"}
        placeholder={placeholder ? placeholder : label}
        disabled={isDisabled}
        value={value}
        onChange={(e: { target: { value: string, name: string } }) =>
          onChange(e.target.value, e.target.name)
        }
      />
    </div>
  );
};

export default Input;
