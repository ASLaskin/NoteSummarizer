// sampleSummaries.ts

export const sampleSummaries = {
    // Include bullet points, include slide titles
    withBulletsWithTitles: `# Human-Computer Interaction - Usability Testing Summary

## What is Usability
• Usability is the optimization of user's interactions with the product
• It is not a unidimensional construct - simply saying a system is 'usable' or 'not usable' is not helpful
• Key dimensions include effectiveness, efficiency, safety, utility, learnability, and memorability

## Goals of Usability Testing
• Establish a baseline of user performance and user-satisfaction levels for future evaluations
• Establish and validate user performance measures
• Identify potential design concerns to improve efficiency, productivity, and end-user satisfaction
• Common errors include navigation errors, presentation errors, and control usage problems

## Usability Metrics
• Effectiveness metrics: Completion rate (average 78%) and number of errors (average 0.7 per task)
• Efficiency metrics: Task time-to-completion (End Time - Start Time)
• Self-reported usability: System Usability Scale (SUS), After-Scenario Questionnaire (ASQ)
• Quantitative data helps communicate with stakeholders and compare product usability

## Usability Testing Process
• Performed in laboratory-like conditions with highly controlled environment
• Users given specific, pre-determined tasks with detailed logging and videotaping
• Formal process includes planning, piloting, script preparation, subject recruitment, and data analysis
• Think-aloud protocol provides qualitative insights into user perception and interpretation

## Usability Task Design
• Scenario tasks combine persona, scenario, and context details
• Direct tasks are more instructional in nature
• Closed tasks have specific correct answers, while open-ended tasks allow exploration
• Consider appropriate level of detail and task dependencies when designing`,

    // Include bullet points, no slide titles
    withBulletsNoTitles: `• Usability is the optimization of user's interactions with the product
• It is not a unidimensional construct - simply saying a system is 'usable' or 'not usable' is not helpful
• Key dimensions include effectiveness, efficiency, safety, utility, learnability, and memorability
• Establish a baseline of user performance and user-satisfaction levels for future evaluations
• Establish and validate user performance measures
• Identify potential design concerns to improve efficiency, productivity, and end-user satisfaction
• Common errors include navigation errors, presentation errors, and control usage problems
• Effectiveness metrics: Completion rate (average 78%) and number of errors (average 0.7 per task)
• Efficiency metrics: Task time-to-completion (End Time - Start Time)
• Self-reported usability: System Usability Scale (SUS), After-Scenario Questionnaire (ASQ)
• Quantitative data helps communicate with stakeholders and compare product usability
• Performed in laboratory-like conditions with highly controlled environment
• Users given specific, pre-determined tasks with detailed logging and videotaping
• Formal process includes planning, piloting, script preparation, subject recruitment, and data analysis
• Think-aloud protocol provides qualitative insights into user perception and interpretation
• Scenario tasks combine persona, scenario, and context details
• Direct tasks are more instructional in nature
• Closed tasks have specific correct answers, while open-ended tasks allow exploration
• Consider appropriate level of detail and task dependencies when designing`,

    // No bullet points, include slide titles
    noBulletsWithTitles: `# Human-Computer Interaction - Usability Testing Summary

## What is Usability
Usability is the optimization of user's interactions with the product. It is not a unidimensional construct, which is why simply saying a system is 'usable' or 'not usable' is not helpful. Key dimensions include effectiveness, efficiency, safety, utility, learnability, and memorability.

## Goals of Usability Testing
The primary goals are to establish a baseline of user performance and user-satisfaction levels for future evaluations, establish and validate user performance measures, and identify potential design concerns to improve efficiency, productivity, and end-user satisfaction. Common errors include navigation errors, presentation errors, and control usage problems.

## Usability Metrics
Effectiveness metrics include completion rate (average 78%) and number of errors (average 0.7 per task). Efficiency metrics focus on task time-to-completion calculated as End Time minus Start Time. Self-reported usability measures include the System Usability Scale (SUS) and After-Scenario Questionnaire (ASQ). Quantitative data helps communicate with stakeholders and compare product usability.

## Usability Testing Process
Usability testing is performed in laboratory-like conditions with a highly controlled environment. Users are given specific, pre-determined tasks with detailed logging and videotaping. The formal process includes planning, piloting, script preparation, subject recruitment, and data analysis. Think-aloud protocol provides qualitative insights into user perception and interpretation.

## Usability Task Design
Scenario tasks combine persona, scenario, and context details, while direct tasks are more instructional in nature. Closed tasks have specific correct answers, while open-ended tasks allow exploration. Important considerations include appropriate level of detail and task dependencies when designing.`,

    // No bullet points, no slide titles
    noBulletsNoTitles: `Usability is the optimization of user's interactions with the product. It is not a unidimensional construct, which is why simply saying a system is 'usable' or 'not usable' is not helpful. Key dimensions include effectiveness, efficiency, safety, utility, learnability, and memorability.

The primary goals of usability testing are to establish a baseline of user performance and user-satisfaction levels for future evaluations, establish and validate user performance measures, and identify potential design concerns to improve efficiency, productivity, and end-user satisfaction. Common errors include navigation errors, presentation errors, and control usage problems.

Effectiveness metrics include completion rate (average 78%) and number of errors (average 0.7 per task). Efficiency metrics focus on task time-to-completion calculated as End Time minus Start Time. Self-reported usability measures include the System Usability Scale (SUS) and After-Scenario Questionnaire (ASQ). Quantitative data helps communicate with stakeholders and compare product usability.

Usability testing is performed in laboratory-like conditions with a highly controlled environment. Users are given specific, pre-determined tasks with detailed logging and videotaping. The formal process includes planning, piloting, script preparation, subject recruitment, and data analysis. Think-aloud protocol provides qualitative insights into user perception and interpretation.

Scenario tasks combine persona, scenario, and context details, while direct tasks are more instructional in nature. Closed tasks have specific correct answers, while open-ended tasks allow exploration. Important considerations include appropriate level of detail and task dependencies when designing.`
};

export function getSampleSummary(includeBulletPoints: boolean, includeSlideTitles: boolean): string {
    if (includeBulletPoints && includeSlideTitles) {
        return sampleSummaries.withBulletsWithTitles;
    } else if (includeBulletPoints && !includeSlideTitles) {
        return sampleSummaries.withBulletsNoTitles;
    } else if (!includeBulletPoints && includeSlideTitles) {
        return sampleSummaries.noBulletsWithTitles;
    } else {
        return sampleSummaries.noBulletsNoTitles;
    }
}