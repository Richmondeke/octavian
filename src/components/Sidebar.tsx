"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Video, 
  FileText, 
  BarChart3, 
  Sparkles,
  Settings,
  MessageSquare,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Candidates", href: "/candidates", icon: Users },
  { name: "Interview", href: "/interview", icon: Video },
  { name: "Offers", href: "/offers", icon: FileText },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "AI Insights", href: "/insights", icon: Sparkles },
];

const secondaryNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Feedback", href: "/feedback", icon: MessageSquare },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-72 flex-col bg-white border-r border-slate-100 px-6 py-8">
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 bg-[#0070f3] rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-xl">O</span>
        </div>
        <span className="text-xl font-bold tracking-tight">OCtavian</span>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "sidebar-link",
                  isActive && "sidebar-link-active"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-[15px]">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="flex flex-col gap-1">
            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="sidebar-link"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-[15px]">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-100">
            <button className="flex items-center gap-3 px-4 text-slate-400 hover:text-slate-600 transition-colors w-full">
              <LogOut className="w-5 h-5" />
              <span className="font-medium text-[15px]">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
