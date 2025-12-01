import { ChevronRight, Home } from 'lucide-react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center text-sm font-medium text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors">
                        <Home size={16} className="mr-2" />
                        Home
                    </a>
                </li>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <ChevronRight size={16} className="text-neutral-light dark:text-neutral-medium mx-1" />
                            {item.href ? (
                                <a href={item.href} className="ml-1 text-sm font-medium text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors">
                                    {item.label}
                                </a>
                            ) : (
                                <span className="ml-1 text-sm font-medium text-neutral-dark dark:text-white md:ml-2">
                                    {item.label}
                                </span>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
        })
    ).isRequired,
};

export default Breadcrumb;
