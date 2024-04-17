import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons"
import axios from 'axios';
import 'animate.css';
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreatePage() {
  const navigate = useNavigate();
  //manejar las horas
  const times = Array.from({ length: 48 }, (_, index) => {
    const hour = Math.floor(index / 2);
    const minute = index % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  //fin manejar las horas

  const { register, handleSubmit, control, formState: { errors } } = useForm({ mode: "onChange" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);

    console.log(data); // Imprime los datos para depuración

    try {
      // Realiza la petición POST utilizando axios
      const response = await axios.post('http://localhost:8000/study-plan', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Respuesta del servidor:', response.data);
      navigate(`/Plan/${response.data}`);
      navigate('/Plan',{state:response.data});
      // Aquí podrías manejar la respuesta y actualizar el estado o UI según sea necesario
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      // Aquí podrías manejar errores, como mostrar un mensaje de error en la UI
    } finally {
      setIsLoading(false);

    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" animate__animated animate__bounceInDown">
        <div className="flex justify-center items-center my-8">
          <Card className="w-[750px] bg-gray-100">
            <CardHeader>
              <CardTitle className="text-3xl flex justify-center">
                Crea tu plan de estudios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="carrera">Carrera</Label>
                  <Input
                    id="carrera"
                    className="bg-zinc-50"
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
                  {errors.carrera && (
                    <span className="mt-2 text-sm text-red-500 font-bold peer-[&:not(:placeholder-shown):not(:focus):invalid]:block animate__animated animate__slideInDown">
                      {errors.carrera.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tema">Tema</Label>
                  <Input
                    id="tema"
                    className="bg-zinc-50"
                    placeholder="Tema"
                    {...register("tema", {
                      required: true,
                    })}
                  />
                  {
                    errors.tema && (
                      <span className="mt-2 text-sm text-red-500 font-bold peer-[&:not(:placeholder-shown):not(:focus):invalid]:block animate__animated animate__slideInDown">
                        Por favor, ingrese un tema
                      </span>
                    )
                  }

                </div>

                <div>
                  <Label htmlFor="hinicioL" className="block text-left mb-2">
                    Lunes
                  </Label>

                  <div className="flex space-x-4 justify-center items-center">
                    <Controller
                      name="horaInicial_tiempoLibreL" // This is the name attribute for the form control.
                      control={control}

                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}  >

                          <SelectTrigger id="hinicioL" className="bg-neutral-50">
                            <SelectValue placeholder="Hora Inicial" />
                          </SelectTrigger>
                          <SelectContent position="popper" >
                            {times.map((time) => (
                              <SelectItem key={time} value={time} >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                      )}

                    />


                    <Controller
                      name="horaFinal_tiempoLibreL" // This is the name attribute for the form control.
                      control={control}
                      required
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hfinalL" className="bg-neutral-50">
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

                <div>
                  <Label htmlFor="hinicioM" className="block text-left mb-2">
                    Martes
                  </Label>

                  <div className="flex space-x-4 justify-center items-center">
                    <Controller
                      name="horaInicial_tiempoLibreM" // This is the name attribute for the form control.
                      control={control}

                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}  >

                          <SelectTrigger id="hinicioM" className="bg-neutral-50">
                            <SelectValue placeholder="Hora Inicial" />
                          </SelectTrigger>
                          <SelectContent position="popper" >
                            {times.map((time) => (
                              <SelectItem key={time} value={time} >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                      )}

                    />


                    <Controller
                      name="horaFinal_tiempoLibreM" // This is the name attribute for the form control.
                      control={control}
                      required
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hfinalM" className="bg-neutral-50">
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

                <div>
                  <Label htmlFor="hinicioW" className="block text-left mb-2">
                    Miercoles
                  </Label>

                  <div className="flex space-x-4 justify-center items-center">
                    <Controller
                      name="horaInicial_tiempoLibreW" // This is the name attribute for the form control.
                      control={control}

                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}  >

                          <SelectTrigger id="hinicioW" className="bg-neutral-50">
                            <SelectValue placeholder="Hora Inicial" />
                          </SelectTrigger>
                          <SelectContent position="popper" >
                            {times.map((time) => (
                              <SelectItem key={time} value={time} >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                      )}

                    />


                    <Controller
                      name="horaFinal_tiempoLibreW" // This is the name attribute for the form control.
                      control={control}
                      required
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hfinalW" className="bg-neutral-50">
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

                <div>
                  <Label htmlFor="hinicioJ" className="block text-left mb-2">
                    Jueves
                  </Label>

                  <div className="flex space-x-4 justify-center items-center">
                    <Controller
                      name="horaInicial_tiempoLibreJ" // This is the name attribute for the form control.
                      control={control}

                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}  >

                          <SelectTrigger id="hinicioJ" className="bg-neutral-50">
                            <SelectValue placeholder="Hora Inicial" />
                          </SelectTrigger>
                          <SelectContent position="popper" >
                            {times.map((time) => (
                              <SelectItem key={time} value={time} >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                      )}

                    />


                    <Controller
                      name="horaFinal_tiempoLibreJ" // This is the name attribute for the form control.
                      control={control}
                      required
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hfinalJ" className="bg-neutral-50">
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

                <div>
                  <Label htmlFor="hinicioV" className="block text-left mb-2">
                    Viernes
                  </Label>

                  <div className="flex space-x-4 justify-center items-center">
                    <Controller
                      name="horaInicial_tiempoLibreV" // This is the name attribute for the form control.
                      control={control}

                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}  >

                          <SelectTrigger id="hinicioV" className="bg-neutral-50">
                            <SelectValue placeholder="Hora Inicial" />
                          </SelectTrigger>
                          <SelectContent position="popper" >
                            {times.map((time) => (
                              <SelectItem key={time} value={time} >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                      )}

                    />


                    <Controller
                      name="horaFinal_tiempoLibreV" // This is the name attribute for the form control.
                      control={control}
                      required
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hfinalV" className="bg-neutral-50">
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

                <div>
                  <Label htmlFor="hinicioS" className="block text-left mb-2">
                    Sábado
                  </Label>

                  <div className="flex space-x-4 justify-center items-center">
                    <Controller
                      name="horaInicial_tiempoLibreS" // This is the name attribute for the form control.
                      control={control}

                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}  >

                          <SelectTrigger id="hinicioS" className="bg-neutral-50">
                            <SelectValue placeholder="Hora Inicial" />
                          </SelectTrigger>
                          <SelectContent position="popper" >
                            {times.map((time) => (
                              <SelectItem key={time} value={time} >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                      )}

                    />


                    <Controller
                      name="horaFinal_tiempoLibreS" // This is the name attribute for the form control.
                      control={control}
                      required
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hfinalS" className="bg-neutral-50">
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

                <div>
                  <Label htmlFor="hinicioD" className="block text-left mb-2">
                    Domingo
                  </Label>

                  <div className="flex space-x-4 justify-center items-center">
                    <Controller
                      name="horaInicial_tiempoLibreD" // This is the name attribute for the form control.
                      control={control}

                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}  >

                          <SelectTrigger id="hinicioD" className="bg-neutral-50">
                            <SelectValue placeholder="Hora Inicial" />
                          </SelectTrigger>
                          <SelectContent position="popper" >
                            {times.map((time) => (
                              <SelectItem key={time} value={time} >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                      )}

                    />


                    <Controller
                      name="horaFinal_tiempoLibreD" // This is the name attribute for the form control.
                      control={control}
                      required
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="hfinalD" className="bg-neutral-50">
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
              <Button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Cargando
                  </>
                ) : (
                  'Crear'
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </>
  );
}

export default CreatePage;
