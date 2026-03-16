"use client";

import { Search, Filter, MoreHorizontal, User, Star, MapPin, CheckCircle2, ChevronRight, Mail, Phone, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const candidates = [
  {
    id: 1,
    name: "Alex Dom Bringer",
    role: "Senior Graphic Illustrator",
    experience: "8 years",
    location: "Stockholm, Sweden",
    status: "Shortlisted",
    aiScore: 94.2,
    avatar: "https://i.pravatar.cc/150?u=1",
    tags: ["Illustrator", "Branding", "UI Design"]
  },
  {
    id: 2,
    name: "Jeremy Miller Voke",
    role: "Frontend Developer",
    experience: "5 years",
    location: "Berlin, Germany",
    status: "Interviewing",
    aiScore: 88.9,
    avatar: "https://i.pravatar.cc/150?u=2",
    tags: ["React", "Next.js", "Tailwind"]
  },
  {
    id: 3,
    name: "Launa Fernandez",
    role: "UX/UI Designer",
    experience: "6 years",
    location: "Madrid, Spain",
    status: "New Applied",
    aiScore: 71.5,
    avatar: "https://i.pravatar.cc/150?u=3",
    tags: ["Figma", "Research", "Accessibility"]
  },
  {
    id: 4,
    name: "Marcus Aurelius",
    role: "Fullstack Engineer",
    experience: "12 years",
    location: "Rome, Italy",
    status: "Rejected",
    aiScore: 45.2,
    avatar: "https://i.pravatar.cc/150?u=4",
    tags: ["Python", "Node.js", "Docker"]
  }
];

export default function CandidatesPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Candidates</h1>
          <p className="text-slate-500 mt-1">Review applicant profiles and AI-ranked suitability for your open roles.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-100 rounded-xl text-sm font-bold bg-white shadow-sm hover:shadow-md transition-all">
            <Download className="w-4 h-4" />
            Export List
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search candidates..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all w-64"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Candidate List */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">All Candidates</h3>
            <div className="flex gap-2">
               <button className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-xs font-bold text-blue-600 shadow-sm">All</button>
               <button className="px-3 py-1 text-xs font-bold text-slate-400">Shortlisted</button>
               <button className="px-3 py-1 text-xs font-bold text-slate-400">Rejected</button>
            </div>
          </div>

          {candidates.map((c) => (
            <div key={c.id} className="premium-card group hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex gap-6">
                   <div className="relative">
                      <img src={c.avatar} alt={c.name} className="w-16 h-16 rounded-2xl object-cover" />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                         <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                   </div>
                   <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">{c.name}</h4>
                      <p className="text-slate-500 text-sm font-medium">{c.role}</p>
                      <div className="flex items-center gap-4 mt-2">
                         <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-widest">
                            <MapPin className="w-3.5 h-3.5" />
                            {c.location}
                         </div>
                         <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-widest">
                            <Clock className="w-3.5 h-3.5" />
                            {c.experience}
                         </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        {c.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
                
                <div className="flex flex-col items-end gap-4">
                   <div className="flex flex-col items-end">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Match Score</span>
                      <span className={cn(
                        "text-xl font-bold",
                        c.aiScore > 80 ? "text-blue-600" : c.aiScore > 60 ? "text-green-600" : "text-slate-400"
                      )}>{c.aiScore}%</span>
                   </div>
                   <span className={cn(
                     "px-4 py-1.5 rounded-xl text-xs font-bold",
                     c.status === "Shortlisted" ? "bg-blue-50 text-blue-600" : 
                     c.status === "Interviewing" ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-400"
                   )}>
                     {c.status}
                   </span>
                   <button className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs mt-2 transition-colors">
                      View Profile
                      <ChevronRight className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Actions Sidebar */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
           <div className="premium-card bg-blue-600 text-white border-blue-600">
              <h3 className="font-bold text-lg mb-2">AI Ranking Summary</h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-6">Our AI has analyzed 128 new candidates today. 14 show exceptional cultural and technical alignment.</p>
              <div className="flex flex-col gap-4">
                 <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Top Pick</p>
                    <p className="font-bold mt-1">Alex Dom Bringer</p>
                    <p className="text-xs text-blue-100">Senior Graphic Illustrator</p>
                 </div>
                 <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg border-2 border-white transition-all hover:bg-blue-50">
                    Schedule All Top Picks
                 </button>
              </div>
           </div>

           <div className="premium-card">
              <h3 className="font-bold mb-4">Quick Filters</h3>
              <div className="flex flex-col gap-3">
                 {[
                   { label: "High IQ Score (>90%)", count: 12 },
                   { label: "Available Now", count: 8 },
                   { label: "Masters Degree", count: 45 },
                   { label: "Former Big Tech", count: 4 },
                 ].map(f => (
                   <div key={f.label} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer transition-all">
                      <span className="text-xs font-bold text-slate-600">{f.label}</span>
                      <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 bg-slate-100/50 rounded-full">{f.count}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
