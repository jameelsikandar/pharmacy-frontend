import type { LucideIcon } from "lucide-react";

export interface IMetricCardProps {
  title: string;
  value: string | number;
  valueClassName?: string;
  Icon: LucideIcon;
  iconClassName?: string;
  subtitle: string;
  subtitleClassName?: string;
}
