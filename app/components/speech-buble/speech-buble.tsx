import clsx from "clsx";

interface SpeechBubbleProps {
  children: React.ReactNode;
  arrow?: "left" | "center" | "right";
}

export default function SpeechBubble({
  children,
  arrow = "center",
}: SpeechBubbleProps) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="inline-flex items-center gap-2 rounded-lg bg-white">
        <div className="rounded-lg bg-white px-3 py-2 text-sm font-semibold">
          {children}
        </div>
      </div>

      <div
        className={clsx(
          "absolute -bottom-1 h-4 w-4 rotate-45 bg-white",
          arrow === "left" && "left-4",
          arrow === "center" && "left-1/2 -translate-x-1/2",
          arrow === "right" && "right-4"
        )}
      />
    </div>
  );
}
