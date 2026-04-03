import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Link from "next/link";

export type CardVariant = "core" | "transfer" | "diagnostics" | "specialty";

interface StatCardProps {
  mainValue: string;
  label: string;
  monthlyStats: string;
  variant?: CardVariant;
  linkpath?: string;
  className?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const variantStyles: Record<CardVariant, string> = {
  core:
    "bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-50 text-sky-800",
  transfer:
    "bg-gradient-to-br from-amber-100 via-orange-50 to-rose-50 text-orange-800",
  diagnostics:
    "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-50 text-emerald-700",
  specialty:
    "bg-gradient-to-br from-violet-100 via-fuchsia-50 to-pink-50 text-violet-700",
};

export function StatCard({
  mainValue,
  label,
  monthlyStats,
  variant = "specialty",
  linkpath = "/",
  className,
  icon,
}: StatCardProps) {
  const Icon = icon;
  return (
    <Link href={linkpath} passHref>
      <Card
        className={cn(
          "hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1",
          variantStyles[variant],
          className,
        )}
      >
        <CardContent
          className={`p-6 flex justify-between items-start rounded-t`}
        >
          <div>
            <h2 className="text-6xl font-bold mb-2">{mainValue}</h2>
            <p className="text-lg font-medium mb-1">{label}</p>
            <p className="text-sm">{monthlyStats}</p>
          </div>
          <Icon className="w-20 h-20 opacity-40" />
        </CardContent>
      </Card>
    </Link>
  );
}
