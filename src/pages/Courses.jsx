import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map((course) => course.category))];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesQuery =
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [category, query]);

  return (
    <section className="container-page py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="font-semibold text-blue-600">Course library</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
          Find your next skill.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-500">
          Explore practical courses designed to help you build, ship, and grow.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3 lg:flex-row">
        <label className="relative flex-1">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </label>

        <div className="flex items-center gap-2 overflow-x-auto">
          <SlidersHorizontal size={18} className="shrink-0 text-slate-400" />
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition ${
                category === item
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="card mt-8 p-12 text-center">
          <h2 className="text-xl font-bold">No courses found</h2>
          <p className="mt-2 text-slate-500">
            Try another search term or category.
          </p>
        </div>
      )}
    </section>
  );
}
