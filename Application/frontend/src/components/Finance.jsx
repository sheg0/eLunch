export default function Finance({ finances }) {
  console.log("finance Component: ", finances);
  return (
    <div>
      {finances.map((finance, i) => (
        <p key={i++}>{finance.userInfo.userName}</p>
      ))}
    </div>
  );
}
