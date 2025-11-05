import React from 'react';

const AuthorProfile: React.FC = () => {
    return (
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
             <div className="text-center md:text-left md:flex md:items-center md:space-x-8">
                <img 
                    src="https://bleyabogados.es/wp-content/uploads/2024/09/Clara-Lozano-Abogada.jpg" 
                    alt="Clara Lozano Gallego"
                    className="w-32 h-32 rounded-full mx-auto md:mx-0 object-cover shadow-md border-4 border-white"
                />
                <div className="mt-4 md:mt-0">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Clara Lozano Gallego
                    </h3>
                    <p className="text-blue-700 font-semibold mt-1">Abogada | Especialista en Derecho Sanitario</p>
                    <p className="text-gray-600 mt-3 max-w-2xl">
                        Con una amplia y dedicada trayectoria en litigios de responsabilidad civil médico-sanitaria, mi objetivo es ofrecer una defensa jurídica rigurosa y un trato humano y cercano a los pacientes y sus familias. La claridad y la estrategia son los pilares de mi práctica profesional.
                    </p>
                    <p className="mt-4 text-sm text-gray-700">
                        Para más información o para concertar un estudio de viabilidad de su caso, visite el sitio web de <a href="https://bleyabogados.es/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">Bley Abogados</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AuthorProfile;