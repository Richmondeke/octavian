"use client";

import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, MoreHorizontal, User, Users as UsersIcon, MapPin, Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const days = ["Monday 08", "Tuesday 09", "Wednesday 10"];
const timeSlots = ["08.00 am", "09.00 am", "10.00 am", "11.00 am", "12.00 pm"];

const events = [
  { 
    day: "Monday 08", 
    time: "08.00 am", 
    title: "Recruiter Workflow Optimization Call", 
    duration: "08:00 am - 08:15 am", 
    color: "bg-white border-slate-100",
    text: "text-slate-900"
  },
  { 
    day: "Monday 08", 
    time: "09.00 am", 
    title: "Onboarding Preparation Planning Meeting", 
    duration: "09:00 am - 11:30 am", 
    color: "bg-white border-slate-100",
    text: "text-slate-900",
    attendees: ["https://i.pravatar.cc/150?u=1", "https://i.pravatar.cc/150?u=2"]
  },
  { 
    day: "Tuesday 09", 
    time: "08.15 am", 
    title: "Team Performance Review Session", 
    duration: "08:15 am - 09:45 am", 
    color: "bg-blue-600",
    text: "text-white",
    attendees: ["https://i.pravatar.cc/150?u=3", "https://i.pravatar.cc/150?u=4"]
  },
  { 
    day: "Wednesday 10", 
    time: "08.00 am", 
    title: "Schedule Coordination", 
    duration: "08:00 am - 09:30 am", 
    color: "bg-white border-slate-100",
    text: "text-slate-900",
    attendees: ["https://i.pravatar.cc/150?u=5"]
  }
];

export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-8 h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Interview</h1>
          <p className="text-slate-500 mt-1 text-[15px]">Schedule, conduct, and analyze interviews with AI-powered insights.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-slate-100 p-1 rounded-xl">
             <button className="px-4 py-1.5 text-xs font-bold text-slate-500">Daily</button>
             <button className="px-4 py-1.5 text-xs font-bold bg-white rounded-lg shadow-sm">Weekly</button>
             <button className="px-4 py-1.5 text-xs font-bold text-slate-500">Monthly</button>
          </div>
          <button className="btn-primary">
            <Plus className="w-5 h-5" />
            New Meeting
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        {/* Left Sidebar - Calendars */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 overflow-y-auto pr-2">
          <div className="premium-card">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                   <CalendarIcon className="w-5 h-5 text-slate-400" />
                   <span className="font-bold text-sm">All Calendar</span>
                </div>
                <button className="text-slate-400"><ChevronRight className="w-4 h-4 rotate-90" /></button>
             </div>
             
             <div className="flex items-center justify-between mb-4">
                <span className="font-bold">January 2025</span>
                <div className="flex gap-2">
                   <button className="p-1 hover:bg-slate-50 rounded-md"><ChevronLeft className="w-4 h-4" /></button>
                   <button className="p-1 hover:bg-slate-50 rounded-md"><ChevronRight className="w-4 h-4" /></button>
                </div>
             </div>

             <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 mb-2">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
             </div>
             <div className="grid grid-cols-7 gap-1 text-center">
                {Array.from({ length: 31 }, (_, i) => (
                   <button key={i} className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium",
                      i + 1 === 8 ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "hover:bg-slate-50 text-slate-600"
                   )}>
                      {i + 1}
                   </button>
                ))}
             </div>
          </div>

          <div className="premium-card">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold">Event Type</h3>
                <button className="text-slate-400">...</button>
             </div>
             <div className="flex flex-col gap-4">
                {[
                   { label: "Meeting Today's", color: "bg-blue-500", active: true },
                   { label: "Workshop Tomorrow's", color: "bg-green-500", active: true },
                   { label: "Team Building", color: "bg-blue-300", active: false },
                ].map((t) => (
                   <div key={t.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <div className={cn("w-2 h-2 rounded-full", t.color)} />
                         <span className="text-xs font-medium text-slate-600">{t.label}</span>
                      </div>
                      <div className={cn(
                         "w-8 h-4 rounded-full relative transition-colors",
                         t.active ? "bg-green-500" : "bg-slate-200"
                      )}>
                         <div className={cn(
                            "absolute top-1 w-2 h-2 rounded-full bg-white transition-all",
                            t.active ? "right-1" : "left-1"
                         )} />
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>

        {/* Main Calendar View */}
        <div className="col-span-12 lg:col-span-9 premium-card flex flex-col p-0 overflow-hidden">
           <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <h2 className="text-xl font-bold">January 2025</h2>
                 <div className="flex gap-2">
                   <button className="p-1 hover:bg-slate-50 rounded-md border border-slate-100"><ChevronLeft className="w-4 h-4" /></button>
                   <button className="p-1 hover:bg-slate-50 rounded-md border border-slate-100"><ChevronRight className="w-4 h-4" /></button>
                 </div>
              </div>
           </div>

           <div className="flex-1 overflow-auto">
              <table className="w-full border-collapse">
                 <thead>
                    <tr>
                       <th className="w-24 p-4 border-r border-b border-slate-100"></th>
                       {days.map(day => (
                          <th key={day} className="p-4 border-r border-b border-slate-100 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">
                             {day}
                          </th>
                       ))}
                    </tr>
                 </thead>
                 <tbody>
                    {timeSlots.map(slot => (
                       <tr key={slot}>
                          <td className="p-4 border-r border-b border-slate-100 text-[10px] font-bold text-slate-400 align-top">
                             {slot}
                          </td>
                          {days.map(day => {
                             const event = events.find(e => e.day === day && e.time === slot);
                             return (
                                <td key={`${day}-${slot}`} className="p-4 border-r border-b border-slate-100 align-top">
                                   {event && (
                                      <div className={cn(
                                         "p-4 rounded-2xl border flex flex-col gap-2 shadow-sm transition-all hover:shadow-md h-full",
                                         event.color,
                                         event.text
                                      )}>
                                         <p className="text-xs font-bold leading-tight">{event.title}</p>
                                         <p className="text-[10px] opacity-60">{event.duration}</p>
                                         {event.attendees && (
                                            <div className="flex -space-x-2 mt-2">
                                               {event.attendees.map((a, i) => (
                                                  <img key={i} src={a} alt="user" className="w-6 h-6 rounded-full border-2 border-white" />
                                               ))}
                                               <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center">
                                                  <UsersIcon className="w-3 h-3 text-slate-400" />
                                               </div>
                                            </div>
                                         )}
                                      </div>
                                   )}
                                </td>
                             );
                          })}
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    </div>
  );
}
