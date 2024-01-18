import { colors } from "src/constants";
import Select, { StylesConfig, GroupBase } from "react-select";

interface SelectOption {
  value: string;
  label: string;
}

type SingleSelectProps = {
  label: string;
  onChange: (selected: string | undefined) => void;
  isDisabled?: boolean;
  placeholder?: string;
  value: string | number | undefined | null | boolean;
  options: SelectOption[];

};

const SingleSelect = ({
  label,
  onChange,
  isDisabled = false,
  value,
  placeholder,
  options,
}: SingleSelectProps) => {

  const customStyles: StylesConfig<
    SelectOption,
    false,
    GroupBase<SelectOption>
  > = {

    option: (provided) => ({
      ...provided,
      border: 1,
      color: "#00000",

      ":hover": {
        background: "#cccccc",
      },
    }),
    control: (provided) => ({
      ...provided,
      border: `2px solid ${colors.gainsboro}`,
      boxShadow: "none",
      fontSize: '0.875rem',
      borderRadius: '0.625rem',
      height: '2.9375rem',
      padding: 5,
      paddingInlineStart: 15,
      width: "100%",
      color: colors.white,
      cursor: isDisabled ? "not-allowed" : "pointer",
      backgroundColor: isDisabled ? colors.solitude : "transparent",

      ":hover": {
        border: `2px solid ${colors.gainsboro}`,
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
      border: 0,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#F2F2F9",
      border: 0,
      color: `${colors.gray4}`,
      fontSize: '0.875rem',
      fontWeight: 600,
    }),
    container: (provided) => ({
      ...provided,
      marginBottom: 0,
      border: 2,
      borderColor: "white",
      // color: "white"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDisabled ? "darkGray" : `${colors.gray4}`,
      fontSize: '0.875rem',
      fontWeight: 600,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: isDisabled ? "darkGray" : `${colors.gray4}`,
      fontSize: '0.875rem',
      fontWeight: 600,
    }),
  };

  return (
    <div className="flex gap-2 flex-col w-full font-custom ">

      <label className="inline-block text-base font-semibold">{label}</label>
      <Select
        key={value as string ?? ""}
        styles={customStyles}
        placeholder={placeholder ?? label}
        isSearchable={true}
        onChange={(selected) => onChange(selected?.value)}
        value={options.find((opt) => opt.value === value)}
        options={options}
        isDisabled={isDisabled}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "#cccc",
          },
        })}
      />
    </div>
  );
};

export default SingleSelect;