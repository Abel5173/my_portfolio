export interface VisitorBehavior {
    source?: string;
    path: string;
    durationSeconds?: number;
    isReturnVisitor?: boolean;
    scrolledToBottom?: boolean;
    downloadedResume?: boolean;
    pagesVisitedCount?: number;
    isRapidBounce?: boolean;
}

export const calculateRecruiterScore = (behavior: VisitorBehavior): number => {
    let score = 0;

    // +5: Visitor comes from LinkedIn message, job application portal, or recruiter-type UTM
    const recruiterSources = ['linkedin', 'job', 'recruiter', 'application'];
    if (behavior.source && recruiterSources.some(s => behavior.source!.toLowerCase().includes(s))) {
        score += 5;
    }

    // +3: Visitor views pages like “CV”, “Experience”, “Projects”
    const recruiterPages = ['cv', 'experience', 'projects', 'resume'];
    if (recruiterPages.some(p => behavior.path.toLowerCase().includes(p))) {
        score += 3;
    }

    // +2: Long session (> 90 seconds)
    if (behavior.durationSeconds && behavior.durationSeconds > 90) {
        score += 2;
    }

    // +2: Returns within 48 hours (handled by caller checking history, here we just check flag)
    if (behavior.isReturnVisitor) {
        score += 2;
    }

    // +1: Scrolls to bottom of project pages
    if (behavior.scrolledToBottom) {
        score += 1;
    }

    // +10: Downloads resume
    if (behavior.downloadedResume) {
        score += 10;
    }

    // +15: Visits more than 3 pages in one session
    if (behavior.pagesVisitedCount && behavior.pagesVisitedCount > 3) {
        score += 15;
    }

    // –3: Rapid bounce (< 3 seconds)
    if (behavior.isRapidBounce) {
        score -= 3;
    }

    return score;
};

export const getRecruiterLabel = (score: number): string => {
    if (score > 20) return 'High-Intent Recruiter';
    if (score >= 13) return 'Likely Recruiter';
    if (score >= 6) return 'Curious Professional';
    return 'Casual Visitor';
};
