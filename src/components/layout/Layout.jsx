import Header from '../Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BackgroundSystem from '../background/BackgroundSystem';
import PropTypes from 'prop-types';
import useTrackVisitor from '../../hooks/useTrackVisitor';
import FloatingActions from '../floating/FloatingActions';

const Layout = ({ children }) => {
    useTrackVisitor();

    return (
        <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300 relative">
            {/* Unified Premium Background System */}
            <BackgroundSystem />

            <Header />
            <Sidebar />
            <main className="flex-grow pt-16 md:pt-0 transition-all duration-300 relative z-10">
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
