import Layout from '../layout/Layout';
import Breadcrumb from '../ui/Breadcrumb';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
    const { id } = useParams();

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Breadcrumb items={[{ label: 'Projects', href: '/#projects' }, { label: 'Case Study' }]} />
                <div className="mt-8 text-center py-24">
                    <h1 className="text-4xl font-bold text-neutral-dark dark:text-white mb-4">Case Study: {id}</h1>
                    <p className="text-lg text-neutral-medium dark:text-neutral-light">
                        Detailed case study coming soon. This page will showcase the challenges, approach, and results of the project.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default CaseStudy;
