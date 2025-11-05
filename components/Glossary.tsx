import React, { useState } from 'react';
import SectionCard from './SectionCard';

const terms = [
    {
        term: "Lex Artis Médica",
        definition: "Es el conjunto de normas o criterios de actuación que un profesional de la medicina debe seguir en el diagnóstico y tratamiento de un paciente. Una negligencia médica ocurre cuando no se respeta la Lex Artis."
    },
    {
        term: "Nexo Causal",
        definition: "Es la relación directa de causa-efecto que debe existir entre la actuación médica negligente y el daño sufrido por el paciente. Probar este nexo es fundamental en cualquier reclamación."
    },
    {
        term: "Consentimiento Informado",
        definition: "Es el documento mediante el cual el paciente autoriza un procedimiento médico tras haber sido informado por el facultativo de los riesgos, beneficios y alternativas. La falta de consentimiento informado o que este sea defectuoso puede ser motivo de reclamación."
    },
    {
        term: "Daño Moral",
        definition: "Es el sufrimiento psíquico, la aflicción o el dolor emocional que sufre una persona como consecuencia de la negligencia. Es un concepto indemnizable, independiente del daño físico."
    },
    {
        term: "Perjuicio Patrimonial",
        definition: "Comprende tanto el 'lucro cesante' (lo que la víctima ha dejado de ganar, como salarios) como el 'daño emergente' (los gastos directos ocasionados por la negligencia, como tratamientos, rehabilitación, adaptación de la vivienda, etc.)."
    },
    {
        term: "Iatrogenia",
        definition: "Se refiere a cualquier alteración o daño en el estado del paciente producido por la acción del médico o del sistema sanitario, pero que no necesariamente implica una negligencia. Es un resultado adverso posible dentro de una correcta práctica médica."
    }
];

const GlossaryItem: React.FC<{ term: { term: string; definition: string; } }> = ({ term }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-blue-800">{term.term}</span>
                <i className={`fas fa-chevron-down transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {isOpen && (
                <div className="mt-3 pl-2 text-gray-600 border-l-2 border-blue-500">
                    <p className="ml-3">{term.definition}</p>
                </div>
            )}
        </div>
    );
};

const Glossary: React.FC = () => {
    return (
        <SectionCard title="Glosario de Términos Médico-Legales" icon="fas fa-book">
            <p className="mb-6">Entender el lenguaje utilizado en un proceso de reclamación es fundamental. Aquí le explicamos de forma sencilla algunos de los conceptos clave que podría encontrar.</p>
            <div className="space-y-2">
                {terms.map((term, index) => (
                    <GlossaryItem key={index} term={term} />
                ))}
            </div>
        </SectionCard>
    );
};

export default Glossary;