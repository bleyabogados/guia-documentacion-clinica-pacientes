import React from 'react';
import SectionCard from './SectionCard';

// Declaraciones para que TypeScript reconozca las librerías globales
declare const jspdf: any;
declare const docx: any;
declare const XLSX: any;

const templateContent = `A la atención del Servicio de Atención al Paciente / Archivo y Documentación Clínica
[Dirección del Hospital/Centro Médico]
[Código Postal, Ciudad]

Asunto: Solicitud de acceso a la historia clínica

Yo, D./Dña. [Nombre y Apellidos del Paciente], mayor de edad, con domicilio en [Su Dirección Completa] y DNI/NIE nº [Su DNI/NIE], por medio de la presente, en ejercicio del derecho de acceso a la documentación clínica que me confieren el artículo 18 de la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, y el artículo 15 del Reglamento (UE) 2016/679 General de Protección de Datos,

SOLICITO:

Una copia ÍNTEGRA y COMPLETA de mi historia clínica obrante en el centro [Nombre del Hospital o Centro Médico], incluyendo, sin carácter limitativo: informes de urgencias, de hospitalización, de consultas externas, informes de alta, resultados de todas las pruebas diagnósticas (analíticas, radiografías, TACs, resonancias, etc.), consentimientos informados, hojas quirúrgicas y de anestesia, y cualquier otro documento que forme parte de mi historial.

Adjunto a esta solicitud una fotocopia de mi DNI para acreditar mi identidad.

En [Lugar], a [Fecha].

Atentamente,


Fdo.: [Su Nombre y Apellidos]`;

const checklistItems = [
    "Historia Clínica Completa",
    "Informes de Urgencias",
    "Resultados de Pruebas (Analíticas, Radiografías, Resonancias, TACs, Biopsias)",
    "Consentimientos Informados firmados",
    "Hoja Quirúrgica",
    "Hoja de Anestesia",
    "Informes de Alta de Hospitalización",
    "Evolutivos médicos y de enfermería",
];

const DownloadSection: React.FC = () => {

    const handleDownloadPDF = () => {
        const { jsPDF } = jspdf;
        const doc = new jsPDF();
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        const pageWidth = 210;
        const margin = 15;
        const maxWidth = pageWidth - margin * 2;
        doc.text(templateContent, margin, 20, { maxWidth: maxWidth });
        doc.save('plantilla-solicitud-historia-clinica.pdf');
    };
    
    const handleDownloadDOCX = (content: string, fileName: string) => {
        const doc = new docx.Document({
            sections: [{
                children: content.split('\n').map(p => new docx.Paragraph({ text: p })),
            }],
        });

        docx.Packer.toBlob(doc).then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    };
    
    const handleDownloadXLSX = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            checklistItems.map(item => ({ "Documento a Solicitar": item, "Recibido (Marcar con X)": "" }))
        );
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Checklist');
        XLSX.writeFile(workbook, 'checklist-documentacion-clinica.xlsx');
    };

    return (
        <SectionCard title="Recursos Descargables" icon="fas fa-download">
            <p className="mb-6 text-base">Descargue nuestras plantillas listas para usar en formatos profesionales. Le facilitamos los documentos necesarios para que su proceso sea más sencillo y rápido.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DownloadCard
                    title="Plantilla Solicitud"
                    format=".docx"
                    description="Un documento de Word para editar fácilmente, rellenar con sus datos e imprimir."
                    onDownload={() => handleDownloadDOCX(templateContent, 'plantilla-solicitud.docx')}
                />
                <DownloadCard
                    title="Plantilla Solicitud"
                    format=".pdf"
                    description="Un PDF listo para imprimir, rellenar a mano y presentar directamente en el centro."
                    onDownload={handleDownloadPDF}
                />
                <DownloadCard
                    title="Checklist Documentos"
                    format=".xlsx"
                    description="Una hoja de cálculo Excel para llevar un control exhaustivo de la documentación recibida."
                    onDownload={handleDownloadXLSX}
                />
            </div>
        </SectionCard>
    );
};

interface DownloadCardProps {
    title: string;
    format: string;
    description: string;
    onDownload: () => void;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ title, format, description, onDownload }) => (
    <div className="border border-gray-200 rounded-lg p-5 flex flex-col items-start bg-gray-50 hover:shadow-md transition-shadow">
        <div className="flex items-baseline mb-3">
            <h4 className="font-bold text-lg text-gray-800">{title}</h4>
            <span className={`ml-2 text-sm font-mono px-2 py-0.5 rounded ${format === '.xlsx' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{format}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        <button onClick={onDownload} className="w-full mt-auto px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors">
            <i className="fas fa-download mr-2"></i>
            Descargar
        </button>
    </div>
);

export default DownloadSection;