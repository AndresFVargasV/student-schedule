import CustomCard from "@/components/CustomCard"
import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom';
function PlanPage() {


    // Accede al estado pasado con navigate
    const { state } = useLocation();
    const planes = JSON.parse(state).planEstudio;

    return (
        <div className="flex items-center justify-center h-full flex-wrap">
            {planes.map((plan, index) => (
                <CustomCard key={index} title={plan.dia} className="m-5" inicio={plan.hora_inicio_estudio_dia} fin={plan.hora_final_estudio_dia} actividades={plan.actividades} recursos={plan.recursos} />
            ))}
        </div>
    )
}

export default PlanPage