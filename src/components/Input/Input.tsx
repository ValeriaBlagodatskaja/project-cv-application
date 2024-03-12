import clsx from "clsx";
import "./Input.css";

export interface InputProps {
  className: string;
  label: string;
  type: "text" | "tel" | "email" | "month";
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({
  className,
  label,
  type,
  placeholder,
  value,
  setValue,
}: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
