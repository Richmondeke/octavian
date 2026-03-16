"use client";

import { Search, Bell, Plus, Filter, MoreHorizontal, Users, Calendar, Video, ArrowUpRight, ArrowDownRight, Clock, BarChart } from "lucide-react";
import StatCard from "@/components/StatCard";
import RecruitmentChart from "@/components/RecruitmentChart";

const topCandidates = [
  { name: "Alex Dom Bringer", role: "Frontend Developer", score: "66.2%", rank: 1, image: "https://i.pravatar.cc/150?u=alex" },
  { name: "Sarah Jenkins", role: "UI Designer", score: "62.4%", rank: 2, image: "https://i.pravatar.cc/150?u=sarah" },
  { name: "Kevin Liu", role: "Backend Lead", score: "58.8%", rank: 3, image: "https://i.pravatar.cc/150?u=kevin" },
];

const upcomingInterviews = [
  { name: "Meet with John Miller", time: "8:30am to 9:00am", status: "active" },
  { name: "Technical Interview with Lara", time: "10:00am to 11:30am", status: "upcoming" },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alea 👋</h1>
          <p className="text-slate-500 mt-1 text-[15px]">Ask anything, share your thoughts, or let's uncover insights together.</p>
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
          <button className="p-2.5 bg-white border border-slate-100 rounded-2xl text-slate-500 hover:text-slate-700">
            <Calendar className="w-5 h-5" />
          </button>
          <button className="p-2.5 bg-white border border-slate-100 rounded-2xl text-slate-500 hover:text-slate-700">
            <Bell className="w-5 h-5" />
          </button>
          <button className="btn-primary">
            <Plus className="w-5 h-5" />
            Create new jobs
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Stats & Candidates */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="premium-card bg-blue-50/50 border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                <Plus className="w-3 h-3" /> AI Insights
              </span>
            </div>
            <h3 className="text-xl font-bold mb-6">Top 3 candidates likely to convert this week</h3>
            <div className="flex flex-col gap-4">
              {topCandidates.map((c) => (
                <div key={c.rank} className="flex items-center justify-between bg-white p-4 rounded-2xl border border-blue-100/50">
                  <div className="flex items-center gap-3">
                    <img src={c.image} alt={c.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-sm">{c.name}</p>
                      <p className="text-xs text-slate-500">{c.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-sm text-blue-600">{c.score}</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-[10px] font-bold flex items-center justify-center text-slate-400">{c.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold">Upcoming Interviews</h3>
              <button className="text-slate-400">...</button>
            </div>
            <div className="flex flex-col gap-4">
              {upcomingInterviews.map((i, idx) => (
                <div key={idx} className="flex flex-col gap-1 pl-4 border-l-2 border-blue-500">
                  <p className="font-bold text-sm">{i.name}</p>
                  <p className="text-xs text-slate-500">{i.time}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                      <Video className="w-3 h-3 text-blue-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Charts & Big Stats */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            <StatCard label="Active jobs" value="32" change="+3%" isPositive={true} trend="this month" />
            <StatCard label="Candidates in pipeline" value="232" change="-13.3%" isPositive={false} trend="this month" />
            <StatCard label="Interviewed this week" value="35" change="+3%" isPositive={true} trend="this month" />
          </div>

          <div className="premium-card flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-slate-400" />
                <h3 className="font-bold">Recruitment Progress</h3>
              </div>
              <button className="text-slate-400">...</button>
            </div>
            <RecruitmentChart />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="premium-card">
              <h3 className="font-bold mb-4">Recruitment Status</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-slate-500">Screened</p>
                    <p className="text-2xl font-bold">84</p>
                    <p className="text-[10px] text-green-600">+3% <span className="text-slate-400">this month</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Interviewed</p>
                    <p className="text-2xl font-bold">48</p>
                  </div>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-blue-600 w-[60%]" />
                  <div className="h-full bg-blue-300 w-[20%]" />
                  <div className="h-full bg-blue-100 w-[20%]" />
                </div>
              </div>
            </div>

            <div className="premium-card">
              <h3 className="font-bold mb-4">Recent activity</h3>
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold">AI shortlisted 12 new resumes</p>
                    <p className="text-xs text-slate-500">4 top candidates for #UI-Designer-Remote role.</p>
                    <p className="text-[10px] text-slate-400 mt-1">2h ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold">Interview scheduled with Kevin</p>
                    <p className="text-xs text-slate-500">Technical assessment for Lead Backend.</p>
                    <p className="text-[10px] text-slate-400 mt-1">4h ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
