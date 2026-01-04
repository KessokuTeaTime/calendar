import LunarDate from "@/components/LunarDate";
import { cn } from "@/lib/cn";
import Copyright from "./Copyright";

export default function NarrowCalendarLayout({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-[min(400px,30%)_1fr] grid-rows-[auto_1fr]",
        props.className
      )}
    >
      <LunarDate className="col-start-1 row-start-1" />
      <div className="w-full h-[50%] mt-auto col-start-1 row-start-2 flex flex-col">
        <div className="w-full grow bg-[linear-gradient(to_bottom,transparent,var(--color-theme))]" />
        <div className="w-full h-10 bg-(--color-theme)" />
        <Copyright className="w-full text-(--color-theme)" />
      </div>
    </div>
  );
}
