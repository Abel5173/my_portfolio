import { useEffect, useRef } from 'react';

/**
 * Hook to trap focus within a container.
 * 
 * @param isOpen - Whether the trap should be active
 * @param onClose - Callback when Escape key is pressed
 * @returns RefObject to attach to the container
 */
export function useFocusTrap(isOpen: boolean, onClose?: () => void) {
    const containerRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            // Save currently focused element
            previousFocusRef.current = document.activeElement as HTMLElement;

            // Focus the first focusable element in the container
            const focusableElements = containerRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements && focusableElements.length > 0) {
                (focusableElements[0] as HTMLElement).focus();
            }

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose?.();
                    return;
                }

                if (e.key === 'Tab') {
                    if (!containerRef.current) return;

                    const focusable = containerRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );

                    if (focusable.length === 0) return;

                    const firstElement = focusable[0] as HTMLElement;
                    const lastElement = focusable[focusable.length - 1] as HTMLElement;

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                // Restore focus
                if (previousFocusRef.current) {
                    previousFocusRef.current.focus();
                }
            };
        }
    }, [isOpen, onClose]);

    return containerRef;
}
