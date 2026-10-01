import { Link } from "react-router-dom";
import { Clock3, PlayCircle, Star, Users } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <article className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`bg-gradient-to-br ${course.color} p-6 text-white`}>
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">
            {course.category}
          </span>
          <span className="text-sm font-semibold">{course.level}</span>
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20">
          <PlayCircle size={30} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {course.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock3 size={15} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <PlayCircle size={15} />
            {course.lessons} lessons
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={15} />
            {course.students}
          </span>
          <span className="flex items-center gap-1.5">
            <Star size={15} className="fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
        </div>

        <Link to={`/courses/${course.id}`} className="btn-primary mt-6 w-full">
          View course
        </Link>
      </div>
    </article>
  );
}
