import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  Bot, 
  Users, 
  Target, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  MoreVertical, 
  TrendingUp, 
  ArrowUpRight,
  LogOut,
  User,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";
import { useState } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// --- Mock Data ---

const chartData = [
  { name: 'Mon', users: 400 },
  { name: 'Tue', users: 600 },
  { name: 'Wed', users: 500 },
  { name: 'Thu', users: 900 },
  { name: 'Fri', users: 800 },
  { name: 'Sat', users: 1200 },
  { name: 'Sun', users: 1500 },
];

const botsData = [
  { id: 1, name: "Support Bot V1", status: "Active", users: 1240, lastActive: "2 mins ago" },
  { id: 2, name: "Lead Gen Pro", status: "Active", users: 850, lastActive: "1 hour ago" },
  { id: 3, name: "Habit Tracker AI", status: "Inactive", users: 0, lastActive: "2 days ago" },
  { id: 4, name: "Sales Closer", status: "Active", users: 420, lastActive: "15 mins ago" },
];

const usersData = [
  { id: 1, name: "Alex Rivera", email: "alex@example.com", activity: "High", joined: "Oct 12, 2025" },
  { id: 2, name: "Sarah Chen", email: "sarah@example.com", activity: "Medium", joined: "Nov 05, 2025" },
  { id: 3, name: "Marcus Thorne", email: "marcus@example.com", activity: "Low", joined: "Dec 20, 2025" },
  { id: 4, name: "Elena Gilbert", email: "elena@example.com", activity: "High", joined: "Jan 15, 2026" },
];

const leadsData = [
  { id: 1, name: "John Smith", contact: "john@techcorp.com", status: "New", date: "2026-04-12" },
  { id: 2, name: "Emma Wilson", contact: "emma@startup.io", status: "Contacted", date: "2026-04-11" },
  { id: 3, name: "David Lee", contact: "david@enterprise.com", status: "Qualified", date: "2026-04-10" },
  { id: 4, name: "Sophia Garcia", contact: "sophia@agency.net", status: "New", date: "2026-04-10" },
];

// --- Sub-components ---

const Sidebar = ({ activeTab, setActiveTab, onBackToWebsite }: { activeTab: string, setActiveTab: (tab: string) => void, onBackToWebsite: () => void }) => {
  const menuItems = [
    { id: "dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { id: "bots", icon: <Bot size={20} />, label: "Bots Management" },
    { id: "users", icon: <Users size={20} />, label: "Users" },
    { id: "leads", icon: <Target size={20} />, label: "Leads" },
    { id: "settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
          <Bot className="text-white w-6 h-6" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-slate-900">Said<span className="text-blue-600">.ai</span></span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === item.id 
                ? "bg-blue-50 text-blue-600" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
        <button
          onClick={onBackToWebsite}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all mt-4 border-t border-slate-50 pt-4"
        >
          <ArrowUpRight size={20} />
          Back to Website
        </button>
      </nav>

      <div className="p-4 border-t border-slate-50">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

const TopNav = ({ title }: { title: string }) => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-10">
      <h1 className="text-xl font-bold text-slate-900 capitalize">{title.replace("-", " ")}</h1>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64"
          />
        </div>
        
        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-slate-900">Said</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admin</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
            <img src="https://i.pravatar.cc/100?img=11" alt="Admin" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </header>
  );
};

// --- Page Views ---

const DashboardView = () => {
  const stats = [
    { label: "Total Users", value: "1,284", change: "+12.5%", icon: <Users className="text-blue-600" /> },
    { label: "Active Bots", value: "12", change: "+2", icon: <Bot className="text-emerald-600" /> },
    { label: "Leads Collected", value: "482", change: "+18.2%", icon: <Target className="text-orange-600" /> },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                {stat.change}
              </div>
            </div>
            <div className="text-slate-500 text-sm font-semibold mb-1">{stat.label}</div>
            <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-soft">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900">User Growth</h3>
            <p className="text-sm text-slate-500">Real-time performance metrics</p>
          </div>
          <button className="text-sm font-bold text-blue-600 hover:underline">View Full Report</button>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const BotsView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-slate-500">Manage your deployed AI agents and their performance.</p>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
          <Plus size={18} />
          Create New Bot
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {botsData.map((bot) => (
          <div key={bot.id} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-soft group hover:border-blue-200 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Bot size={24} />
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
                <MoreVertical size={18} />
              </button>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{bot.name}</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${bot.status === "Active" ? "bg-emerald-500" : "bg-slate-300"}`} />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{bot.status}</span>
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">• {bot.users} Users</div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <span className="text-xs text-slate-400">Last active: {bot.lastActive}</span>
              <button className="text-xs font-bold text-blue-600 hover:underline">View Analytics</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UsersView = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">User</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Activity</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Joined</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {usersData.map((user) => (
            <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{user.name}</div>
                    <div className="text-xs text-slate-400">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  user.activity === "High" ? "bg-emerald-50 text-emerald-600" : 
                  user.activity === "Medium" ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-500"
                }`}>
                  {user.activity}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-500 font-medium">{user.joined}</td>
              <td className="px-6 py-4 text-right">
                <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-all">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const LeadsView = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Lead Name</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Contact</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {leadsData.map((lead) => (
            <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 text-sm font-bold text-slate-900">{lead.name}</td>
              <td className="px-6 py-4 text-sm text-slate-500 font-medium">{lead.contact}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  {lead.status === "Qualified" ? <CheckCircle2 size={14} className="text-emerald-500" /> : 
                   lead.status === "Contacted" ? <Clock size={14} className="text-blue-500" /> : 
                   <XCircle size={14} className="text-slate-400" />}
                  <span className="text-xs font-bold text-slate-600">{lead.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-400 font-medium">{lead.date}</td>
              <td className="px-6 py-4 text-right">
                <button className="text-xs font-bold text-blue-600 hover:underline">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SettingsView = () => {
  return (
    <div className="max-w-2xl space-y-8">
      <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-soft">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Profile Information</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=11" alt="Profile" referrerPolicy="no-referrer" />
            </div>
            <button className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-all">
              Change Avatar
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
              <input type="text" defaultValue="Said" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
              <input type="email" defaultValue="said@example.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-soft">
        <h3 className="text-lg font-bold text-slate-900 mb-6">System Configuration</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
            <div>
              <div className="text-sm font-bold text-slate-900">Email Notifications</div>
              <div className="text-xs text-slate-500">Receive alerts when new leads are captured.</div>
            </div>
            <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
            <div>
              <div className="text-sm font-bold text-slate-900">Auto-Scaling</div>
              <div className="text-xs text-slate-500">Automatically scale bot resources based on load.</div>
            </div>
            <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
        <button className="mt-8 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};

// --- Main Dashboard Component ---

export default function DashboardUI({ onBackToWebsite }: { onBackToWebsite: () => void }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardView />;
      case "bots": return <BotsView />;
      case "users": return <UsersView />;
      case "leads": return <LeadsView />;
      case "settings": return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onBackToWebsite={onBackToWebsite} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav title={activeTab} />
        
        <main className="p-8 flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
