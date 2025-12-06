import Header from '../Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BackgroundSystem from '../background/BackgroundSystem';
import PropTypes from 'prop-types';
import useTrackVisitor from '../../hooks/useTrackVisitor';
import FloatingActions from '../floating/FloatingActions';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../ui/Breadcrumb';

const Layout = ({ children }) => {
    useTrackVisitor();
    const location = useLocation();

    // Generate breadcrumb items based on current path
    const getBreadcrumbItems = (pathname) => {
        const pathSegments = pathname.split('/').filter(Boolean);

        if (pathSegments.length === 0) return []; // Home page

        const items = [];

        if (pathSegments[0] === 'demo' && pathSegments[1] === 'nav-playground') {
            items.push({ label: 'Demo', href: '/demo' });
            items.push({ label: 'Nav Playground' });
        } else if (pathSegments[0] === 'articles') {
            if (pathSegments.length > 1 && /^\d+$/.test(pathSegments[1])) {
                // Individual article: /articles/:id
                items.push({ label: 'Articles', href: '/articles' });
                items.push({ label: 'Article' });
            } else {
                items.push({ label: 'Articles' });
            }
        } else if (pathSegments[0] === 'admin' && pathSegments[1] === 'analytics') {
            items.push({ label: 'Admin', href: '/admin' });
            items.push({ label: 'Analytics' });
        }

        return items;
    };

    const breadcrumbItems = getBreadcrumbItems(location.pathname);

    return (
        <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300 relative">
            {/* Unified Premium Background System */}
            <BackgroundSystem />

            {location.pathname === '/' && <Sidebar />}
            {breadcrumbItems.length > 0 && (
                <div className="px-4 py-3">
                    <div className="max-w-7xl mx-auto">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
            )}
            <main className="flex-grow pt-0 transition-all duration-300 relative z-10">
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
