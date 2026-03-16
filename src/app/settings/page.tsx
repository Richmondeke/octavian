"use client";

import { User, Bell, Shield, Palette, Globe, Mail, Save, UserPlus, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "General", icon: User },
  { name: "Notifications", icon: Bell },
  { name: "Security", icon: Shield },
  { name: "Branding", icon: Palette },
  { name: "Team", icon: UserPlus },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-slate-500 mt-1">Configure your OCtavian account and workspace preferences.</p>
      </div>

      <div className="grid grid-cols-12 gap-8 divide-x divide-slate-100">
        {/* Navigation Sidebar */}
        <div className="col-span-3 flex flex-col gap-1 pr-6">
           {tabs.map(tab => (
             <button key={tab.name} className={cn(
               "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm",
               tab.name === "General" ? "bg-white shadow-sm border border-slate-100 text-blue-600" : "text-slate-400 hover:text-slate-600"
             )}>
                <tab.icon className="w-5 h-5" />
                {tab.name}
             </button>
           ))}
        </div>

        {/* Settings Content */}
        <div className="col-span-9 flex flex-col gap-8 pl-10">
           {/* Profile Section */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                 <h3 className="text-xl font-bold">Workspace Profile</h3>
                 <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl shadow-lg border-2 border-white transition-all hover:bg-blue-700">
                    <Save className="w-4 h-4 inline mr-2" />
                    Save Changes
                 </button>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col gap-8 text-sm">
                 <div className="flex items-center gap-8">
                    <div className="w-24 h-24 bg-slate-50 rounded-[32px] border border-slate-100 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                       <span className="text-blue-600 font-bold text-4xl">O</span>
                       <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Palette className="w-6 h-6 text-white" />
                       </div>
                    </div>
                    <div className="flex-1">
                       <h4 className="font-bold text-lg mb-1">Company Logo</h4>
                       <p className="text-slate-500 mb-4">Upload a high-resolution logo for your OCtavian workspace.</p>
                       <div className="flex gap-4">
                          <button className="px-4 py-2 border border-slate-100 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors">Upload New</button>
                          <button className="px-4 py-2 text-red-500 font-bold text-xs hover:bg-red-50 rounded-lg transition-colors">Remove</button>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                       <label className="font-bold text-slate-700">Workspace Name</label>
                       <input 
                         type="text" 
                         defaultValue="OCtavian HQ" 
                         className="px-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                       />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="font-bold text-slate-700">Support Email</label>
                       <input 
                         type="email" 
                         defaultValue="support@octavian.hr" 
                         className="px-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                       />
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700">AI Personality Alignment</label>
                    <select className="px-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer">
                       <option>Professional & Rigorous (Default)</option>
                       <option>Casual & Friendly</option>
                       <option>Direct & Efficient</option>
                    </select>
                 </div>
              </div>
           </div>

           {/* Danger Zone */}
           <div className="p-8 bg-red-50 rounded-[32px] border border-red-100 flex items-center justify-between">
              <div>
                 <h4 className="font-bold text-red-900">Archive Workspace</h4>
                 <p className="text-sm text-red-600/70">Careful, this action cannot be undone. All data will be permanently hidden.</p>
              </div>
              <button className="px-6 py-2 bg-white text-red-600 font-bold rounded-xl shadow-sm border border-red-100 hover:bg-red-600 hover:text-white transition-all">
                 Archive
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
