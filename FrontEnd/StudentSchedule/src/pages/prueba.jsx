import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Definir los días de la semana como items constantes para uso en el formulario
const days = [
  { id: "lunes", label: "Lunes" },
  { id: "martes", label: "Martes" },
  { id: "miercoles", label: "Miercoles" },
  { id: "jueves", label: "Jueves" },
  { id: "viernes", label: "Friday" },
  { id: "sabado", label: "Sabado" },
  { id: "domingo", label: "Domingo" },
];

// Crear esquema Zod para validación
const FormSchema = z.object({
  days: z.array(z.string()).refine((value) => value.some((day) => day), {
    message: "You must select at least one day.",
  }),
});


export function Prueba() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        days: [],
      }
    });
  
    const onSubmit = data => {
      console.log("Submitted Data:", data);
    };
  
    const watchedDays = watch("days");
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="mb-4">
          <label className="text-base">Days Available</label>
          <p>Select the days you are available.</p>
        </div>
        {days.map((day) => (
          <div key={day.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={day.id}
              {...register("days", { 
                setValueAs: v => v ? [...watchedDays, day.id] : watchedDays.filter(d => d !== day.id)
              })}
              value={day.id}
              checked={watchedDays.includes(day.id)}
            />
            <label htmlFor={day.id} className="text-sm font-medium leading-none">
              {day.label}
            </label>
          </div>
        ))}
        {errors.days && <p className="text-red-500">{errors.days.message}</p>}
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    );
  }
  