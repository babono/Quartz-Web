import Link from "next/link";
import type { ReactNode } from "react";

type Faq = { question: string; answer: ReactNode; plain: string };

const faqs: Faq[] = [
  {
    question: "What is Quartz?",
    plain:
      "Quartz is a focus and digital wellness app that helps you understand and reduce excessive scrolling habits through gamification, native app shielding, and compounding rewards.",
    answer:
      "Quartz is a focus and digital wellness app that helps you understand and reduce excessive scrolling habits through gamification, native app shielding, and compounding rewards.",
  },
  {
    question: "How does Quartz help me focus?",
    plain:
      "Quartz provides screen-time monitoring, focus-building arcade activities, daily streaks, a compounding reward economy (Quartz), and reflection tools to help you build healthier digital habits over time.",
    answer:
      "Quartz provides screen-time monitoring, focus-building arcade activities, daily streaks, a compounding reward economy (Quartz), and reflection tools to help you build healthier digital habits over time.",
  },
  {
    question: "Who is Quartz for?",
    plain:
      "Anyone who finds themselves stuck in endless scrolling and wants to be more intentional with their time and attention — especially Gen Z users who know the doomscroll trap all too well.",
    answer:
      "Anyone who finds themselves stuck in endless scrolling and wants to be more intentional with their time and attention — especially Gen Z users who know the doomscroll trap all too well.",
  },
  {
    question: "Does Quartz sell my data?",
    plain:
      "Never. We don't sell your data, and we use no third-party analytics, advertising, or tracking SDKs. Your Screen Time data — the apps you limit and how you use them — stays on your device and is never transmitted. The only information stored in the cloud is what powers the leaderboard and cross-device backup, such as your display name, avatar, and Quartz balance, held securely in Apple's iCloud. See our Privacy Policy for the full details.",
    answer: (
      <>
        Never. We don&apos;t sell your data, and we use no third-party analytics,
        advertising, or tracking SDKs. Your Screen Time data — the apps you limit
        and how you use them — stays on your device and is never transmitted. The
        only information stored in the cloud is what powers the leaderboard and
        cross-device backup, such as your display name, avatar, and Quartz
        balance, held securely in Apple&apos;s iCloud. See our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for the full details.
      </>
    ),
  },
  {
    question: "Can I bypass the app shield?",
    plain:
      "Not easily. Because Quartz uses Apple's native Screen Time Restrictions API, the block happens at the OS level. There are no browser workarounds or VPN bypasses. The only built-in override is the Emergency Unpause, which resets your streak as a consequence.",
    answer:
      "Not easily. Because Quartz uses Apple's native Screen Time Restrictions API, the block happens at the OS level. There are no browser workarounds or VPN bypasses. The only built-in override is the Emergency Unpause, which resets your streak as a consequence.",
  },
];

// Lets search engines surface these answers directly.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.plain },
  })),
};

export function FaqSection() {
  return (
    <section className="relative py-20 md:py-28 bg-surface/30" id="faq">
      <div className="container-custom relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest text-neon-purple uppercase mb-3">
            05 — FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Frequently asked questions.
          </h2>
        </div>

        {/* <details name="..."> gives an exclusive accordion natively, so this
            section ships no JavaScript and works before hydration. */}
        <div className="glass-card">
          {faqs.map((faq) => (
            <details key={faq.question} name="faq" className="faq-item">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
