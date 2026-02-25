import type { LucideIcon } from "lucide-react";

interface StatBadgeProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function StatBadge({ icon: Icon, label, value }: StatBadgeProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-primary" />
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}
