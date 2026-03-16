"use client";

import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  Monitor, 
  Layout, 
  MoreVertical,
  Clock,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Search,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const timelineEntries = [
  { time: "17:20", text: "Visual Design and Art Direction", highlight: true },
  { time: "17:24", text: "Good fit for the team and project requirements.", highlight: false },
  { time: "17:28", text: "Discussion on scalable design systems and AI-driven workflows.", highlight: false },
  { time: "17:32", text: "Candidate demonstrated deep knowledge of React and Framer Motion.", highlight: false },
];

export default function InterviewPage() {
  return (
    <div className="flex flex-col gap-8 h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Interview</h1>
          <p className="text-slate-500 mt-1 text-[15px]">Schedule, conduct, and analyze interviews with AI-powered insights.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-2xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">
            <Layout className="w-4 h-4" />
            Exit Recognition Mode
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        {/* Video Column */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 h-full">
          <div className="relative flex-1 bg-slate-900 rounded-[32px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000" 
              alt="Interview Candidate" 
              className="w-full h-full object-cover opacity-80"
            />
            
            {/* Self View */}
            <div className="absolute top-6 right-6 w-48 h-32 bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                alt="Self View" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                 <div className="bg-slate-900/50 backdrop-blur-md p-1 rounded-lg">
                    <Mic className="w-3 h-3 text-white" />
                 </div>
              </div>
            </div>

            {/* AI Floating Insight */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-4">
               <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                     <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white font-medium text-sm">AI analyzing sentiment: <span className="text-blue-400">Highly Confident</span></p>
               </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/20 backdrop-blur-2xl px-6 py-4 rounded-[32px] border border-white/10">
              <button className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <Monitor className="w-5 h-5" />
              </button>
              <button className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <VideoOff className="w-5 h-5" />
              </button>
              <button className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <Layout className="w-5 h-5" />
              </button>
              <button className="p-4 bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors">
                <PhoneOff className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="premium-card">
             <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Meeting Summary – AI Recruitment Project Update</h3>
                <div className="flex items-center gap-4 text-slate-400">
                   <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">17:56:32</span>
                   </div>
                </div>
             </div>
             <p className="text-[15px] text-slate-500 leading-relaxed mb-4">
               Today's meeting focused on refining the <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-md font-medium text-sm">AI candidate matching</span> system and improving interview automation features. The team reviewed feedback from recent test users, identifying key areas for optimization, including skill <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-md font-medium text-sm">mapping accuracy</span>.
             </p>
          </div>
        </div>

        {/* Live Summary Column */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 h-full overflow-hidden">
          <div className="premium-card flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                 <Sparkles className="w-5 h-5 text-blue-500" />
                 <h3 className="font-bold">Live Summary</h3>
              </div>
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-md animate-pulse">Summarizing...</span>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-6">
               {timelineEntries.map((entry, idx) => (
                  <div key={idx} className="relative pl-6 pb-6 border-l-2 border-slate-100 last:pb-0">
                     <div className={cn(
                        "absolute -left-[5px] top-1 w-2 h-2 rounded-full",
                        entry.highlight ? "bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]" : "bg-slate-300"
                     )} />
                     <p className="text-[10px] font-bold text-slate-400 mb-1">{entry.time}</p>
                     <div className={cn(
                        "p-4 rounded-2xl text-sm leading-relaxed",
                        entry.highlight ? "bg-blue-500 text-white font-medium shadow-lg shadow-blue-100" : "bg-slate-50 text-slate-600"
                     )}>
                        {entry.text}
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
               <button className="w-full btn-primary justify-center">
                  Copy Summary
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
