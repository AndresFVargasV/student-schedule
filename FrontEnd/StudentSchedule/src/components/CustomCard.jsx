import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

import { Badge } from "@/components/ui/badge"

const CustomCard = ({ title, inicio, fin, actividades, recursos }) => {
    console.log(actividades)
    return (
        <Card className="w-[350px]  m-5 ">
            <CardHeader >
                <CardTitle className="flex justify-center text-3xl ">{title}</CardTitle>
                <div className="flex justify-center">

                    <Badge className="mx-2 bg-purple-800">{inicio}</Badge>
                    <Badge className='bg-purple-800'>{fin}</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <h2 className=" font-bold ">Actividades</h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    {actividades.map((actividad, index) => (
                        <li key={index} className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            {actividad}
                        </li>
                    ))}
                </ul>
                <h2 className=" font-bold ">Recursos</h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    {recursos.map((actividad, index) => (
                        <li key={index} className="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-purple-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                            </svg>

                            {actividad}
                        </li>
                    ))}

                </ul>




            </CardContent>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    )
}

export default CustomCard