import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Flame,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import StatCard from "../components/StatCard";

export default function Home() {
  return (
    <div>
      <section className="glow relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/80 via-[#11162a] to-cyan-950/40 p-7 sm:p-10 lg:p-14">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(99,102,241,.22),transparent_65%)]" />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-violet-200">
            <Sparkles size={14} />
            Your personalized AI learning path
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Build the skills to <span className="gradient-text">shape AI.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Learn AI by doing. Master concepts through short lessons, guided
            projects, and an AI tutor that meets you at your level.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              Explore courses <ArrowRight size={17} />
            </Link>
            <Link
              to="/tutor"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold hover:bg-white/10"
            >
              <Bot size={17} /> Ask AI Tutor
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <StatCard
          icon={Flame}
          label="Current streak"
          value="12 days"
          hint="Keep it going"
        />
        <StatCard
          icon={Trophy}
          label="XP earned"
          value="2,840"
          hint="+420 this week"
        />
        <StatCard
          icon={Target}
          label="Learning goal"
          value="68%"
          hint="On track"
        />
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-black">Continue learning</h2>
            <p className="mt-1 text-sm text-slate-500">
              Pick up where you left off.
            </p>
          </div>
          <Link to="/courses" className="text-sm font-bold text-violet-300">
            View all
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
