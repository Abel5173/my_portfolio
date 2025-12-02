import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, Star, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export interface FeedbackModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const MotionOverlay = motion(Dialog.Overlay);
const MotionContent = motion(Dialog.Content);

export function FeedbackModal({ open, onOpenChange }: FeedbackModalProps) {
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (submitting) return;

        setSubmitting(true);
        const formData = new FormData(event.currentTarget);
        const payload = Object.fromEntries(formData.entries());

        // Fake API request
        setTimeout(() => {
            console.info('Feedback received', payload);
            setSent(true);
            setSubmitting(false);
            event.currentTarget.reset();
            setTimeout(() => {
                setSent(false);
                onOpenChange(false);
            }, 1400);
        }, 900);
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {open ? (
                    <Dialog.Portal forceMount>
                        <MotionOverlay
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <MotionContent
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-white/95 p-6 text-neutral-900 shadow-2xl backdrop-blur-2xl dark:bg-neutral-950/90 dark:text-neutral-100"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <Dialog.Title className="text-2xl font-semibold">Share quick feedback</Dialog.Title>
                                    <Dialog.Description className="text-sm text-neutral-500 dark:text-neutral-400">
                                        What resonated? What can feel even better? I read every note personally.
                                    </Dialog.Description>
                                </div>
                                <Dialog.Close asChild>
                                    <button
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/80 text-neutral-500 transition hover:scale-105 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10 dark:bg-neutral-900/60"
                                        aria-label="Close feedback form"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </Dialog.Close>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                                <label className="flex flex-col gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                    How satisfied are you?
                                    <div className="flex items-center gap-3">
                                        <Star className="h-4 w-4 text-yellow-500" aria-hidden />
                                        <input
                                            type="range"
                                            name="satisfaction"
                                            min={1}
                                            max={5}
                                            defaultValue={4}
                                            className="flex-1 accent-yellow-500"
                                            aria-label="Satisfaction score between one and five"
                                        />
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                    Your message
                                    <div className="rounded-2xl border border-black/5 bg-white/80 p-3 dark:border-white/10 dark:bg-neutral-900/60">
                                        <textarea
                                            required
                                            name="message"
                                            rows={4}
                                            className="w-full resize-none bg-transparent text-base text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white"
                                            placeholder="Loved the AI case study section..."
                                        />
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                    Optional email for follow-up
                                    <div className="rounded-2xl border border-black/5 bg-white/80 p-3 dark:border-white/10 dark:bg-neutral-900/60">
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full bg-transparent text-base text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white"
                                            placeholder="you@founder.com"
                                        />
                                    </div>
                                </label>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 disabled:cursor-not-allowed disabled:opacity-60 dark:from-white dark:to-neutral-200 dark:text-neutral-900"
                                >
                                    <MessageSquare className="h-4 w-4" />
                                    {submitting ? 'Sending...' : sent ? 'Received!' : 'Submit feedback'}
                                </button>
                            </form>
                        </MotionContent>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    );
}
