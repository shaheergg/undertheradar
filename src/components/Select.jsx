import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export default function Select({ options, selectedOption, setSelectedOption }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[1]);

  const filteredOptions =
    query === ""
      ? options
      : options.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selectedOption}
      onChange={(value) => setSelectedOption(value)}
      onClose={() => setQuery("")}
    >
      <div className="relative">
        <ComboboxInput
          className={clsx(
            "w-full rounded-lg uppercase font-semibold text-center  border-2 border-green bg-[#000000B2] font-orbitron py-4 pr-8 pl-4 text-2xl text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          displayValue={(person) => person?.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 p-4 border-2 rounded-md border-accent group">
          <svg
            width="19"
            height="11"
            viewBox="0 0 19 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.44043 1.05078L9.80454 9.46684L17.5712 1.05078"
              stroke="#DF01E5"
              stroke-width="2.06623"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--input-width)] z-[10000] rounded-xl border border-accent bg-accent p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {filteredOptions.map((item) => (
          <ComboboxOption
            key={item.id}
            value={item}
            className="group font-semibold flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-green font-orbitron"
          >
            {/* <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" /> */}
            <div className="text-white text-sm/6">{item.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
