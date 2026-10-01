import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock3, Play, Star } from "lucide-react";
import { courses } from "../data/courses";

const lessons = [
  "What is generative AI?",
  "How transformers process text",
  "Tokens, embeddings and context",
  "Prompting patterns that work",
  "Build your first AI feature",
  "Mini project and knowledge check",
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id) ?? courses[0];

  return (
    <div>
      <Link
        to="/courses"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white"
      >
        <ArrowLeft size={16} /> Back to courses
      </Link>

      <div className="grid gap-5 xl:grid-cols-[1fr_330px]">
        <section className="glass overflow-hidden rounded-2xl">
          <div
            className={`bg-gradient-to-br ${course.color} p-7 sm:p-10 lg:p-14`}
          >
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white/70">
              {course.category}
            </div>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-5 max-w-2xl leading-7 text-white/80">
              {course.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock3 size={16} /> {course.duration}
              </span>
              <span>•</span>
              <span>{course.lessons} lessons</span>
              <span>•</span>
              <span>{course.level}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-violet-300">
                  Your progress
                </p>
                <h2 className="mt-1 text-2xl font-black">
                  {course.progress}% complete
                </h2>
              </div>
              <div className="text-right text-xs text-slate-500">
                {Math.round((course.lessons * course.progress) / 100)} / {course.lessons} lessons
              </div>
            </div>

            <div className="mb-8 h-2 rounded-full bg-white/5">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <h2 className="mb-4 text-xl font-black">Course curriculum</h2>
            <div className="space-y-2">
              {lessons.map((lesson, index) => {
                const completed = index < 3 && course.progress > 20;
                return (
                  <div
                    key={lesson}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-xs font-bold">
                      {completed ? (
                        <CheckCircle2 size={17} className="text-emerald-300" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{lesson}</p>
                      <p className="mt-1 text-xs text-slate-500">12 min lesson</p>
                    </div>
                    {!completed && index === 3 && (
                      <button className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-950">
                        Continue
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="glass h-fit rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10">
              <Play size={18} className="text-violet-300" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Next lesson</p>
              <p className="font-bold">How transformers work</p>
            </div>
          </div>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950">
            <Play size={16} /> Continue learning
          </button>

          <div className="mt-6 border-t border-white/10 pt-5 text-sm text-slate-400">
            <div className="mb-3 flex items-center gap-2 text-amber-300">
              <Star size={16} fill="currentColor" /> 4.9 course rating
            </div>
            <p className="leading-6">
              Lifetime access, practical exercises, progress tracking and AI tutor support.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
