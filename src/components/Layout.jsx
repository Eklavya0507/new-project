import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  BookOpen,
  BrainCircuit,
  LayoutDashboard,
  Menu,
  UserCircle,
  X
} from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "AI Tutor", to: "/tutor" }
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="page-shell">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white">
              <BrainCircuit size={22} />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              Neura<span className="text-blue-600">Learn</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/profile" className="btn-secondary !px-3 !py-2">
              <UserCircle size={18} />
              Profile
            </Link>
          </div>

          <button
            className="rounded-lg p-2 text-slate-700 md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <nav className="container-page flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold ${
                      isActive ? "bg-blue-50 text-blue-700" : "text-slate-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/profile"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600"
              >
                <UserCircle size={18} />
                Profile
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container-page flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <BookOpen size={17} />
            <span>© 2026 NeuraLearn</span>
          </div>
          <span>Learn smarter. Build faster.</span>
        </div>
      </footer>
    </div>
  );
}
