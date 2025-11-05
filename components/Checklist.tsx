import React from 'react';
import SectionCard from './SectionCard';

const checklistItems = [
    "He verificado la exactitud de mis datos personales en la solicitud.",
    "He presentado la solicitud en el Servicio de Atención al Paciente o unidad análoga del centro.",
    "He adjuntado una fotocopia legible de mi DNI/NIE en vigor.",
    "He solicitado explícitamente una copia de la historia clínica 'completa e íntegra'.",
    "He obtenido y archivado una copia sellada de la solicitud como acuse de recibo.",
    "Soy consciente del plazo legal de un mes que el centro dispone para entregar la documentación (Art. 15.3 RGPD).",
];

const Checklist: React.FC = () => {
    return (
        <SectionCard title="Checklist del Proceso de Solicitud" icon="fas fa-tasks">
             <p className="mb-6 text-base">Siga estos pasos para asegurarse de que su solicitud se realiza correctamente y sin contratiempos. Marque cada punto a medida que lo complete.</p>
            <ul className="space-y-3">
                {checklistItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full mr-3 mt-1 shrink-0">
                            <i className="fas fa-check text-green-600 text-sm"></i>
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </SectionCard>
    );
};

export default Checklist;