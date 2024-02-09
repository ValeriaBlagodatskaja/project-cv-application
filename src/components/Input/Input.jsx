import clsx from "clsx";
import "./Input.css";

export default function Input({
  className,
  label,
  type,
  placeholder,
  value,
  setValue,
}) {
  const handleInputChange = (e) => {
    if (type === "tel") {
      const numericValue = e.target.value.replace(/[^0-9+]/g, "");
      setValue(numericValue);
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <label>
      {label}
      <br />
      <input
        type={type}
        placeholder={placeholder}
        className={clsx("input", className)}
        value={value}
        onChange={handleInputChange}
      />
    </label>
  );
}
