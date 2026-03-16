"use client";

import { CheckCircle2, ChevronRight, Search, Plus, Sparkles, Target, Zap, Layout, BarChart, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { title: "Interview Builder", desc: "Generate tailored interview questions based on job data.", icon: Layout },
  { title: "Candidate Pipeline", desc: "Visualize candidate progress through every hiring stage easily.", icon: Zap },
  { title: "Hiring Insights", desc: "Discover recruitment trends and data-driven performance analytics.", icon: BarChart },
  { title: "Resume Analyzer", desc: "Scan resumes instantly with precise, AI-driven candidate insights.", icon: FileText },
];

export default function OnboardingPage() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex">
      {/* Left Branding Side */}
      <div className="w-1/3 bg-[#0070f3] flex flex-col p-12 text-white relative overflow-hidden">
        <div className="flex items-center gap-3 mb-24 z-10">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <span className="text-xl font-bold">OCtavian</span>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-12 z-10">
           <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 w-fit">
                 <img src="https://i.pravatar.cc/150?u=1" className="w-8 h-8 rounded-full" />
                 <div>
                    <p className="text-xs font-bold text-white">Alex Dom Bringer</p>
                    <p className="text-[10px] text-white/60">Graphic Illustrator</p>
                 </div>
                 <span className="ml-4 text-xs font-bold text-blue-300">91.2%</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl w-fit -translate-x-4">
                 <img src="https://i.pravatar.cc/150?u=2" className="w-8 h-8 rounded-full" />
                 <div>
                    <p className="text-xs font-bold text-slate-900">Jeremy Miller Voke</p>
                    <p className="text-[10px] text-slate-500">Frontend Developer</p>
                 </div>
                 <span className="ml-4 text-xs font-bold text-blue-600">88.9%</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 w-fit translate-x-4">
                 <img src="https://i.pravatar.cc/150?u=3" className="w-8 h-8 rounded-full" />
                 <div>
                    <p className="text-xs font-bold text-white">Launa Fernandez</p>
                    <p className="text-[10px] text-white/60">UI Designer</p>
                 </div>
                 <span className="ml-4 text-xs font-bold text-blue-300">64.7%</span>
              </div>
           </div>

           <div>
              <h2 className="text-4xl font-bold leading-tight">Find the right candidate with AI</h2>
              <p className="text-white/60 mt-4">Let OCtavian surface your best-fit candidate first</p>
           </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Right Form Side */}
      <div className="flex-1 flex flex-col items-center justify-center p-24 bg-slate-50/30">
        <div className="max-w-2xl w-full text-center">
           <h1 className="text-4xl font-bold mb-4">Let's Start with Your Company Details</h1>
           <p className="text-slate-500 mb-16 text-lg">Provide basic information to personalize your OCtavian experience and showcase your brand.</p>

           <div className="grid grid-cols-2 gap-6 text-left mb-16">
              {features.map((f) => (
                 <div key={f.title} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                       <f.icon className="w-5 h-5 text-slate-400" />
                    </div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                 </div>
              ))}
           </div>

           <button className="w-full py-4 bg-[#0070f3] text-white font-bold rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all">
              Continue
           </button>
        </div>
      </div>
    </div>
  );
}
