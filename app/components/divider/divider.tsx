interface DividerProps {
  type?: "full" | "partial";
}

export default function Divider({ type = "full" }: DividerProps) {
  const widthClass = type === "full" ? "w-full" : "w-1/2";

  return (
    <div className={`${widthClass} border-t border-white`} />
  );
}
