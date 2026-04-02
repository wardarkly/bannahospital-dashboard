import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { LucideProps, type LucideIcon as Icon } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type CardVariant = "purple" | "pink" | "light-purple" | "light-pink";

interface StatCardProps {
  mainValue: string;
  label: string;
  monthlyStats: string;
  variant?: CardVariant;
  showDetails?: boolean;
  className?: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

const variantStyles: Record<CardVariant, string> = {
  purple:
    "bg-gradient-to-br from-purple-400 via-purple-300 to-pink-200 text-white",
  pink: "bg-gradient-to-br from-pink-400 via-pink-300 to-pink-200 text-white",
  "light-purple":
    "bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50 text-purple-600",
  "light-pink":
    "bg-gradient-to-br from-pink-100 via-pink-50 to-white text-pink-600",
};

export function StatCard({
  mainValue,
  label,
  monthlyStats,
  variant = "light-purple",
  showDetails = false,
  className,
  icon
}: StatCardProps) {
  const Icon = icon;
  return (
    <Card
      className={cn(
        "hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1",
        variantStyles[variant],
        className,
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">{label}</CardTitle>
        <div className={`p-2 rounded-xl text-white ${variant}`}>
          <Icon className="w-5 h-5" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold tracking-tight">{mainValue}</p>
        <p className="text-sm mt-1 opacity-90">{label}</p>
        <p className="text-xs mt-1 opacity-75">{monthlyStats}</p>
      </CardContent>

      {showDetails && (
        <div className="flex justify-end pr-4">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              // "text-xs rounded-full",
              variant === "purple" || variant === "pink"
                ? "bg-white/20 hover:bg-white/30 text-white"
                : "bg-purple-200/50 hover:bg-purple-200/70 text-purple-700",
            )}
          >
            รายละเอียด
          </Button>
        </div>
      )}
    </Card>
  );
}
