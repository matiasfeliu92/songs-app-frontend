type Props = {
  data?: string[];
};

export const FilterSongs = ({ data }: Props) => {
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
