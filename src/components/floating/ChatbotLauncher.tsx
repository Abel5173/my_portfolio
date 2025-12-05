import { FormEvent, useMemo, useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, SendHorizontal, Sparkles, X, Loader2 } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { useTheme } from '../ThemeProvider';

// --- Type Definitions (Unchanged) ---
export interface ChatbotLauncherProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

type MessageSender = 'ai' | 'user';

interface Message {
    id: number;
    sender: MessageSender;
    text: string;
    timestamp: string;
    isTyping?: boolean;
}

// --- Framer Motion Components ---
const MotionOverlay = motion(Dialog.Overlay);
const MotionContent = motion(Dialog.Content);

// --- Seeded Messages (Unchanged) ---
const seededMessages: Message[] = [
    {
        id: 1,
        sender: 'ai',
        text: 'System online. I am **Aura**, your dedicated front-end co-pilot. Query my project matrix, technical stack, or availability.',
        timestamp: '09:30 AM',
    },
    {
        id: 2,
        sender: 'user',
        text: 'Initiate summary of the most recent project deployment.',
        timestamp: '09:31 AM',
    },
    {
        id: 3,
        sender: 'ai',
        text: 'Acknowledged. Project **Nebula-Hiring-Matrix** is an AI-powered talent acquisition interface built on React/TypeScript with a custom WebGL visualization layer. Full case study data is available upon request.',
        timestamp: '09:32 AM',
    },
];

// --- Main Component ---
export function ChatbotLauncher({ open, onOpenChange }: ChatbotLauncherProps) {
    const [messages, setMessages] = useState<Message[]>(seededMessages);
    const [inputValue, setInputValue] = useState('');
    const [isSending, setIsSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    // Scroll to the latest message on update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const formattedTime = useMemo(
        () => new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: 'numeric' }),
        [],
    );

    const handleSend = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (!value || isSending) return;

        setIsSending(true);
        const timestamp = formattedTime.format(new Date());

        // 1. Add user message immediately
        const optimisticUser: Message = {
            id: Date.now(),
            sender: 'user',
            text: value,
            timestamp,
        };

        // 2. Add an 'AI is typing' placeholder
        const typingMessage: Message = {
            id: Date.now() + 1,
            sender: 'ai',
            text: 'Aura is generating response...',
            timestamp,
            isTyping: true,
        };

        setMessages((prev) => [...prev, optimisticUser, typingMessage]);
        setInputValue('');

        // 3. Simulate API Call / AI response delay
        setTimeout(() => {
            setMessages((prev) => {
                // Find and remove the typing placeholder
                const updatedMessages = prev.filter(m => !m.isTyping);

                // Add the final AI reply
                const finalReply: Message = {
                    id: Date.now() + 2,
                    sender: 'ai',
                    text: 'Data packet received. I\'ll compile the requested summary into a secure transmission and deliver it to your inbox within T-minus 60 seconds.',
                    timestamp: formattedTime.format(new Date()),
                };

                return [...updatedMessages, finalReply];
            });
            setIsSending(false);
        }, 1500); // 1.5 second delay for 'typing'
    };

    // --- Aesthetic Configuration (Strict B/W) ---
    // Universal "accent" is now high-contrast gray or inverse black/white
    const primaryBg = isDark ? 'bg-neutral-950' : 'bg-white';
    const primaryText = isDark ? 'text-neutral-50' : 'text-neutral-900';
    const subtleText = isDark ? 'text-neutral-400' : 'text-neutral-500';
    const accentBorder = isDark ? 'border-white/20' : 'border-black/20';
    const glassOverlay = isDark ? 'bg-neutral-950/80' : 'bg-white/90';
    const glassBorder = isDark ? 'border-white/10' : 'border-black/10';

    // UI Theme Classes
    const uiClasses = {
        dialog: clsx(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-lg max-h-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-3xl border shadow-2xl backdrop-blur-3xl overflow-hidden p-6",
            glassBorder,
            glassOverlay,
            primaryText
        ),
        closeButton: clsx(
            "inline-flex h-8 w-8 items-center justify-center rounded-full border transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2",
            isDark
                ? "border-white/10 bg-neutral-900/60 text-neutral-400 hover:text-white focus-visible:ring-white/50"
                : "border-black/5 bg-white/80 text-neutral-500 hover:text-black focus-visible:ring-black/50"
        ),
        chatWindow: clsx(
            "flex flex-col gap-4 overflow-hidden rounded-2xl p-4 border h-80 transition-colors duration-300",
            isDark
                ? "bg-neutral-900/50 border-white/10"
                : "bg-neutral-50/80 border-black/10"
        ),
        inputContainer: clsx(
            "flex items-center gap-2 rounded-xl border p-2 transition-colors duration-300",
            isDark
                ? "border-white/20 bg-neutral-900/50"
                : "border-black/20 bg-white/90"
        ),
        botIcon: clsx(
            "flex h-8 w-8 items-center justify-center rounded-lg",
            isDark
                ? "bg-white/10 text-white/80" // B/W accent
                : "bg-black/10 text-black/80", // B/W accent
        ),
        sendButton: (isSending: boolean) => clsx(
            "inline-flex h-8 w-8 items-center justify-center rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            isSending
                ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                : clsx(
                    // Interactive elements are pure B/W contrast
                    isDark
                        ? 'bg-white text-black hover:scale-[1.05] active:scale-[0.98] focus-visible:ring-white focus-visible:ring-offset-black'
                        : 'bg-black text-white hover:scale-[1.05] active:scale-[0.98] focus-visible:ring-black focus-visible:ring-offset-white'
                )
        ),
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {open ? (
                    <Dialog.Portal forceMount>
                        {/* FIX: MotionOverlay handles the outside click.
                            Ensure its z-index is lower than the content but covers the page.
                        */}
                        <MotionOverlay
                            className={clsx("fixed inset-0 z-40 backdrop-blur-sm", isDark ? "bg-black/60" : "bg-black/40")}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <MotionContent
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                            className={uiClasses.dialog}
                        >
                            {/* Header Section */}
                            <div className="flex items-start justify-between gap-4 pb-4">
                                <div>
                                    <div className={clsx("flex items-center gap-2 text-xs font-semibold uppercase tracking-widest", subtleText)}>
                                        <Sparkles className="h-4 w-4" />
                                        AI Assistant
                                    </div>
                                    <Dialog.Title className={clsx("mt-1 text-2xl font-bold", primaryText)}>Command Console</Dialog.Title>
                                    <Dialog.Description className={clsx("text-sm", subtleText)}>
                                        Initialize queries for project data, technical specs, or contact routing.
                                    </Dialog.Description>
                                </div>
                                <Dialog.Close asChild>
                                    {/* FIX: Dialog.Close button should be standard HTML button */}
                                    <button
                                        className={uiClasses.closeButton}
                                        aria-label="Close AI assistant"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </Dialog.Close>
                            </div>

                            {/* Chat Window Container */}
                            <div className={uiClasses.chatWindow}>
                                {/* Connection Status (Pure B/W styling) */}
                                <div className={clsx("flex items-center gap-2 text-xs font-semibold uppercase tracking-widest", subtleText)}>
                                    <span
                                        className={clsx("flex h-2 w-2 rounded-full", isDark ? "bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]" : "bg-black shadow-[0_0_5px_rgba(0,0,0,0.8)]")}
                                        aria-hidden
                                    />
                                    Connection Secure // 24/7
                                </div>

                                {/* Messages Feed */}
                                <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-2">
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className={clsx('flex flex-col gap-1 text-sm', message.sender === 'user' ? 'items-end' : 'items-start')}
                                        >
                                            <div
                                                className={clsx(
                                                    'max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-xl transition-all duration-300',
                                                    // User Message Style: Pure Black/White High contrast
                                                    message.sender === 'user'
                                                        ? 'font-medium rounded-br-none bg-black text-white'
                                                        // AI Message Style: Theme-aware contrast
                                                        : clsx(
                                                            'rounded-tl-none',
                                                            isDark
                                                                ? 'bg-neutral-800 border border-white/5 text-white'
                                                                : 'bg-neutral-100 border border-black/10 text-black'
                                                        ),
                                                    // Typing indicator uses subtle text color
                                                    message.isTyping && 'animate-pulse'
                                                )}
                                            >
                                                {message.isTyping ? (
                                                    <span className={clsx(subtleText)}>
                                                        {message.text}
                                                    </span>
                                                ) : (
                                                    // Simple markdown/bolding support
                                                    <span dangerouslySetInnerHTML={{ __html: message.text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
                                                )}
                                            </div>
                                            <span className={clsx("text-[10px] uppercase tracking-wider", isDark ? "text-gray-600" : "text-gray-400")}>{message.timestamp}</span>
                                        </motion.div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Form */}
                                <form onSubmit={handleSend} className={uiClasses.inputContainer}>
                                    <div className={uiClasses.botIcon}>
                                        <Bot className="h-5 w-5" aria-hidden />
                                    </div>
                                    <input
                                        className={clsx("flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500", primaryText)}
                                        placeholder="Enter command or query..."
                                        value={inputValue}
                                        onChange={(event) => setInputValue(event.target.value)}
                                        aria-label="Message the AI assistant"
                                        disabled={isSending}
                                    />
                                    <button
                                        type="submit"
                                        className={uiClasses.sendButton(isSending)}
                                        aria-label="Send message"
                                        disabled={isSending || inputValue.trim() === ''}
                                    >
                                        {isSending ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <SendHorizontal className="h-4 w-4" />
                                        )}
                                    </button>
                                </form>
                            </div>
                        </MotionContent>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    );
}
