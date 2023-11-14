export default function InputField({ label, ...props }) {
  return (
    <>
      <label>{label}</label>
      <input key={1} {...props} />
    </>
  );
}
