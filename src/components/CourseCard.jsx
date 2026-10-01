import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group glass overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <div
        className={`relative h-36 overflow-hidden bg-gradient-to-br ${course.color} p-5`}
      >
        <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex justify-between">
          <span className="rounded-full bg-black/20 px-2.5 py-1 text-[11px] font-bold">
            {course.category}
          </span>
          <Sparkles size={18} className="text-white/70" />
        </div>
        <div className="absolute bottom-4 left-5 text-2xl font-black opacity-90">
          {course.title.split(" ").slice(0, 2).join(" ")}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
          <span>{course.level}</span>
          <span>•</span>
          <span>{course.duration}</span>
          <span>•</span>
          <span>{course.lessons} lessons</span>
        </div>

        <h3 className="text-lg font-bold transition group-hover:text-violet-300">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
          {course.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="text-slate-500">{course.progress}% complete</span>
          <ArrowRight
            size={17}
            className="text-slate-500 transition group-hover:text-white"
          />
        </div>

        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </Link>
  );
}
