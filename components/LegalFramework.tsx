import React from 'react';
import SectionCard from './SectionCard';

const LegalFramework: React.FC = () => {
    return (
        <SectionCard title="Fundamento Jurídico de su Derecho" icon="fas fa-gavel">
            <p className="mb-4">
                El derecho de acceso a la historia clínica es un derecho fundamental del paciente, protegido por la legislación nacional y europea. Conocer la base legal fortalece su solicitud y le informa de sus garantías.
            </p>
            <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded-r-lg">
                    <h4 className="font-bold text-gray-800">Ley 41/2002, básica reguladora de la autonomía del paciente</h4>
                    <p className="mt-1 text-sm">
                        El <strong>artículo 18</strong> de esta ley establece claramente que el paciente tiene el derecho de acceso a la documentación de la historia clínica y a obtener copia de los datos que figuran en ella. Los centros sanitarios tienen el deber de regular el procedimiento para garantizar este derecho.
                    </p>
                </div>
                <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded-r-lg">
                    <h4 className="font-bold text-gray-800">Reglamento (UE) 2016/679 (RGPD)</h4>
                    <p className="mt-1 text-sm">
                        El <strong>artículo 15</strong> del Reglamento General de Protección de Datos refuerza este derecho, considerándolo un "derecho de acceso del interesado". Al ser sus datos de salud de categoría especial, su protección y su derecho de acceso están especialmente garantizados.
                    </p>
                </div>
            </div>
             <p className="mt-4 text-sm text-gray-600">
                Por tanto, su solicitud no es un favor que pide al centro, sino el ejercicio de un derecho reconocido y amparado por la ley.
            </p>
        </SectionCard>
    );
};

export default LegalFramework;