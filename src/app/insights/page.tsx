"use client";

import { Sparkles, TrendingUp, Target, Zap, Users, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const insights = [
  {
    title: "Retention Risk Identified",
    desc: "3 Senior Engineering roles are showing high churn patterns in the Berlin region. Consider proactive salary adjustments.",
    category: "Market Trend",
    impact: "High",
    icon: TrendingUp,
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    title: "AI Sourcing Opportunity",
    desc: "LinkedIn talent pool for Product Designers in Stockholm has expanded by 22% this week. Optimized search query ready.",
    category: "Recruitment",
    impact: "Medium",
    icon: Zap,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Candidate Re-engagement",
    desc: "14 high-IQ candidates from 2024 hiring pool are now marked as 'actively looking' on external platforms.",
    category: "Talent Pool",
    impact: "High",
    icon: Target,
    color: "text-purple-600",
    bg: "bg-purple-50"
  }
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600 fill-blue-600/20" />
            <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
          </div>
          <p className="text-slate-500 mt-1">OCtavian's proactive recruitment intelligence engine.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <div key={insight.title} className="premium-card group hover:scale-[1.02] transition-all">
             <div className="flex items-center justify-between mb-6">
                <div className={cn("p-2 rounded-xl", insight.bg)}>
                   <insight.icon className={cn("w-5 h-5", insight.color)} />
                </div>
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                  insight.impact === "High" ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"
                )}>
                  {insight.impact} Impact
                </span>
             </div>
             <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{insight.title}</h3>
             <p className="text-sm text-slate-500 leading-relaxed mb-8">{insight.desc}</p>
             <button className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                Explore Strategy
                <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        ))}
      </div>

      {/* Strategic Report Section */}
      <div className="premium-card bg-slate-900 border-none p-10 text-white flex flex-col md:flex-row items-center gap-12">
         <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Quarterly Hiring Synthesis</h2>
            <p className="text-slate-400 leading-relaxed mb-8">AI-generated overview of your recruitment efficiency, diversitry metrics, and predicted growth bottlenecks for Q2 2025.</p>
            <ul className="grid grid-cols-2 gap-4">
               {[
                 "Time-to-Hire reduced by 14%",
                 "Cost-per-Candidate improved 22%",
                 "Engineering pipeline healthy",
                 "Design bottleneck predicted (May)"
               ].map(item => (
                 <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    {item}
                 </li>
               ))}
            </ul>
         </div>
         <div className="w-full md:w-1/3 bg-white/5 backdrop-blur-md p-8 rounded-[32px] border border-white/10 text-center">
            <Lightbulb className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Did you know?</h4>
            <p className="text-xs text-slate-400">Companies using OCtavian AI have seen a 40% increase in candidate quality within 3 months.</p>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl w-full shadow-lg shadow-blue-900/40">
               Generate Full Report
            </button>
         </div>
      </div>
    </div>
  );
}
