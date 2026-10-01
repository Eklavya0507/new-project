import {
  BookOpen,
  Flame,
  GraduationCap,
  PlayCircle,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { courses } from "../data/courses";

export default function Dashboard() {
  const activeCourses = courses.filter((course) => course.progress > 0);

  return (
    <section className="container-page py-12 sm:py-16">
      <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
        <p className="text-sm font-semibold text-blue-300">Good evening, Alex 👋</p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">Keep building momentum.</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          You are making steady progress. Spend 30 minutes today on your next lesson.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={BookOpen} label="Courses enrolled" value="4" detail="2 currently active" />
        <StatCard icon={GraduationCap} label="Lessons completed" value="37" detail="5 this week" />
        <StatCard icon={Flame} label="Learning streak" value="7 days" detail="Personal best: 12 days" />
        <StatCard icon={Trophy} label="XP earned" value="2,480" detail="320 XP to next level" />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-semibold text-blue-600">Continue</p>
              <h2 className="section-title mt-1">Your courses</h2>
            </div>
            <Link to="/courses" className="text-sm font-semibold text-blue-600">
              Browse all
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {activeCourses.map((course) => (
              <div key={course.id} className="card p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${course.color} text-white`}>
                    <PlayCircle size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="font-bold text-slate-900">{course.title}</h3>
                        <p className="mt-1 text-sm text-slate-500">{course.category}</p>
                      </div>
                      <span className="text-sm font-bold text-blue-600">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <Link to={`/courses/${course.id}`} className="btn-secondary !px-4 !py-2.5">
                    Continue
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card h-fit p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
              <Trophy size={21} />
            </div>
            <div>
              <h2 className="font-bold">Weekly goal</h2>
              <p className="text-sm text-slate-500">4 of 5 study sessions</p>
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-4/5 rounded-full bg-blue-600" />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            One more session unlocks your weekly achievement.
          </p>

          <Link to="/tutor" className="btn-primary mt-6 w-full">
            Start a study session
          </Link>
        </div>
      </div>
    </section>
  );
}
