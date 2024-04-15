import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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

function CreatePage() {
  const times = Array.from({ length: 48 }, (_, index) => {
    const hour = Math.floor(index / 2);
    const minute = index % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[750px]">
        <CardHeader>
          <CardTitle className="text-3xl" >Crea tu plan de estudios</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="carrera">Carrera</Label>
                <Input id="carrera" placeholder="Carrera" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="tema">Tema</Label>
                <Input id="tema" placeholder="Tema" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="horas">Horas disponible a la semana</Label>
                <Input
                  id="horas"
                  placeholder="Horas Disponible"
                  type="number"
                />
              </div>

              <div>
                <Label htmlFor="hinicio" className="block text-left mb-2">
                  Horario
                </Label>

                <div className="flex space-x-4 justify-center items-center">
                  <Select>
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
                  <Select>
                    <SelectTrigger id="hfinal">
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
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Crear</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CreatePage;
