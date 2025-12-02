import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Copy, Link2, Linkedin, MessageCircle, Share2, Twitter, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export interface ShareModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    shareUrl?: string;
    shareTitle?: string;
    shareText?: string;
}

const MotionOverlay = motion(Dialog.Overlay);
const MotionContent = motion(Dialog.Content);

const defaultUrl = 'https://abelola.dev';
const defaultTitle = 'Abel Ola | Product-minded AI Engineer';
const defaultText = 'Explore the portfolio, case studies, and realtime analytics that power my work.';

export function ShareModal({
    open,
    onOpenChange,
    shareUrl = defaultUrl,
    shareTitle = defaultTitle,
    shareText = defaultText,
}: ShareModalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(shareUrl);
            } else if (typeof document !== 'undefined') {
                const textarea = document.createElement('textarea');
                textarea.value = shareUrl;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (error) {
            console.error('Unable to copy link', error);
        }
    };

    const shareTargets = [
        {
            label: 'LinkedIn',
            icon: Linkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        },
        {
            label: 'X (Twitter)',
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`,
        },
        {
            label: 'WhatsApp',
            icon: MessageCircle,
            href: `https://wa.me/?text=${encodeURIComponent(`${shareTitle} — ${shareUrl}`)}`,
        },
    ];

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
                            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-white/95 p-6 text-neutral-900 shadow-2xl backdrop-blur-2xl dark:bg-neutral-950/90 dark:text-neutral-100"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <Dialog.Title className="text-2xl font-semibold">Share Abel\'s portfolio</Dialog.Title>
                                    <Dialog.Description className="text-sm text-neutral-500 dark:text-neutral-400">
                                        Amplify the story. Send a curated snapshot to a teammate, recruiter, or friend.
                                    </Dialog.Description>
                                </div>
                                <Dialog.Close asChild>
                                    <button
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/80 text-neutral-500 transition hover:scale-105 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10 dark:bg-neutral-900/60"
                                        aria-label="Close share dialog"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </Dialog.Close>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl border border-black/5 bg-white/80 p-4 dark:border-white/10 dark:bg-neutral-900/60">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Direct link</p>
                                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <div className="flex flex-1 items-center gap-2 rounded-xl border border-black/5 bg-white px-3 py-2 text-sm font-medium dark:border-white/10 dark:bg-neutral-900/50">
                                            <Link2 className="h-4 w-4 text-neutral-400" aria-hidden />
                                            <span className="truncate">{shareUrl}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleCopy}
                                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 dark:bg-white dark:text-neutral-900"
                                        >
                                            <Copy className="h-4 w-4" />
                                            {copied ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {shareTargets.map((target) => (
                                        <a
                                            key={target.label}
                                            href={target.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white/80 px-4 py-4 text-center text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10 dark:bg-neutral-900/60 dark:text-neutral-100"
                                        >
                                            <target.icon className="h-5 w-5" aria-hidden />
                                            {target.label}
                                        </a>
                                    ))}
                                </div>

                                <div className="rounded-2xl border border-dashed border-black/10 bg-white/60 p-4 text-sm text-neutral-500 dark:border-white/10 dark:bg-neutral-900/30 dark:text-neutral-400">
                                    <p className="font-medium text-neutral-800 dark:text-neutral-100">Quick pitch</p>
                                    <p className="mt-1">{shareText}</p>
                                    <p className="mt-2 text-xs uppercase tracking-wide text-neutral-400">{shareTitle}</p>
                                </div>

                                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                                    <Share2 className="h-4 w-4" />
                                    Works best on mobile share sheets.
                                </p>
                            </div>
                        </MotionContent>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    );
}
