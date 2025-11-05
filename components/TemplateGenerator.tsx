import React, { useState, useMemo } from 'react';
import SectionCard from './SectionCard';

const TemplateGenerator: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        dni: '',
        hospital: '',
        date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
    });
    const [copied, setCopied] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const template = useMemo(() => `
A la atención del Servicio de Atención al Paciente / Archivo y Documentación Clínica
[Dirección del Hospital/Centro Médico]
[Código Postal, Ciudad]

Asunto: Solicitud de acceso a la historia clínica

Yo, D./Dña. ${formData.name || '[Nombre y Apellidos del Paciente]'}, mayor de edad, con domicilio en [Su Dirección Completa] y DNI/NIE nº ${formData.dni || '[Su DNI/NIE]'}, por medio de la presente, en ejercicio del derecho de acceso a la documentación clínica que me confieren el artículo 18 de la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, y el artículo 15 del Reglamento (UE) 2016/679 General de Protección de Datos,

SOLICITO:

Una copia ÍNTEGRA y COMPLETA de mi historia clínica obrante en el centro ${formData.hospital || '[Nombre del Hospital o Centro Médico]'}, incluyendo, sin carácter limitativo: informes de urgencias, de hospitalización, de consultas externas, informes de alta, resultados de todas las pruebas diagnósticas (analíticas, radiografías, TACs, resonancias, etc.), consentimientos informados, hojas quirúrgicas y de anestesia, y cualquier otro documento que forme parte de mi historial.

Adjunto a esta solicitud una fotocopia de mi DNI para acreditar mi identidad.

En ${formData.hospital ? formData.hospital.split(',').pop()?.trim() || '[Lugar]' : '[Lugar]'}, a ${formData.date}.

Atentamente,


Fdo.: ${formData.name || '[Su Nombre y Apellidos]'}
    `.trim(), [formData]);

    const handleCopy = () => {
        navigator.clipboard.writeText(template).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            dni: '',
            hospital: '',
            date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
        });
    };

    return (
        <SectionCard title="Genere su Solicitud Personalizada" icon="fas fa-magic-wand-sparkles">
            <p className="mb-6 text-base">Utilice este generador para crear una solicitud formal, fundamentada jurídicamente, que cumpla con todos los requisitos legales. Rellene sus datos y el texto se adaptará automáticamente. Este documento está diseñado para ser presentado directamente en el centro sanitario.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo del paciente</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Ej: Ana García Pérez"/>
                </div>
                <div>
                    <label htmlFor="dni" className="block text-sm font-medium text-gray-700 mb-1">DNI / NIE</label>
                    <input type="text" name="dni" id="dni" value={formData.dni} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Ej: 12345678A"/>
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-1">Nombre del Hospital / Centro Médico</label>
                    <input type="text" name="hospital" id="hospital" value={formData.hospital} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Ej: Hospital Universitario La Paz, Madrid"/>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Texto generado</label>
                <textarea readOnly value={template} className="w-full h-96 p-3 bg-gray-100 border border-gray-300 rounded-md font-mono text-sm" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
                <button onClick={handleCopy} className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors">
                    <i className={`mr-2 ${copied ? 'fas fa-check' : 'fas fa-copy'}`}></i>
                    {copied ? '¡Copiado!' : 'Copiar al Portapapeles'}
                </button>
                <button onClick={handleReset} className="px-5 py-2.5 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-colors">
                    <i className="fas fa-undo mr-2"></i>
                    Limpiar Formulario
                </button>
            </div>
        </SectionCard>
    );
};

export default TemplateGenerator;