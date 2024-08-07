import React from "react";
import InputMask from "react-input-mask";

const CreditCardInput = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <InputMask mask={"9999 9999 9999 9999"} onChange={onChange}>
      {(inputProps) => (
        <input
          className="px-4 py-2 font-semibold text-[27px] bg-black border-2 outline-none w-full md:w-[60%] rounded-xl border-green text-green"
          {...inputProps}
        />
      )}
    </InputMask>
  );
};

export default CreditCardInput;
