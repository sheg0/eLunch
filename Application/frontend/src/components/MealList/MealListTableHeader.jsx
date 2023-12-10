import TableHeader from "../TableHeader";

const MealListTableHeader = () => {
  return (
    <TableHeader
      headers={[
        "Gericht",
        "Kategorie",
        "Schwierigkeit",
        "Zeitaufwand",
        "Kosten pro Person",
        "",
      ]}
    />
  );
};

export default MealListTableHeader;
