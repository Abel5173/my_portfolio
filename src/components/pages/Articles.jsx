import Layout from '../layout/Layout';
import Breadcrumb from '../ui/Breadcrumb';

const Articles = () => {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Breadcrumb items={[{ label: 'Articles' }]} />
                <div className="mt-8 text-center py-24">
                    <h1 className="text-4xl font-bold text-neutral-dark dark:text-white mb-4">Articles & Insights</h1>
                    <p className="text-lg text-neutral-medium dark:text-neutral-light">
                        Coming soon. I&apos;ll be sharing my thoughts on AI, software engineering, and the future of tech.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Articles;
