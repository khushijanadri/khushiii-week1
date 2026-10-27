import { useState } from 'react';
import { MATERIAL_THEMES } from './types/portfolio';
import type { NavSection, MaterialTheme } from './types/portfolio';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExploreSection } from './components/ExploreSection';
import { ContactSection } from './components/ContactSection';
import { DetailModal } from './components/DetailModal';

export function App() {
  const [activeSection, setActiveSection] = useState<NavSection>(null);
  const [currentTheme, setCurrentTheme] = useState<MaterialTheme>(MATERIAL_THEMES[0]);

  const handleExploreClick = () => {
    const el = document.getElementById('about-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const exploreEl = document.getElementById('explore-section');
      if (exploreEl) {
        exploreEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Atmosphere */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
      />

      {/* Main Experience */}
      <main>
        <HeroSection
          theme={currentTheme}
          onExploreClick={handleExploreClick}
          onOpenSection={setActiveSection}
        />
        <AboutSection />
        <EducationSection />
        <ExploreSection onOpenSection={setActiveSection} />
        <ContactSection />
      </main>

      {/* Detail Slide-over / Modal for Nav Sections */}
      <DetailModal
        section={activeSection}
        onClose={() => setActiveSection(null)}
      />
    </div>
  );
}

export default App;
