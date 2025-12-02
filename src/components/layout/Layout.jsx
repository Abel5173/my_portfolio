import Header from '../Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import useTrackVisitor from '../../hooks/useTrackVisitor';
import FloatingActions from '../floating/FloatingActions';

const Layout = ({ children }) => {
    useTrackVisitor();

    return (
        <div className="min-h-screen flex flex-col bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]
from-[#fef7dc]via-[#e6ddc6]to-[#c2b8a3] dark:bg-neutral-black transition-colors duration-300">
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
