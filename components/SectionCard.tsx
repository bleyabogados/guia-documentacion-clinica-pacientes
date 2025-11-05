
import React from 'react';

interface SectionCardProps {
    title: string;
    icon: string;
    children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children }) => {
    return (
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
                <i className={`${icon} text-3xl text-blue-600 mr-4`}></i>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h3>
            </div>
            <div className="text-gray-700 space-y-4">
                {children}
            </div>
        </section>
    );
};

export default SectionCard;
