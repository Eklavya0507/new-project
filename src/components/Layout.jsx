import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Bell,
  BookOpen,
  BrainCircuit,
  Bot,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

const navigation = [
  { to: "/", label: "Home", icon: BrainCircuit },
  { to: "/courses", label: "Courses", icon: BookOpen },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/tutor", label: "AI Tutor", icon: Bot },
  { to: "/profile", label: "Profile", icon: UserRound },
];

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="grid-bg min-h-screen bg-[#080b16]">
      <aside
        className={`glass fixed inset-y-0 left-0 z-40 w-72 border-r border-white/10 p-5 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="glow grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400">
            <BrainCircuit size={22} />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight">
              Neura<span className="gradient-text">Learn</span>
            </div>
            <div className="text-[11px] text-slate-500">AI-powered learning</div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto text-slate-400 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-1">
          {navigation.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-violet-400/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 p-4">
          <Sparkles size={18} className="mb-3 text-violet-300" />
          <p className="text-sm font-bold">Learn smarter</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            Your AI tutor adapts explanations and practice to your progress.
          </p>
          <Link
            to="/tutor"
            className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-violet-300"
          >
            Try AI Tutor <span>→</span>
          </Link>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl p-3 hover:bg-white/5">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300 text-xs font-black text-slate-900">
            AR
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold">Alex Rivera</div>
            <div className="text-xs text-slate-500">Pro learner</div>
          </div>
          <Settings size={17} className="ml-auto text-slate-500" />
        </div>
      </aside>

      <div className="min-h-screen lg:pl-72">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/5 bg-[#080b16]/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-white/5 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
            <div className="font-black lg:hidden">
              Neura<span className="gradient-text">Learn</span>
            </div>
            <div className="hidden w-72 items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2 md:flex lg:w-96">
              <Search size={17} className="text-slate-500" />
              <input
                placeholder="Search courses, lessons..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-xl p-2.5 text-slate-400 hover:bg-white/5"
              aria-label="Notifications"
            >
              <Bell size={19} />
            </button>
            <Link
              to="/profile"
              className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300 text-xs font-black text-slate-900"
            >
              AR
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
          {location.pathname && children}
        </main>
      </div>
    </div>
  );
}
