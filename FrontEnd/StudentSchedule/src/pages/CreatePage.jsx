import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
function CreatePage() {
  //manejar las horas
  const times = Array.from({ length: 48 }, (_, index) => {
    const hour = Math.floor(index / 2);
    const minute = index % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  //fin manejar las horas

  const { register, handleSubmit, control } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center h-screen">
          <Card className="w-[750px]">
            <CardHeader>
              <CardTitle className="text-3xl">
                Crea tu plan de estudios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="carrera">Carrera</Label>
                  <Input
                    id="carrera"
                    placeholder="Carrera"
                    {...register("carrera", {
                      required: "Por favor, ingrese la carrera",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message:
                          "Ingrese un nombre de carrera válido, solo letras y espacios",
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tema">Tema</Label>
                  <Input
                    id="tema"
                    placeholder="Tema"
                    {...register("tema", {
                      required: true,
                    })}
                  />
                </div>

                <div>
                  <Label htmlFor="hinicio" className="block text-left mb-2">
                    Horario
                  </Label>

                  <div className="flex space-x-4 justify-center items-center">
                    <Controller
                      name="horaInicial_tiempoLibre" // This is the name attribute for the form control.
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hinicio">
                            <SelectValue placeholder="Hora Inicial" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            {times.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <Controller
                      name="horaFinal_tiempoLibre" // This is the name attribute for the form control.
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hinicio">
                            <SelectValue placeholder="Hora Final" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            {times.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Crear</Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </>
  );
}

export default CreatePage;
