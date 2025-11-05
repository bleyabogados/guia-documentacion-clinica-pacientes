import React from 'react';

const Hero: React.FC = () => {
    const lastUpdated = new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

    return (
        <div className="bg-blue-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Guía de Documentación Clínica para Pacientes
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-blue-200">
                    Le proporcionamos una guía legal y las herramientas prácticas para ejercer su derecho fundamental de acceso a su historial clínico de forma rigurosa y efectiva.
                </p>
                <p className="mt-8 text-sm text-blue-300">
                    Última actualización: {lastUpdated}
                </p>
            </div>
        </div>
    );
};

export default Hero;