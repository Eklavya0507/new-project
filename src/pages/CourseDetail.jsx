import { ArrowLeft, CheckCircle2, Clock3, PlayCircle, Star, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === courseId) ?? courses[0];

  const modules = [
    "Getting started and environment setup",
    "Core concepts and mental models",
    "Build your first practical project",
    "Advanced patterns and best practices",
    "Testing, deployment, and next steps"
  ];

  return (
    <section className="container-page py-10 sm:py-14">
      <Link
        to="/courses"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
      >
        <ArrowLeft size={16} />
        Back to courses
      </Link>

      <div className="mt-7 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div>
          <div className={`rounded-3xl bg-gradient-to-br ${course.color} p-8 text-white sm:p-10`}>
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
              {course.category}
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              {course.description}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Info icon={Clock3} label="Duration" value={course.duration} />
            <Info icon={PlayCircle} label="Lessons" value={course.lessons} />
            <Info icon={Users} label="Students" value={course.students} />
            <Info icon={Star} label="Rating" value={course.rating} />
          </div>

          <div className="card mt-8 p-6 sm:p-8">
            <h2 className="text-2xl font-bold">What you'll learn</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Understand the core concepts",
                "Build a real-world project",
                "Use modern best practices",
                "Debug common problems",
                "Write maintainable code",
                "Prepare for production"
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="shrink-0 text-emerald-500" size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card mt-8 p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Course curriculum</h2>
            <div className="mt-6 divide-y divide-slate-100">
              {modules.map((module, index) => (
                <div key={module} className="flex items-center gap-4 py-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                    {index + 1}
                  </span>
                  <span className="font-medium text-slate-700">{module}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="card p-6">
            <p className="text-sm font-semibold text-slate-500">Your progress</p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-4xl font-black">{course.progress}%</span>
              <span className="text-sm text-slate-500">completed</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <Link to="/dashboard" className="btn-primary mt-6 w-full">
              {course.progress ? "Continue learning" : "Start course"}
            </Link>

            <Link to="/tutor" className="btn-secondary mt-3 w-full">
              Ask AI Tutor
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="card p-4">
      <Icon size={18} className="text-blue-600" />
      <p className="mt-3 text-xs text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-slate-900">{value}</p>
    </div>
  );
}
