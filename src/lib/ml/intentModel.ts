// Lightweight Naive Bayes implementation
// Since we can't easily rely on external heavy libraries in this environment without full package.json control,
// we'll implement a simple Naive Bayes classifier.

export type IntentLabel = 'Job Recruiter' | 'General Visitor' | 'Tech Professional' | 'Casual Viewer';

export interface VisitorFeatures {
    timeOnPage: number;
    pagesVisited: number;
    hasRecruiterSource: boolean;
    scrollDepth: number;
    isReturnVisitor: boolean;
    recruiterScore: number;
}

interface ClassStats {
    count: number;
    featureMeans: Record<keyof VisitorFeatures, number>;
    featureVariances: Record<keyof VisitorFeatures, number>;
}

export class IntentClassifier {
    private classes: Record<IntentLabel, ClassStats>;
    private totalSamples: number;

    constructor() {
        this.classes = {
            'Job Recruiter': this.initStats(),
            'General Visitor': this.initStats(),
            'Tech Professional': this.initStats(),
            'Casual Viewer': this.initStats()
        };
        this.totalSamples = 0;
    }

    private initStats(): ClassStats {
        return {
            count: 0,
            featureMeans: {
                timeOnPage: 0,
                pagesVisited: 0,
                hasRecruiterSource: 0,
                scrollDepth: 0,
                isReturnVisitor: 0,
                recruiterScore: 0
            },
            featureVariances: {
                timeOnPage: 0,
                pagesVisited: 0,
                hasRecruiterSource: 0,
                scrollDepth: 0,
                isReturnVisitor: 0,
                recruiterScore: 0
            }
        };
    }

    // Train with a single sample (incremental learning)
    // In a real scenario, we would batch train.
    public train(features: VisitorFeatures, label: IntentLabel) {
        const stats = this.classes[label];
        const n = stats.count;

        // Update counts
        stats.count++;
        this.totalSamples++;

        // Update means and variances (Welford's online algorithm)
        for (const key in features) {
            const k = key as keyof VisitorFeatures;
            const x = Number(features[k]); // Ensure number (boolean -> 0/1)
            const oldMean = stats.featureMeans[k];
            const newMean = oldMean + (x - oldMean) / stats.count;
            const oldS = stats.featureVariances[k] * n; // actually sum of squared diffs
            const newS = oldS + (x - oldMean) * (x - newMean);

            stats.featureMeans[k] = newMean;
            stats.featureVariances[k] = stats.count > 1 ? newS / (stats.count - 1) : 0;
        }
    }

    public predict(features: VisitorFeatures): IntentLabel {
        let maxProb = -Infinity;
        let bestLabel: IntentLabel = 'Casual Viewer';

        for (const label in this.classes) {
            const l = label as IntentLabel;
            const stats = this.classes[l];
            if (stats.count === 0) continue;

            // Log probability: log(P(C)) + sum(log(P(x|C)))
            let logProb = Math.log(stats.count / this.totalSamples);

            for (const key in features) {
                const k = key as keyof VisitorFeatures;
                const x = Number(features[k]);
                const mean = stats.featureMeans[k];
                const variance = stats.featureVariances[k] || 1e-9; // Avoid div by zero

                // Gaussian probability density function
                const p = (1 / Math.sqrt(2 * Math.PI * variance)) * Math.exp(-((x - mean) ** 2) / (2 * variance));
                logProb += Math.log(p + 1e-9);
            }

            if (logProb > maxProb) {
                maxProb = logProb;
                bestLabel = l;
            }
        }

        return bestLabel;
    }

    // Serialize/Deserialize to store model state in DB/File
    public toJSON() {
        return JSON.stringify({ classes: this.classes, totalSamples: this.totalSamples });
    }

    public static fromJSON(json: string): IntentClassifier {
        const data = JSON.parse(json);
        const classifier = new IntentClassifier();
        classifier.classes = data.classes;
        classifier.totalSamples = data.totalSamples;
        return classifier;
    }
}
