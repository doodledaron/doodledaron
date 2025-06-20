document.addEventListener('DOMContentLoaded', () => {
    const mockDocuments = [
        {
            id: 'doc1',
            title: 'Project Proposal Q4',
            content: `Project Title: Enhanced User Engagement Platform

Introduction:
This document outlines the proposal for developing an Enhanced User Engagement Platform.
The primary goal is to increase user interaction and retention by 25% within the next two quarters.

Key Features:
1. Personalized Content Feeds
2. Gamified Rewards System
3. Interactive User Forums
4. Real-time Notifications

Timeline:
- Phase 1 (Design & Prototyping): 4 Weeks
- Phase 2 (Development): 8 Weeks
- Phase 3 (Testing & QA): 3 Weeks
- Phase 4 (Deployment): 1 Week

Budget:
Total Estimated Cost: $150,000

Conclusion:
This platform is expected to significantly improve user satisfaction and drive business growth.
We recommend proceeding with Phase 1 immediately.`,
            summary: `This project proposal is for an "Enhanced User Engagement Platform" aiming to boost user interaction and retention by 25% in two quarters. Key features include personalized feeds, gamification, forums, and notifications. The project is divided into four phases (Design, Development, Testing, Deployment) with a total estimated budget of $150,000.`,
            insights: `**Key Insights:**
- Ambitious goal of 25% increase in engagement.
- Multi-faceted approach to features.
- Clear phased timeline.

**What's Next:**
- Secure budget approval.
- Assemble the project team for Phase 1.
- Conduct initial user research for personalization features.`
        },
        {
            id: 'doc2',
            title: 'Market Research Report - FY2023',
            content: `Market Research Report - Fiscal Year 2023

Executive Summary:
The market for cloud-based SaaS solutions saw a 15% growth in FY2023.
Key drivers include increased remote work adoption and digital transformation initiatives.
Competitor A launched a new AI-powered analytics tool, gaining 5% market share.
Our product maintains a strong position in the SMB segment but needs innovation to capture enterprise clients.

Trends:
- AI and Machine Learning integration is becoming standard.
- Data security and privacy are major concerns for customers.
- Subscription model flexibility is increasingly demanded.

Recommendations:
1. Invest in R&D for AI-driven features.
2. Enhance security protocols and obtain relevant certifications.
3. Explore tiered subscription plans for enterprise clients.`,
            summary: `The FY2023 Market Research Report indicates a 15% growth in the cloud-based SaaS market, driven by remote work and digital transformation. Competitor A gained market share with an AI tool. While strong in the SMB segment, the report recommends investing in AI, enhancing security, and offering tiered subscriptions to attract enterprise clients.`,
            insights: `**Key Insights:**
- Market is growing, but competition is fierce, especially with AI.
- Security is a critical decision factor for customers.
- Current product offering may not be suitable for enterprise scale.

**What's Next:**
- Form a task force to evaluate AI integration opportunities.
- Schedule a security audit and review certification requirements.
- Draft a proposal for new enterprise-level subscription tiers.`
        },
        {
            id: 'doc3',
            title: 'Employee Performance Review Guidelines',
            content: `Employee Performance Review Guidelines

Purpose:
To establish a fair, consistent, and transparent process for evaluating employee performance.
These guidelines apply to all full-time and part-time employees.

Process:
1. Goal Setting: At the beginning of the review period, managers and employees collaboratively set SMART goals.
2. Mid-Year Check-in: Informal discussion on progress towards goals.
3. Year-End Review: Formal assessment of performance against goals and company values.
4. Feedback & Development Plan: Discussion of results and creation of a development plan for the upcoming year.

Rating Scale:
- Exceeds Expectations
- Meets Expectations
- Needs Improvement
- Unsatisfactory

Important Considerations:
- Reviews should be based on observable behaviors and measurable results.
- Avoid bias and ensure constructive feedback.
- Documentation is key.`,
            summary: `These guidelines define a structured employee performance review process, including goal setting, mid-year check-ins, and year-end reviews. A four-point rating scale (Exceeds Expectations, Meets Expectations, Needs Improvement, Unsatisfactory) is used. The process emphasizes fairness, consistency, observable behaviors, and constructive feedback.`,
            insights: `**Key Insights:**
- Emphasis on collaborative goal setting (SMART goals).
- Structured process with multiple touchpoints.
- Clear rating scale provided.

**What's Next:**
- Schedule training for managers on conducting effective performance reviews.
- Ensure all employees are aware of these guidelines.
- Prepare templates for goal setting and review documentation.`
        }
    ];

    const documentSelector = document.getElementById('document-selector');
    const docContentPlaceholder = document.getElementById('document-content-placeholder');
    const summaryContentPlaceholder = document.getElementById('summary-content-placeholder');
    const insightsContentPlaceholder = document.getElementById('insights-content-placeholder');

    function displayDocument(doc) {
        docContentPlaceholder.innerHTML = `<pre>${doc.content}</pre>`;
        summaryContentPlaceholder.innerHTML = `<pre>${doc.summary}</pre>`;
        insightsContentPlaceholder.innerHTML = `<pre>${doc.insights}</pre>`;
    }

    function clearPlaceholders() {
        docContentPlaceholder.innerHTML = '<p>Select a document to view its content here.</p>';
        summaryContentPlaceholder.innerHTML = '<p>Summary will appear here.</p>';
        insightsContentPlaceholder.innerHTML = '<p>Insights and next steps will appear here.</p>';
    }

    mockDocuments.forEach(doc => {
        const button = document.createElement('button');
        button.textContent = doc.title;
        button.addEventListener('click', () => displayDocument(doc));
        documentSelector.appendChild(button);
    });

    // Initially, no document is selected
    clearPlaceholders();
});
