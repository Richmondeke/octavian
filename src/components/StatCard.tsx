import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  change: string;
  isPositive?: boolean;
  suffix?: string;
  trend?: string;
}

export default function StatCard({ label, value, change, isPositive, trend }: StatCardProps) {
  return (
    <div className="premium-card flex flex-col gap-2">
      <span className="text-slate-500 font-medium text-sm">{label}</span>
      <div className="flex items-end justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight">{value}</span>
        </div>
        <div className={cn(
          "flex items-center gap-0.5 px-2 py-1 rounded-full text-xs font-semibold",
          isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
        )}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          <span>{change}</span>
          <span className="ml-1 text-[10px] text-slate-400 font-normal">{trend}</span>
        </div>
      </div>
    </div>
  );
}
