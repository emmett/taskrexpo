// Testing Git shortcut
export default function Input({ name, label }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name}>
    </div>
  );
}