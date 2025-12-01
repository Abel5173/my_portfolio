import { Header } from '../Header';

export const NavPlayground = () => {
    return (
        <div className="min-h-[200vh] bg-neutral-lightest dark:bg-neutral-black transition-colors duration-300">
            <Header />

            <main className="pt-24 px-4 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-8">
                    Navigation Playground
                </h1>

                <div className="space-y-8">
                    <section className="p-6 bg-surface rounded-lg shadow-sm border border-border">
                        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                        <ul className="list-disc list-inside space-y-2 text-neutral-medium dark:text-neutral-light">
                            <li>Scroll down to see the header transform (compact mode + frosted glass).</li>
                            <li>Resize the window to test the mobile drawer (breakpoint: 768px).</li>
                            <li>Click the theme toggle to switch between Light and Dark modes.</li>
                            <li>Use the Tab key to navigate through the links and verify focus styles.</li>
                        </ul>
                    </section>

                    <section className="p-6 bg-surface rounded-lg shadow-sm border border-border">
                        <h2 className="text-2xl font-semibold mb-4">Content Placeholder</h2>
                        <p className="text-neutral-medium dark:text-neutral-light mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="h-64 bg-neutral-light/20 rounded-md animate-pulse"></div>
                    </section>

                    {/* More content to force scroll */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <section key={i} className="p-6 bg-surface rounded-lg shadow-sm border border-border">
                            <h2 className="text-xl font-semibold mb-2">Section {i + 1}</h2>
                            <p className="text-neutral-medium dark:text-neutral-light">
                                Scrolling content to test sticky header behavior...
                            </p>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default NavPlayground;
