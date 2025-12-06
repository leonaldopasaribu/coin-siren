interface ButtonProps {
  label: string;
  type?: "primary" | "secondary" | "outline" | "ghost";
  onClick?: () => void;
}

export default function Button({
  label,
  type = "primary",
  onClick,
}: ButtonProps) {
  const baseStyle =
    "font-bold rounded-lg px-6 py-1.5 transition hover:shadow-lg cursor-pointer";

  const variants = {
    primary: "bg-white text-blue-600",
    secondary: "bg-blue-600 text-white",
    outline:
      "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[type]}`}>
      {label}
    </button>
  );
}
