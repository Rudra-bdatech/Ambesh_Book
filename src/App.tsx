import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutAuthorPage } from './pages/AboutAuthorPage';
import { WallOfLovePage } from './pages/WallOfLovePage';
import { CurriculumPage } from './pages/CurriculumPage';
import { QuizPage } from './pages/QuizPage';
import { CopyrightPage } from './pages/CopyrightPage';
import { SampleChapterModal } from './components/SampleChapterModal';
import { BookChatAssistant } from './components/BookChatAssistant';
import { Toast } from './components/Toast';

export function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash with page
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'pillars', 'about', 'wall-of-love', 'quiz', 'copyright'].includes(hash)) {
        setActivePage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-accent selection:text-white transition-colors duration-200">
      
      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Global Floating Glass Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            onOpenSampleModal={() => setIsSampleModalOpen(true)}
            setActivePage={handlePageChange}
          />
        )}

        {activePage === 'pillars' && (
          <CurriculumPage onOpenSampleModal={() => setIsSampleModalOpen(true)} />
        )}

        {activePage === 'about' && (
          <AboutAuthorPage
            onShowToast={showToast}
            onOpenSampleModal={() => setIsSampleModalOpen(true)}
          />
        )}

        {activePage === 'wall-of-love' && (
          <WallOfLovePage onShowToast={showToast} />
        )}

        {activePage === 'quiz' && (
          <QuizPage onOpenSampleModal={() => setIsSampleModalOpen(true)} />
        )}

        {activePage === 'copyright' && (
          <CopyrightPage />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={handlePageChange} onShowToast={showToast} />

      {/* Interactive AI Book Assistant */}
      <BookChatAssistant />

      {/* Sample Chapter Reading Modal */}
      <SampleChapterModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onShowToast={showToast}
      />

    </div>
  );
}

export default App;
