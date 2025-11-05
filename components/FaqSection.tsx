import React, { useState } from 'react';
import SectionCard from './SectionCard';

const faqs = [
    {
        question: "¿Qué hago si el hospital no responde en el plazo legal de 30 días?",
        answer: "Si transcurrido un mes desde su solicitud no ha recibido respuesta o la misma es insatisfactoria, puede interponer una reclamación ante la Agencia Española de Protección de Datos (AEPD). Este trámite es gratuito y sirve para tutelar su derecho de acceso."
    },
    {
        question: "¿Me pueden cobrar por la copia de la historia clínica?",
        answer: "El acceso a sus datos es gratuito. La obtención de la primera copia de su historia clínica suele ser gratuita. No obstante, la ley permite que el centro sanitario repercuta un canon correspondiente a los costes materiales de la reproducción (fotocopias, CD, etc.), especialmente en segundas copias. Dicho canon nunca debe ser disuasorio."
    },
     {
        question: "¿Cuál es la diferencia entre un 'informe médico' y la 'historia clínica completa'?",
        answer: "Un 'informe médico' es un resumen de un episodio concreto (un alta, una consulta). La 'historia clínica completa' es el conjunto de TODOS los documentos generados durante su asistencia sanitaria. Para una valoración legal rigurosa, siempre se debe solicitar la historia completa, ya que los detalles omitidos en un informe pueden ser cruciales."
    },
    {
        question: "¿Qué hago si la documentación que me entregan parece incompleta?",
        answer: "Si sospecha que falta información crucial (un informe, una prueba, etc.), debe presentar un nuevo escrito, llamado 'escrito de subsanación o complemento', dirigido al mismo Servicio de Atención al Paciente. En él, debe especificar de la forma más concreta posible qué documentos echa en falta y solicitar que le sean entregados a la mayor brevedad."
    },
    {
        question: "¿Puede un familiar solicitar mi historia clínica por mí?",
        answer: "Sí, pero bajo supuestos tasados. Un tercero, incluido un familiar, solo puede acceder a su historia clínica si presenta una autorización expresa y firmada por usted (representación voluntaria). También pueden acceder los representantes legales en caso de pacientes incapacitados legalmente o menores de edad. En caso de fallecimiento, el acceso se limita a las personas vinculadas por razones familiares o de hecho, salvo que el fallecido lo hubiese prohibido expresamente."
    },
    {
        question: "¿Y si el hospital dice que ha perdido mi historia clínica?",
        answer: "La pérdida de una historia clínica es un hecho muy grave que implica una infracción del deber de custodia del centro. Puede dar lugar a sanciones administrativas para el hospital y, en un procedimiento judicial, puede suponer la inversión de la carga de la prueba, es decir, que sea el hospital quien deba probar que actuó correctamente ante la imposibilidad del paciente de probar lo contrario por la falta de la documentación."
    }
];

const FaqItem: React.FC<{ faq: { question: string; answer: string; } }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-semibold">{faq.question}</span>
                <i className={`fas fa-chevron-down transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {isOpen && (
                <div className="mt-3 pl-2 text-gray-600 border-l-2 border-blue-500">
                    <p className="ml-3">{faq.answer}</p>
                </div>
            )}
        </div>
    );
};


const FaqSection: React.FC = () => {
    return (
        <SectionCard title="Problemas Frecuentes y Cómo Actuar" icon="fas fa-question-circle">
            <p className="mb-6">Anticiparse a los posibles obstáculos es clave. Aquí respondemos a las dudas más comunes que pueden surgir durante el proceso de solicitud de documentación clínica.</p>
            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} faq={faq} />
                ))}
            </div>
        </SectionCard>
    );
};

export default FaqSection;