import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';

// Mock the hooks
vi.mock('../hooks/useScrollState', () => ({
    useScrollState: () => false,
}));

describe('Header', () => {
    const renderHeader = () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    };

    it('renders the logo', () => {
        renderHeader();
        expect(screen.getByText('NS')).toBeInTheDocument();
    });

    it('renders navigation links on desktop', () => {
        renderHeader();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
    });

    it('renders the theme toggle', () => {
        renderHeader();
        expect(screen.getByLabelText(/switch to/i)).toBeInTheDocument();
    });

    it('renders the hamburger menu on mobile', () => {
        renderHeader();
        expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    });

    it('opens drawer when hamburger is clicked', () => {
        renderHeader();
        const hamburger = screen.getByLabelText('Open menu');
        fireEvent.click(hamburger);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
});
