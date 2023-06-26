import React from "react";

type Props = {
  data?: string[];
  text?: string;
};

export const FilterSongs = ({ data, text }: Props) => {
  console.log(data);
  return (
    <div>
      <select name="filtersongs">
        {data &&
          data.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
};
