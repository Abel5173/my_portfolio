import Header from '../Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import useTrackVisitor from '../../hooks/useTrackVisitor';
import FloatingActions from '../floating/FloatingActions';

const Layout = ({ children }) => {
    useTrackVisitor();

    return (
        <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300 relative">
            {/* Global Noise Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            <Header />
            <Sidebar />
            <main className="flex-grow pt-16 md:pt-0 md:pl-32 transition-all duration-300">
                {children}
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
