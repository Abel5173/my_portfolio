import { FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AtSign, Mail, PhoneCall, User, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export interface ContactModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const MotionOverlay = motion(Dialog.Overlay);
const MotionContent = motion(Dialog.Content);
const SUPPORT_EMAIL = 'hello@abel.dev';

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = (formData.get('name') as string)?.trim() ?? '';
        const email = (formData.get('email') as string)?.trim() ?? '';
        const message = (formData.get('message') as string)?.trim() ?? '';
        const timestamp = new Date().toLocaleString();

        const bodyLines = [
            `Name: ${name || 'Anonymous'}`,
            `Email: ${email || 'Not provided'}`,
            `Sent: ${timestamp}`,
            '',
            message || 'Hi Abel, I would love to connect!',
        ];

        const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Portfolio Support Request')}&body=${encodeURIComponent(
            bodyLines.join('\n'),
        )}`;

        if (typeof window !== 'undefined') {
            window.open(mailto, '_blank');
        }

        event.currentTarget.reset();
        onOpenChange(false);
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal>
                        <Dialog.Overlay asChild>
                            <motion.div
                                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        </Dialog.Overlay>
                        <Dialog.Content asChild>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                                className="fixed z-50 w-full max-w-md rounded-3xl border border-white/10 bg-white/95 p-6 text-neutral-900 shadow-2xl backdrop-blur-2xl dark:bg-neutral-950/90 dark:text-neutral-100 inset-x-auto bottom-0 right-32 m-6 transform-none"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <Dialog.Title className="text-2xl font-semibold">Contact support</Dialog.Title>
                                        <Dialog.Description className="text-sm text-neutral-500 dark:text-neutral-400">
                                            Drop a quick note and I'll respond personally. Prefer email? Use the direct link below.
                                        </Dialog.Description>
                                    </div>
                                    <Dialog.Close asChild>
                                        <button
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/80 text-neutral-500 transition hover:scale-105 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10 dark:bg-neutral-900/60"
                                            aria-label="Close contact form"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    </Dialog.Close>
                                </div>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <label className="flex flex-col gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                        Full name
                                        <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white/80 p-3 dark:border-white/10 dark:bg-neutral-900/60">
                                            <User className="h-4 w-4 text-neutral-400" aria-hidden />
                                            <input
                                                required
                                                name="name"
                                                className="flex-1 bg-transparent text-base font-normal text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white"
                                                placeholder="Ada Lovelace"
                                            />
                                        </div>
                                    </label>

                                    <label className="flex flex-col gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                        Email
                                        <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white/80 p-3 dark:border-white/10 dark:bg-neutral-900/60">
                                            <Mail className="h-4 w-4 text-neutral-400" aria-hidden />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                className="flex-1 bg-transparent text-base font-normal text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white"
                                                placeholder="you@amazingstartup.com"
                                            />
                                        </div>
                                    </label>

                                    <label className="flex flex-col gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                        Message
                                        <div className="rounded-2xl border border-black/5 bg-white/80 p-3 dark:border-white/10 dark:bg-neutral-900/60">
                                            <textarea
                                                required
                                                name="message"
                                                rows={4}
                                                className="w-full resize-none bg-transparent text-base text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white"
                                                placeholder="Tell me about the role, project goals, or how I can support."
                                            />
                                        </div>
                                    </label>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 dark:bg-white dark:text-neutral-900 sm:w-auto"
                                        >
                                            <PhoneCall className="h-4 w-4" />
                                            Send request
                                        </button>
                                        <a
                                            href={`mailto:${SUPPORT_EMAIL}`}
                                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 px-4 py-3 text-sm font-medium text-neutral-600 transition hover:border-neutral-300 dark:border-white/10 dark:text-neutral-300"
                                        >
                                            <AtSign className="h-4 w-4" />
                                            Email me instead
                                        </a>
                                    </div>
                                </form>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
