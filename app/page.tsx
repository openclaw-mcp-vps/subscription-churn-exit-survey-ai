export default function Home() {
  const faqs = [
    {
      q: 'How does the AI adapt the survey questions?',
      a: 'Our AI analyzes each user\'s usage patterns, plan type, and cancellation timing to generate relevant questions and surface the most likely churn reasons in real time.'
    },
    {
      q: 'Which subscription platforms do you support?',
      a: 'ChurnShield integrates with Stripe, Paddle, Lemon Squeezy, and Chargebee via webhooks. Setup takes under 10 minutes with no code required.'
    },
    {
      q: 'What kind of retention offers can it generate?',
      a: 'The AI can offer discounts, plan downgrades, pause options, or feature unlocks — automatically matched to the reason the user is leaving.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Retention
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Losing Subscribers.<br />
          <span className="text-[#58a6ff]">Let AI Save Them.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnShield generates dynamic exit surveys that adapt to each user, uncovers why they\'re leaving, and delivers personalized offers that bring them back — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Saving Subscribers — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Social proof strip */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-center">
          {[['42%', 'avg churn reduction'], ['3 min', 'integration setup'], ['10x', 'ROI on first month']].map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#6e7681] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <div className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">All-Inclusive Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to fight churn</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'AI-adaptive exit surveys',
              'Personalized retention offers',
              'Churn pattern analytics dashboard',
              'Stripe, Paddle & Lemon Squeezy webhooks',
              'Unlimited surveys & responses',
              'Email digest of churn insights',
              'Priority support'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-sm hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">14-day free trial · No contracts</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnShield AI · <a href="#" className="hover:text-[#58a6ff]">Privacy</a> · <a href="#" className="hover:text-[#58a6ff]">Terms</a>
      </footer>
    </main>
  )
}
