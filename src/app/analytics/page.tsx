"use client";

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";
import { Search, Calendar, Bell, Plus, TrendingUp, Users, Target, CheckCircle2 } from "lucide-react";
import StatCard from "@/components/StatCard";

const hiresData = [
  { name: "Jan", hires: 10 },
  { name: "Feb", hires: 15 },
  { name: "Mar", hires: 12 },
  { name: "Apr", hires: 25 },
  { name: "May", hires: 35 },
  { name: "Jun", hires: 42 },
];

const matchAccuracyData = [
  { name: "Excellent Fit", value: 46, color: "#0070f3" },
  { name: "Good Fit", value: 16, color: "#3b82f6" },
  { name: "Moderate Fit", value: 36, color: "#93c5fd" },
  { name: "Poor Fit", value: 2, color: "#e2e8f0" },
];

const conversionData = [
  { name: "Applications", value: 840, color: "#e2e8f0" },
  { name: "Shortlisted by AI", value: 310, color: "#0070f3" },
  { name: "Interviewed", value: 110, color: "#3b82f6" },
  { name: "Offers Sent", value: 65, color: "#60a5fa" },
  { name: "Offers Accepted", value: 42, color: "#93c5fd" },
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hiring Analytics Dashboard</h1>
          <p className="text-slate-500 mt-1 text-[15px]">Understand your recruitment performance</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search here.." 
              className="pl-12 pr-4 py-2.5 bg-white border border-slate-100 rounded-2xl w-72 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-[15px]" 
            />
          </div>
          <button className="btn-primary">
            <Plus className="w-5 h-5" />
            New Meeting
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard label="Total Hires" value="42" change="+9%" isPositive={true} trend="this month" />
        <StatCard label="Acceptance Rate" value="7.3 days" change="-2%" isPositive={false} trend="vs last week" />
        <StatCard label="Pending Offers" value="92%" change="Stable" isPositive={true} trend="" />
        <StatCard label="AI Predicted Acceptance" value="86%" change="+4%" isPositive={true} trend="this month" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Hires Over Time */}
        <div className="col-span-12 lg:col-span-7 premium-card">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold">Hires Over Time</h3>
            </div>
            <button className="text-slate-400">...</button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={hiresData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorHires" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0070f3" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0070f3" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="hires" stroke="#0070f3" strokeWidth={3} fillOpacity={1} fill="url(#colorHires)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
             <p className="text-sm text-blue-800 leading-relaxed">
               Hiring peaked in September due to new project launches in the Design and Engineering departments.
             </p>
          </div>
        </div>

        {/* Hires by Department */}
        <div className="col-span-12 lg:col-span-5 premium-card">
           <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold">Hires by Department</h3>
            </div>
            <button className="text-slate-400">...</button>
          </div>
          <div className="flex flex-col items-center justify-center h-[300px]">
             {/* Placeholder for complex department radar/bar chart */}
             <div className="w-full flex justify-between items-end gap-2 px-4">
                {[40, 70, 45, 90, 65].map((h, i) => (
                   <div key={i} className="flex-1 bg-slate-100 rounded-t-lg relative group transition-all" style={{ height: `${h}%` }}>
                      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />
                   </div>
                ))}
             </div>
             <div className="w-full flex justify-between mt-4 px-4">
                {['D', 'E', 'M', 'S', 'O'].map((l) => <span key={l} className="text-[10px] text-slate-400 font-bold">{l}</span>)}
             </div>
          </div>
          <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
             <p className="text-sm text-slate-600">
               Design roles show the fastest hiring turnaround, while Marketing positions take longer to close.
             </p>
          </div>
        </div>

        {/* Candidate Conversion */}
        <div className="col-span-12 lg:col-span-6 premium-card">
           <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold">Candidate Conversion</h3>
            <button className="text-slate-400">...</button>
          </div>
          <div className="flex flex-col gap-6">
             {conversionData.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                   <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">{item.name}</span>
                      <span className="font-bold">{item.value}</span>
                   </div>
                   <div className="w-full h-8 bg-slate-100 rounded-lg overflow-hidden">
                      <div 
                        className="h-full transition-all duration-500" 
                        style={{ width: `${(item.value / 840) * 100}%`, backgroundColor: item.color }} 
                      />
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* AI Match Accuracy */}
        <div className="col-span-12 lg:col-span-6 premium-card">
           <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold">AI Match Accuracy Breakdown</h3>
            </div>
            <button className="text-slate-400">...</button>
          </div>
          <div className="flex items-center h-[300px]">
             <div className="w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={matchAccuracyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {matchAccuracyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
             </div>
             <div className="w-1/2 flex flex-col gap-4">
                {matchAccuracyData.map((item) => (
                   <div key={item.name} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <div className="flex flex-col">
                         <span className="text-sm font-bold">{item.value}%</span>
                         <span className="text-xs text-slate-400">{item.name}</span>
                      </div>
                   </div>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-100">
                   <p className="text-xs text-slate-400">Completed Accuracy</p>
                   <p className="text-3xl font-bold">92.67%</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
