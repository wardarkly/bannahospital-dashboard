import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

export type CardVariant = "purple" | "pink" | "light-purple" | "light-pink";

interface StatCardProps {
  mainValue: string;
  label: string;
  monthlyStats: string;
  variant?: CardVariant;
  showDetails?: boolean;
  className?: string;
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
}: StatCardProps) {
  return (
    <Card
      className={cn(
        // "relative rounded-2xl p-5 min-h-[140px] flex flex-col justify-between transition-all hover:shadow-lg",
        variantStyles[variant],
        className,
      )}
    >
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
