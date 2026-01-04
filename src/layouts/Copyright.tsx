import Blooming from "@/assets/Blooming";
import { cn } from "@/lib/cn";

export default function Copyright({
  ...props
}: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg {...props} width="100%" viewBox="0 0 500 200">
      {/* text */}
      <text
        x="100%"
        y="10px"
        fill="currentColor"
        fontFamily="筑紫明朝"
        fontSize="68px"
        letterSpacing="-5"
        textAnchor="end"
        dominantBaseline="hanging"
      >
        彼岸
      </text>
      <text
        x="100%"
        y="68px"
        fill="currentColor"
        fontFamily="Source Han Sans SC"
        fontWeight="bold"
        fontSize="68px"
        letterSpacing="-5"
        textAnchor="end"
        dominantBaseline="hanging"
      >
        花圃
      </text>
      <text
        x="62%"
        y="174px"
        fill="currentColor"
        fontFamily="Novecento"
        fontWeight="bold"
        fontSize="28px"
        textAnchor="start"
        dominantBaseline="auto"
      >
        EQUINOX
      </text>
      <text
        x="62%"
        y="198px"
        fill="currentColor"
        fontFamily="Novecento"
        fontWeight="bold"
        fontSize="28px"
        letterSpacing="-2"
        textAnchor="start"
        dominantBaseline="auto"
      >
        PARTERRE
      </text>
      <text
        x="62%"
        y="4px"
        fill="currentColor"
        fontFamily="Novecento"
        fontWeight="bold"
        fontSize="32px"
        letterSpacing="-2"
        textAnchor="start"
        dominantBaseline="hanging"
      >
        #42
      </text>
      {/* logo */}
      <Blooming height="110%" x="-20%" y="-5%" />
      <circle
        cx="calc(50% - 20%)"
        cy="50%"
        r="38.5%"
        stroke="currentColor"
        strokeWidth="0.25%"
        fill="none"
      />
    </svg>
  );
}
