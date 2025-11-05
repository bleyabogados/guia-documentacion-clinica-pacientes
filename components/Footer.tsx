import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white">Bley Abogados SLP</h3>
                    <p className="mt-2 text-sm text-gray-400">
                        Calle Bravo Murillo 297, Portal 1, Escalera B, 1ºB, 28020 Madrid
                    </p>
                    <p className="mt-4 text-xs">
                        &copy; {new Date().getFullYear()} Bley Abogados. Todos los derechos reservados.
                    </p>
                     <p className="mt-2 text-xs text-gray-500 max-w-2xl mx-auto">
                        El contenido de esta guía es meramente informativo y no sustituye el asesoramiento jurídico personalizado de un abogado. Su uso no establece una relación abogado-cliente.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;