import { Header } from '../Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-neutral-lightest dark:bg-neutral-black transition-colors duration-300">
            <Header />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
