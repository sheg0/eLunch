const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((value, index) => (
          <th key={index}>{value}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
