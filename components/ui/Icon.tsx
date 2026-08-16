import {
  Ambulance,
  Beef,
  Briefcase,
  Building2,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Home,
  Leaf,
  Map,
  Plane,
  Route,
  Scissors,
  ShieldBan,
  Stethoscope,
  Syringe,
  TreePine,
  Truck,
  Waves,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

/**
 * content/*.ts-এ icon নাম স্ট্রিং হিসেবে থাকে; এখানে শুধু ব্যবহৃত আইকনগুলোই
 * ম্যাপ করা — পুরো lucide bundle টানা হয় না।
 */
const icons: Record<string, LucideIcon> = {
  Ambulance,
  Beef,
  Briefcase,
  Building2,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Home,
  Leaf,
  Map,
  Plane,
  Route,
  Scissors,
  ShieldBan,
  Stethoscope,
  Syringe,
  TreePine,
  Truck,
  Waves,
  Wrench,
};

export function Icon({
  name,
  size = 22,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Component = icons[name] ?? Leaf;
  return <Component size={size} className={className} aria-hidden="true" />;
}
