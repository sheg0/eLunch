import TableHeader from "./TableHeader";

const MealListTableHeader = () => {
  return (
    <TableHeader
      headers={[
        "Gericht",
        "Kategorie",
        "Schwierigkeit",
        "Zeitaufwand (in min)",
        "Kosten pro Person (in €)",
        "",
      ]}
    />
  );
};

export default MealListTableHeader;
