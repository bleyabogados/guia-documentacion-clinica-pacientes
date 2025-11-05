
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold text-blue-900">
                        Bley Abogados
                    </h1>
                    <span className="text-sm font-semibold text-gray-600 hidden sm:block">Especialistas en Derecho Sanitario</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
