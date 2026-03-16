"use client";

import { MessageSquare, Heart, Star, Send, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeedbackPage() {
  return (
    <div className="flex flex-col gap-8 h-full max-w-4xl mx-auto py-12">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-[28px] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200">
           <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Your Feedback Matters</h1>
        <p className="text-slate-500 text-lg">Help us shape the future of OCtavian. Every Suggestion is analyzed by our product team.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
         <div className="premium-card p-10 flex flex-col gap-6 hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold">Feature Suggestion</h3>
            <p className="text-slate-500 text-sm">Have an idea for a new module or a workflow improvement?</p>
            <textarea 
              placeholder="Describe your idea here..." 
              className="w-full h-48 p-6 bg-slate-50/50 border border-slate-100 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm"
            />
            <button className="w-full py-4 bg-[#0070f3] text-white font-bold rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
               Submit Idea
               <Send className="w-4 h-4" />
            </button>
         </div>

         <div className="flex flex-col gap-8">
            <div className="premium-card p-8 flex flex-col gap-4">
               <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                     <Heart className="w-6 h-6 text-green-500 fill-current" />
                  </div>
                  <h4 className="font-bold text-lg">Rate Experience</h4>
               </div>
               <div className="flex justify-between items-center gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <button key={i} className="w-12 h-12 rounded-xl bg-slate-50 hover:bg-yellow-50 hover:text-yellow-500 border border-slate-100 transition-all flex items-center justify-center group">
                       <Star className="w-6 h-6 text-slate-300 group-hover:fill-current transition-all" />
                    </button>
                  ))}
               </div>
               <p className="text-xs text-slate-400 mt-2">How satisfied are you with the OCtavian platform?</p>
            </div>

            <div className="premium-card p-8 border-none bg-slate-900 text-white relative overflow-hidden">
               <ShieldCheck className="w-16 h-16 text-white/5 absolute -right-4 -bottom-4 rotate-12" />
               <h4 className="font-bold text-lg mb-2">Technical Support</h4>
               <p className="text-xs text-slate-400 mb-6 leading-relaxed">Experiencing an issue? Our technical team is available 24/7 to assist you with any platform hurdles.</p>
               <button className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
               </button>
            </div>

            <div className="premium-card p-8 flex items-center justify-between group cursor-pointer hover:border-blue-100 transition-all">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                     <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                     <p className="font-bold text-sm">Help Center</p>
                     <p className="text-[10px] text-slate-400 uppercase tracking-widest">Documentation & Guides</p>
                  </div>
               </div>
               <ArrowRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />
            </div>
         </div>
      </div>
    </div>
  );
}
