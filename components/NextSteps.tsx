import React from 'react';
import SectionCard from './SectionCard';

const steps = [
    {
        title: "Organice la Documentación",
        description: "Ordene todos los documentos de forma cronológica. Esto es fundamental para que el análisis posterior sea eficiente y preciso."
    },
    {
        title: "No Manipule los Originales",
        description: "No escriba, subraye ni haga anotaciones en los documentos recibidos. Trabaje siempre sobre copias para preservar la integridad de la prueba."
    },
    {
        title: "Busque un Estudio de Viabilidad Profesional",
        description: "Un abogado especialista en derecho sanitario, junto a un perito médico, debe analizar la documentación para determinar si existe base para una reclamación."
    },
    {
        title: "Contacte con un Despacho Especializado",
        description: "La viabilidad de un caso de negligencia médica requiere un alto grado de especialización. Asegúrese de que sus asesores tengan experiencia demostrada en la materia."
    }
];

const NextSteps: React.FC = () => {
    return (
        <SectionCard title="Pasos Siguientes: ¿Y ahora qué?" icon="fas fa-arrow-right-long">
            <p className="mb-6 text-base">
                Conseguir la historia clínica completa es el primer gran paso. Ahora, es crucial saber cómo proceder para determinar si ha existido una mala praxis y si su caso es viable.
            </p>
            <div className="space-y-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                         <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full mr-4 mt-1 shrink-0">
                            <span className="font-bold text-sm text-blue-700">{index + 1}</span>
                        </span>
                        <div>
                            <h4 className="font-semibold text-gray-800">{step.title}</h4>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 rounded-r-lg">
                <div className="flex items-center">
                    <i className="fas fa-exclamation-triangle text-xl mr-3"></i>
                    <h4 className="font-semibold">¡Atención a los Plazos de Prescripción!</h4>
                </div>
                <p className="text-sm mt-2 ml-1">
                    El derecho a reclamar una negligencia médica no es indefinido. Existen plazos legales estrictos (de 1 a 5 años dependiendo del caso) que, una vez superados, extinguen la posibilidad de acción legal. No deje pasar el tiempo; contacte con un especialista lo antes posible.
                </p>
            </div>

            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-900 rounded-r-lg">
                <p className="font-semibold">Nuestro Compromiso</p>
                <p className="text-sm mt-1">
                    En <strong>Bley Abogados</strong>, ofrecemos un primer estudio de viabilidad de su caso sin coste ni compromiso. Analizaremos su documentación para ofrecerle una valoración honesta y profesional sobre sus opciones.
                </p>
            </div>
        </SectionCard>
    );
};

export default NextSteps;