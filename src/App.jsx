import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import SecondSection from './components/SecondSection';
import JourneyTimeline from './components/JourneyTimeline';
import SpecialistsTeam from './components/SpecialistsTeam';
import CaseStudiesDetail from './components/CaseStudiesDetail';
import UrgencyBanner from './components/UrgencyBanner';
import FooterMassive from './components/FooterMassive';
import QuoteModal from './components/QuoteModal';
import ServiceDetailModal from './components/ServiceDetailModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F1115] selection:bg-[#E85A2A] selection:text-white">
      {/* 1. Global Floating Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* 2. Scroll Storytelling Hero Canvas (240 Frames Lerp Engine) */}
      <HeroCanvas onOpenQuote={handleOpenQuote} />

      {/* 3. Second Section: About Tu Constructora Proof + Complete Roofing Solutions Carousel */}
      <SecondSection onSelectService={handleSelectService} />

      {/* 4. Interactive Journey Timeline (2001 - 2024 Milestones) */}
      <JourneyTimeline />

      {/* 5. Specialists Team & Principles Behind Every Property */}
      <SpecialistsTeam />

      {/* 6. Detailed Architectural Transformation Case Study */}
      <CaseStudiesDetail onOpenQuote={handleOpenQuote} />

      {/* 7. High-Energy Full Orange Conversion Banner */}
      <UrgencyBanner onOpenQuote={handleOpenQuote} />

      {/* 8. Massive Dark Theme Footer */}
      <FooterMassive onOpenQuote={handleOpenQuote} />

      {/* Interactive Inspection & Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
      />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={handleCloseServiceModal}
        onBookInspection={handleOpenQuote}
      />
    </div>
  );
}
