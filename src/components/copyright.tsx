import EquinoxParterre from "@/assets/EquinoxParterre";
import { cn } from "@/lib/cn";

export default function Copyright({
  ...props
}: React.SVGAttributes<SVGSVGElement>) {
  return (
    <EquinoxParterre
      {...props}
      className={cn("text-(--color-theme) select-none", props.className)}
    />
  );
}
