import { Button } from "../ui/button";

import { Link } from "react-router-dom";
export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 animate__animated animate__fadeIn bg-[url('C:\Users\R3\Desktop\student-schedule\FrontEnd\StudentSchedule\public\img\work-schedule-timetable-managing-workflow-organization-effective-work-scheduling-time-management-effective-time-spending-time-planning-concept-flat-modern-illustration-vector.jpg')]">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-4 text-center ">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Planifica Tu Éxito Académico
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Diseña tu camino académico con herramientas flexibles adaptadas a
              tus necesidades y objetivos.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-purple-800 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-purple-400 dark:text-gray-900 dark:hover:bg-purple-400 dark:focus-visible:ring-gray-300 shadow-lg"
              to="/create"
            >
              Empezar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
