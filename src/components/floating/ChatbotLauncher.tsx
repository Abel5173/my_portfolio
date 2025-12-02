import { FormEvent, useMemo, useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, SendHorizontal, Sparkles, X, Loader2 } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';

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
    // New: for showing a typing state
    isTyping?: boolean; 
}

// --- Framer Motion Components ---
// Use the motion-wrapped components outside the function for better performance
const MotionOverlay = motion(Dialog.Overlay);
const MotionContent = motion(Dialog.Content);

// --- Seeded Messages (Updated for a futuristic tone) ---
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
    const [isSending, setIsSending] = useState(false); // New state for input loading
    const messagesEndRef = useRef<HTMLDivElement>(null);

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

    const gradientClass = 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg';
    const accentColor = 'text-[#00ffff]'; // Cyan/Aqua for a digital accent

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {open ? (
                    <Dialog.Portal forceMount>
                        {/* High-Contrast Overlay */}
                        <MotionOverlay
                            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        {/* Futuristic Panel (Slide from Right) */}
                        <MotionContent
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col gap-6 p-6 text-white border-l border-white/20 bg-black/95 shadow-2xl backdrop-blur-xl"
                        >
                            {/* Header Section */}
                            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                                <div>
                                    <div className={clsx("flex items-center gap-2 text-sm font-light uppercase tracking-widest", accentColor)}>
                                        <Sparkles className="h-4 w-4" />
                                        Live Co-Pilot // AURA
                                    </div>
                                    <Dialog.Title className="mt-1 text-3xl font-extrabold tracking-tight">
                                        Command Console
                                    </Dialog.Title>
                                    <Dialog.Description className="text-sm text-gray-400">
                                        Initialize queries for project data, technical specs, or contact routing.
                                    </Dialog.Description>
                                </div>
                                {/* Close Button - Futuristic Look */}
                                <Dialog.Close asChild>
                                    <button
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                        aria-label="Close AI chatbot panel"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </Dialog.Close>
                            </div>

                            {/* Chat Window Container */}
                            <div className={clsx("flex flex-1 flex-col gap-4 overflow-hidden rounded-xl p-4", gradientClass)}>
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                    <span className={clsx("flex h-2 w-2 rounded-full", accentColor, "shadow-[0_0_5px_#00ffff]")} aria-hidden />
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
                                                    'max-w-[85%] rounded-xl px-4 py-3 text-sm shadow-xl transition-all',
                                                    // User Message Style: Black/Dark with White text
                                                    message.sender === 'user'
                                                        ? 'bg-white text-black font-medium rounded-br-none'
                                                        // AI Message Style: Light Gray/White with a subtle gradient/border
                                                        : 'bg-black/50 border border-white/10 text-white rounded-tl-none',
                                                    message.isTyping && 'animate-pulse' // Typing animation
                                                )}
                                            >
                                                {message.isTyping ? (
                                                    <span className={clsx(accentColor)}>
                                                        {message.text}
                                                    </span>
                                                ) : (
                                                    // Simple markdown/bolding support
                                                    <span dangerouslySetInnerHTML={{ __html: message.text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
                                                )}
                                            </div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-500">{message.timestamp}</span>
                                        </motion.div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Form */}
                                <form onSubmit={handleSend} className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/50 p-2 shadow-inner">
                                    <div className={clsx("flex h-10 w-10 items-center justify-center rounded-lg bg-white/10", accentColor)}>
                                        <Bot className="h-5 w-5" aria-hidden />
                                    </div>
                                    <input
                                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-600 text-white"
                                        placeholder="Enter command or query..."
                                        value={inputValue}
                                        onChange={(event) => setInputValue(event.target.value)}
                                        aria-label="Message the AI assistant"
                                        disabled={isSending}
                                    />
                                    <button
                                        type="submit"
                                        className={clsx(
                                            "inline-flex h-10 w-10 items-center justify-center rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                                            isSending 
                                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                                : 'bg-white text-black hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-white'
                                        )}
                                        aria-label="Send message"
                                        disabled={isSending}
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