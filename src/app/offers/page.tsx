"use client";

import { Search, Plus, Filter, FileText, CheckCircle2, Clock, XCircle, MoreHorizontal, Download, Eye, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const offers = [
  { id: 1, name: "Alex Dom Bringer", role: "Senior Graphic Illustrator", salary: "$120,000", status: "Accepted", sentDate: "Mar 12, 2025" },
  { id: 2, name: "Jeremy Miller Voke", role: "Frontend Developer", salary: "$145,000", status: "Sent", sentDate: "Mar 14, 2025" },
  { id: 3, name: "Sarah Jenkins", role: "Product Manager", salary: "$160,000", status: "Declined", sentDate: "Mar 10, 2025" },
  { id: 4, name: "David Chen", role: "Data Scientist", salary: "$155,000", status: "Pending Review", sentDate: "Mar 16, 2025" },
];

export default function OffersPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Offers & Contracts</h1>
          <p className="text-slate-500 mt-1">Manage employment offers, track approvals, and automate contract generation.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-100 rounded-xl text-sm font-bold bg-white shadow-sm hover:shadow-md transition-all">
            <Send className="w-4 h-4" />
            Send New Offer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Offers List */}
        <div className="col-span-12 lg:col-span-9 premium-card p-0 overflow-hidden">
           <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
              <h3 className="font-bold text-lg">Recent Offers</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search offers..." 
                  className="pl-10 pr-4 py-1.5 bg-slate-50 border-none rounded-lg text-xs focus:outline-none w-48"
                />
              </div>
           </div>
           
           <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Candidate</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Salary Package</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sent Date</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {offers.map((offer) => (
                  <tr key={offer.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                       <p className="font-bold text-slate-900">{offer.name}</p>
                    </td>
                    <td className="px-6 py-4">
                       <p className="text-sm font-medium text-slate-600">{offer.role}</p>
                    </td>
                    <td className="px-6 py-4">
                       <p className="text-sm font-bold text-blue-600">{offer.salary}</p>
                    </td>
                    <td className="px-6 py-4">
                       <span className={cn(
                         "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                         offer.status === "Accepted" ? "bg-green-50 text-green-600" : 
                         offer.status === "Sent" ? "bg-blue-50 text-blue-600" :
                         offer.status === "Declined" ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-500"
                       )}>
                         {offer.status}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-500">
                       {offer.sentDate}
                    </td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-100 shadow-sm"><Eye className="w-4 h-4 text-slate-400" /></button>
                          <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-100 shadow-sm"><Download className="w-4 h-4 text-slate-400" /></button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>

        {/* Templates Sidebar */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
           <div className="premium-card">
              <h4 className="font-bold mb-6">Offer Templates</h4>
              <div className="flex flex-col gap-4">
                 {[
                   { name: "Standard Full-time", use: "42 times" },
                   { name: "Contractor Agreement", use: "12 times" },
                   { name: "Executive Pack", use: "3 times" },
                 ].map(t => (
                   <div key={t.name} className="flex flex-col gap-1 p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer transition-all">
                      <span className="text-sm font-bold">{t.name}</span>
                      <span className="text-[10px] text-slate-400">Used {t.use}</span>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-100 rounded-2xl text-xs font-bold text-slate-400 hover:border-blue-200 hover:text-blue-500 transition-all">
                 + Create Template
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
