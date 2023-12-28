import TableHeader from "../TableHeader";

const MealListTableHeader = () => {
  return (
    <TableHeader
      headers={[
        "Gericht",
        "Kategorie",
        "Schwierigkeit",
        "Zeitaufwand in Minuten",
        "Kosten pro Person (€)",
        "",
      ]}
    />
  );
};

export default MealListTableHeader;
