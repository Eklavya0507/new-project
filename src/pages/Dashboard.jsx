import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";
import PageTitle from "../components/PageTitle";
import { courses } from "../data/courses";

export default function Dashboard() {
  return (
    <div>
      <PageTitle
        eyebrow="Your workspace"
        title="Good evening, Alex 👋"
        description="You’re making steady progress. Here’s what to focus on today."
      />

      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-violet-300">
                Weekly goal
              </div>
              <h2 className="mt-2 text-2xl font-black">
                4h 35m <span className="text-sm font-medium text-slate-500">/ 6h</span>
              </h2>
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-full border-4 border-violet-400/30 border-t-violet-400 text-xs font-black">
              76%
            </div>
          </div>

          <div className="mt-6 h-2 rounded-full bg-white/5">
            <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
          </div>

          <div className="mt-3 flex justify-between text-xs text-slate-500">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500/10">
              <Flame className="text-orange-300" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Current streak</div>
              <div className="text-2xl font-black">12 days</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            You’re 3 days away from your next streak badge.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black">In progress</h2>
            <Link to="/courses" className="text-xs font-bold text-violet-300">
              Browse more
            </Link>
          </div>

          <div className="space-y-3">
            {courses.slice(0, 3).map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="glass flex items-center gap-4 rounded-xl p-4 hover:border-white/20"
              >
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${course.color}`}
                >
                  <span className="text-xs font-black">AI</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">{course.title}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {Math.max(1, Math.round((course.lessons * course.progress) / 100))} of {course.lessons} lessons
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs font-bold">{course.progress}%</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="font-black">Recommended next</h2>
          <div className="mt-5 rounded-xl bg-white/5 p-4">
            <div className="text-xs font-bold text-cyan-300">BASED ON YOUR GOALS</div>
            <h3 className="mt-2 font-bold">Build AI Agents</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Take your prompting skills into tool-using workflows.
            </p>
            <Link
              to="/courses/agents"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-white"
            >
              View course <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
