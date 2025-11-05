import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DocumentTable from './components/DocumentTable';
import Checklist from './components/Checklist';
import TemplateGenerator from './components/TemplateGenerator';
import DownloadSection from './components/DownloadSection';
import AuthorProfile from './components/AuthorProfile';
import Footer from './components/Footer';
import LegalFramework from './components/LegalFramework';
import FaqSection from './components/FaqSection';
import NextSteps from './components/NextSteps';
import Glossary from './components/Glossary';

const App: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed">
            <Header />
            <main>
                <Hero />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
                    <DocumentTable />
                    <LegalFramework />
                    <Checklist />
                    <FaqSection />
                    <Glossary />
                    <TemplateGenerator />
                    <DownloadSection />
                    <NextSteps />
                    <AuthorProfile />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;