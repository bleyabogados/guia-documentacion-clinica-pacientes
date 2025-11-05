import React from 'react';
import SectionCard from './SectionCard';

const documents = [
    { name: "Historia Clínica Completa", description: "Incluye todos los informes, evolutivos, y anotaciones desde su ingreso hasta el alta." },
    { name: "Informes de Urgencias", description: "Documentación específica de cualquier visita al servicio de urgencias." },
    { name: "Resultados de Pruebas", description: "Analíticas, radiografías, resonancias magnéticas, TACs, biopsias, etc." },
    { name: "Consentimientos Informados", description: "Documentos firmados donde se le informó de los riesgos de un procedimiento." },
    { name: "Hoja Quirúrgica y de Anestesia", description: "Describe detalladamente la intervención quirúrgica y la anestesia administrada." },
    { name: "Informes de Alta", description: "Resumen del proceso asistencial, diagnóstico final y tratamiento recomendado." },
];

const DocumentTable: React.FC = () => {
    return (
        <SectionCard title="¿Qué Documentación Pedir en un Hospital?" icon="fas fa-file-medical-alt">
             <p className="mb-6 text-base">Una historia clínica completa es la prueba fundamental en cualquier proceso de reclamación por responsabilidad médico-sanitaria. Asegúrese de solicitar todos los documentos que se detallan a continuación para garantizar un análisis exhaustivo de su caso.</p>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 font-semibold text-sm text-gray-700 border-b">Documento</th>
                            <th className="p-3 font-semibold text-sm text-gray-700 border-b">Descripción Clave</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-3 font-medium text-gray-800 border-b border-gray-200">{doc.name}</td>
                                <td className="p-3 text-gray-600 border-b border-ray-200">{doc.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                <p className="text-sm font-semibold">Nota Importante:</p>
                <p className="text-sm mt-1">Esta lista es una guía general. Dependiendo de su caso, podría ser necesaria documentación adicional específica. Una revisión por parte de un profesional es clave para no omitir ninguna prueba relevante.</p>
            </div>
        </SectionCard>
    );
};

export default DocumentTable;