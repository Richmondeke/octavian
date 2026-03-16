"use client";

import { Search, Plus, Filter, MoreHorizontal, Briefcase, Users, Clock, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { useFirestoreCollection } from "@/hooks/useFirestoreData";

export default function JobsPage() {
  const { data: jobs, loading } = useFirestoreCollection<any>("jobs");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jobs</h1>
          <p className="text-slate-500 mt-1">Manage your active listings and find top talent with AI-driven insights.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all w-64"
            />
          </div>
          <button className="btn-primary">
            <Plus className="w-5 h-5" />
            Create Job
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: "Total Active Jobs", value: "12", trend: "+2", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "New Candidates", value: "128", trend: "+15%", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Avg. Time to Hire", value: "18d", trend: "-2d", icon: Clock, color: "text-green-600", bg: "bg-green-50" },
          { label: "AI Match Rate", value: "84%", trend: "+4%", icon: CheckCircle2, color: "text-orange-600", bg: "bg-orange-50" },
        ].map((stat) => (
          <div key={stat.label} className="premium-card p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className={cn("p-2 rounded-lg", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">{stat.trend}</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Jobs Table */}
      <div className="premium-card p-0 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold">Active Listings</h3>
          <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role & Department</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Candidates</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Vacancy IQ</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last Activity</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {jobs.map((job) => (
              <tr key={job.id} className="group hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-bold text-slate-900">{job.role}</p>
                    <p className="text-xs text-slate-500">{job.department} • {job.location}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">{job.candidates}</span>
                      <span className="text-[10px] text-slate-400">Applicants</span>
                    </div>
                    <div className="w-px h-8 bg-slate-100" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-blue-600">{job.interviews}</span>
                      <span className="text-[10px] text-slate-400">Interviews</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    job.status === "Active" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"
                  )}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden w-24">
                      <div 
                        className="h-full bg-blue-600 rounded-full" 
                        style={{ width: job.aiScore }}
                      />
                    </div>
                    <span className="text-xs font-bold text-blue-600">{job.aiScore}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-slate-500 font-medium">
                  {job.posted}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100 shadow-sm opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
