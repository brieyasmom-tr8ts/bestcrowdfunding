const platforms = [
  {
    name: "GiveSendGo",
    badge: "BEST OVERALL",
    url: "https://www.givesendgo.com",
    platformFee: "0%",
    processingFee: "2.7% + $0.30",
    bestFor: "Personal causes, emergencies, missions, faith-based causes & community fundraising",
    category: "donation",
    prayerFeatures: true,
    winner: true,
    pros: [
      "0% platform fee — more of every dollar reaches your cause",
      "Lower U.S. processing fee than GoFundMe (2.7% vs 2.9%)",
      "Built-in prayer and encouragement features for donors and campaigners",
      "Faith-friendly platform that welcomes all legal causes",
      "No penalty for not reaching your goal — keep what you raise",
      "No campaign deadline requirement",
      "Platform supported by optional donor tips, not a mandatory percentage",
    ],
    cons: [
      "Smaller brand recognition than GoFundMe",
      "Fewer built-in social sharing integrations",
    ],
  },
  {
    name: "GoFundMe",
    badge: "BEST FOR BRAND RECOGNITION",
    url: "https://www.gofundme.com",
    platformFee: "0%",
    processingFee: "2.9% + $0.30",
    bestFor: "Mainstream personal and emergency fundraising",
    category: "donation",
    prayerFeatures: false,
    winner: false,
    pros: [
      "Very large, well-known fundraising platform",
      "Strong brand recognition and donor trust",
    ],
    cons: [
      "Higher U.S. transaction fee than GiveSendGo",
      "Does not offer prayer-centered community features",
    ],
  },
  {
    name: "LaunchGood",
    badge: "BEST FOR MUSLIM COMMUNITY FUNDRAISING",
    url: "https://www.launchgood.com",
    platformFee: "Varies",
    processingFee: "Varies",
    bestFor: "Muslim causes, Ramadan giving & community fundraising",
    category: "donation",
    prayerFeatures: false,
    winner: false,
    pros: [
      "Strong community around Muslim causes and giving seasons",
      "Trusted platform for Ramadan and faith-driven campaigns",
    ],
    cons: [
      "Focused primarily on Muslim community fundraising",
      "Smaller global footprint than general-purpose platforms",
    ],
  },
  {
    name: "JustGiving",
    badge: "BEST FOR UK CHARITY FUNDRAISING",
    url: "https://www.justgiving.com",
    platformFee: "0%",
    processingFee: "Varies by type",
    bestFor: "UK charities and charity fundraising",
    category: "donation",
    prayerFeatures: false,
    winner: false,
    pros: [
      "Strong in the UK charity market with deep nonprofit integrations",
      "No platform fee for fundraisers",
    ],
    cons: [
      "Primarily UK-focused",
      "Processing fees vary by fundraiser type and payment method",
    ],
  },
  {
    name: "Kickstarter",
    badge: "BEST FOR CREATIVE PROJECTS",
    url: "https://www.kickstarter.com",
    platformFee: "5%",
    processingFee: "3% + $0.30",
    bestFor: "Products, games, films and creative projects",
    category: "rewards",
    prayerFeatures: false,
    winner: false,
    pros: [
      "Best-known platform for creative and product campaigns",
      "Large backer community for rewards-based projects",
    ],
    cons: [
      "5% platform fee on successfully funded projects",
      "All-or-nothing model — you get nothing if you miss your goal",
      "Rewards/project crowdfunding, not donation-based fundraising",
    ],
  },
];

function HandDrawnCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" stroke="#15b9a7" strokeWidth="2.5" fill="#ecfdf8" />
      <path d="M7 12.5l3 3 7-7" stroke="#15b9a7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-cream-dark sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <a href="/" className="text-lg md:text-xl font-bold text-primary font-sans">
          BestCrowdfunding<span className="text-primary">.com</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 font-sans">
          <a href="#compare" className="hover:text-primary transition-colors">
            Compare Platforms
          </a>
          <a href="#why-fees-matter" className="hover:text-primary transition-colors">
            Why Fees Matter
          </a>
          <a href="#freedom" className="hover:text-primary transition-colors">
            Platform Freedom
          </a>
        </nav>
        <a
          href="https://www.givesendgo.com/start"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-primary-dark transition-colors font-sans shadow-sm"
        >
          Start a Campaign
        </a>
      </div>
      {/* Mobile nav links */}
      <div className="md:hidden border-t border-cream-dark px-4 py-2 flex justify-center gap-4 text-xs font-medium text-gray-500 font-sans">
        <a href="#compare" className="hover:text-primary transition-colors">Compare</a>
        <span className="text-cream-dark">|</span>
        <a href="#why-fees-matter" className="hover:text-primary transition-colors">Fees</a>
        <span className="text-cream-dark">|</span>
        <a href="#freedom" className="hover:text-primary transition-colors">Freedom</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative bg-primary text-white py-16 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-primary/50" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 drop-shadow-lg">
          Find the Best Crowdfunding Platform for Your Campaign
        </h1>
        <p className="text-base md:text-xl text-white/85 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          We compared fees, features, freedom, and reviews across the top
          crowdfunding platforms so you don&apos;t have to. See which one comes
          out on top.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
          <a
            href="#compare"
            className="bg-white text-primary font-bold px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-sans text-sm md:text-base"
          >
            Compare Platforms
          </a>
          <a
            href="https://www.givesendgo.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-bold px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-white/15 transition-all font-sans text-sm md:text-base"
          >
            Start Free Campaign
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturedGiveSendGo() {
  const gsg = platforms[0];
  return (
    <div className="bg-winner-bg border-2 border-winner-border rounded-2xl p-8 md:p-10 mb-12 shadow-md relative">
      <span className="absolute -top-3.5 left-6 bg-winner-border text-white text-xs font-bold px-4 py-1.5 rounded-full font-sans shadow-sm uppercase tracking-wide">
        Best Overall
      </span>
      <div className="flex flex-col md:flex-row md:items-start md:gap-10">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 mt-2">{gsg.name}</h3>
          <p className="text-gray-600 mb-5">{gsg.bestFor}</p>
          <div className="flex flex-wrap gap-6 mb-6">
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">Platform Fee</span>
              <p className="text-green-600 font-bold text-2xl">{gsg.platformFee}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">U.S. Processing Fee</span>
              <p className="font-bold text-xl text-gray-800">{gsg.processingFee}</p>
            </div>
          </div>
          <ul className="space-y-2.5 mb-6">
            {gsg.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-2.5 text-sm text-gray-700">
                <HandDrawnCheck />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-shrink-0 md:mt-6">
          <a
            href="https://www.givesendgo.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-bold px-8 py-3.5 rounded-full text-base hover:bg-primary-dark transition-colors font-sans shadow-lg hover:shadow-xl"
          >
            Start a GiveSendGo
          </a>
        </div>
      </div>
    </div>
  );
}

function ComparisonGrid() {
  const gridPlatforms = platforms;
  return (
    <>
      {/* Desktop Grid */}
      <div className="hidden lg:block sketch-card p-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="sketch-row-border">
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider font-sans">
                Platform
              </th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider font-sans">
                Best For
              </th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider font-sans">
                Platform Fee
              </th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider font-sans">
                U.S. Processing Fee
              </th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider font-sans">
                Faith / Prayer Features
              </th>
            </tr>
          </thead>
          <tbody>
            {gridPlatforms.map((p) => (
              <tr
                key={p.name}
                className={
                  p.winner
                    ? "bg-winner-bg border-2 border-winner-border"
                    : "sketch-row-border hover:bg-cream/50"
                }
              >
                <td className="py-5 px-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-lg">{p.name}</span>
                    {p.winner && (
                      <span className="bg-winner-border text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-sans shadow-sm">
                        BEST
                      </span>
                    )}
                    {p.category === "rewards" && (
                      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full font-sans">
                        REWARDS
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-5 px-4 text-gray-600 text-sm max-w-[220px]">
                  {p.bestFor}
                </td>
                <td className="text-center py-5 px-4">
                  <span
                    className={
                      p.platformFee === "0%"
                        ? "text-green-600 font-bold text-lg"
                        : p.platformFee === "Varies"
                        ? "text-gray-500 font-medium"
                        : "text-red-500 font-semibold text-lg"
                    }
                  >
                    {p.platformFee}
                  </span>
                </td>
                <td className="text-center py-5 px-4 text-gray-600">
                  {p.processingFee}
                </td>
                <td className="text-center py-5 px-4">
                  {p.prayerFeatures ? (
                    <span className="text-winner-border font-bold text-lg" title="Prayer + encouragement">&#10003; Prayer + encouragement</span>
                  ) : (
                    <span className="text-gray-400">&mdash;</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {gridPlatforms.map((p) => (
          <div
            key={p.name}
            className={`sketch-card p-5 ${
              p.winner
                ? "!border-2 !border-winner-border bg-winner-bg"
                : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg">{p.name}</h3>
              {p.winner && (
                <span className="bg-winner-border text-white text-xs font-bold px-2.5 py-0.5 rounded-full font-sans">
                  BEST
                </span>
              )}
              {p.category === "rewards" && (
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full font-sans">
                  REWARDS
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-3">{p.bestFor}</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500 font-sans text-xs uppercase tracking-wide">Platform Fee</span>
                <p
                  className={
                    p.platformFee === "0%"
                      ? "text-green-600 font-bold text-lg"
                      : p.platformFee === "Varies"
                      ? "text-gray-500 font-medium"
                      : "text-red-500 font-semibold text-lg"
                  }
                >
                  {p.platformFee}
                </p>
              </div>
              <div>
                <span className="text-gray-500 font-sans text-xs uppercase tracking-wide">U.S. Processing</span>
                <p className="font-medium">{p.processingFee}</p>
              </div>
            </div>
            <div className="mt-2 text-sm">
              <span className="text-gray-500 font-sans text-xs uppercase tracking-wide">Prayer Features</span>
              <p>{p.prayerFeatures ? <span className="text-winner-border font-semibold">&#10003; Prayer + encouragement</span> : <span className="text-gray-400">&mdash;</span>}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-6 text-center max-w-3xl mx-auto leading-relaxed">
        Fees shown are based on publicly available U.S. pricing where applicable and may vary by country, currency, fundraiser type, payment method, or other factors. Always check each platform&apos;s current pricing.
      </p>
    </>
  );
}

function ComparisonTable() {
  return (
    <section id="compare" className="wave-divider pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="sketch-underline">Compare the Best Crowdfunding Platforms</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
            Not every crowdfunding platform is built for the same purpose. Compare
            fees, focus, and features to find the right place to raise support.
          </p>
        </div>

        <FeaturedGiveSendGo />
        <ComparisonGrid />
      </div>
    </section>
  );
}

function DetailedReviews() {
  return (
    <section className="bg-white wave-divider wave-divider-white pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="sketch-underline">Detailed Platform Reviews</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-6 transition-all duration-200 hover:translate-y-[-2px] flex flex-col ${
                p.winner
                  ? "bg-winner-bg border-2 border-winner-border shadow-md rounded-[3px]"
                  : "bg-cream sketch-card hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">{p.name}</h3>
                {p.winner && (
                  <span className="bg-winner-border text-white text-xs font-bold px-2.5 py-1 rounded-full font-sans">
                    #1 PICK
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 font-sans uppercase tracking-wider mb-4">{p.badge}</p>

              <div className="mb-4">
                <h4 className="text-xs font-bold text-green-700 mb-2 uppercase tracking-wider font-sans">
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {p.pros.map((pro) => (
                    <li
                      key={pro}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-winner-border font-bold mt-0.5 text-lg leading-none">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wider font-sans">
                  Limitations
                </h4>
                <ul className="space-y-2">
                  {p.cons.map((con) => (
                    <li
                      key={con}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-primary font-bold mt-0.5 text-lg leading-none">&minus;</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto pt-5 inline-block text-sm font-semibold font-sans ${
                  p.winner ? "text-primary" : "text-gray-500"
                } hover:underline`}
              >
                Visit {p.name} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFeesMatter() {
  return (
    <section id="why-fees-matter" className="wave-divider wave-divider-cream pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="sketch-underline">Why Pricing Matters</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
            The fees a platform charges can make a huge difference in how much
            money actually reaches your cause.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="sketch-card p-8">
            <div className="text-3xl mb-3">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bf1e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Platform Fee</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This is the percentage the platform takes from every donation just
              for hosting your campaign. Some platforms charge up to 5%.
            </p>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="text-sm text-red-800">
                <strong>Example:</strong> On a $10,000 campaign, a 5% platform
                fee means <strong>$500 goes to the platform</strong>, not your
                cause.
              </p>
            </div>
          </div>

          <div className="sketch-card p-8">
            <div className="text-3xl mb-3">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#15b9a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Payment Processing Fee</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Every platform must pay credit card processors (Stripe, PayPal,
              etc.). This fee is unavoidable. GiveSendGo offers a lower
              processing fee of just 2.7% + $0.30.
            </p>
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <p className="text-sm text-teal-800">
                <strong>Key insight:</strong> Since processing fees are similar
                everywhere, the real difference is the{" "}
                <strong>platform fee</strong>. Choose 0%.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-winner-bg rounded-2xl p-8 md:p-10 border-2 border-winner-border text-center shadow-md">
          <h3 className="text-2xl font-bold mb-3">
            GiveSendGo charges 0% platform fees
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            That means on a $10,000 campaign, you keep{" "}
            <strong className="text-winner-border">$500 more</strong> than you would on a platform charging 5%.
            Every dollar matters when you&apos;re fundraising for something
            important.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlatformFreedom() {
  return (
    <section id="freedom" className="bg-white wave-divider wave-divider-white pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="sketch-underline">Will Your Campaign Be Allowed?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
            Not all platforms treat every cause equally. Some have a history of
            shutting down campaigns they disagree with.
          </p>
        </div>

        <div className="space-y-6">
          <div className="sketch-card p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bf1e2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">The Deplatforming Risk</h3>
                <p className="text-gray-600 leading-relaxed">
                  Some major platforms have removed campaigns for legal
                  causes based on political pressure. When your campaign gets taken
                  down, you lose your momentum, your donors, and sometimes your
                  funds. This can happen at any point &mdash; even after
                  you&apos;ve raised thousands of dollars.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-winner-bg rounded-2xl p-8 md:p-10 border-2 border-winner-border shadow-md">
            <h3 className="text-xl font-bold mb-4">
              GiveSendGo&apos;s Commitment to You
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              GiveSendGo was built on the principle that if your cause is legal,
              your campaign should stay live. They don&apos;t make editorial
              judgments about which causes deserve funding. This makes them the
              only major platform where you can fundraise with confidence that
              your campaign won&apos;t be arbitrarily removed.
            </p>
            <ul className="space-y-3">
              {[
                "No opinion-based campaign removals",
                "Funds are never frozen based on political pressure",
                "Dedicated Hope Team that calls and prays with campaigners",
                "Transparent policies with no hidden agenda",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <HandDrawnCheck />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const articles = [
  {
    title: "Still Seen: Lesa's Story",
    description:
      "A powerful story of hope and generosity — see how the GiveSendGo community rallied behind Lesa.",
    url: "https://www.givesendgo.com/blog/lesa",
  },
  {
    title: "GiveSendGo FAQ: Fees, Payouts, Safety & Common Questions",
    description:
      "Everything you need to know about how GiveSendGo works — from fees and payouts to campaign safety.",
    url: "https://www.givesendgo.com/blog/faq",
  },
  {
    title: "How GiveSendGo Works: Start a Free Fundraiser in 3 Steps",
    description:
      "Learn how easy it is to launch your fundraiser on GiveSendGo in just three simple steps.",
    url: "https://www.givesendgo.com/blog/how-it-works",
  },
  {
    title: "What To Do in the First 3 Days of Launching Your Fundraiser",
    description:
      "Maximize your early momentum with this guide to crushing your first 72 hours of fundraising.",
    url: "https://www.givesendgo.com/blog/72hr-fundraising-success",
  },
];

function RecentArticles() {
  return (
    <section className="wave-divider wave-divider-cream pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="sketch-underline">Recent Articles</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
            Tips, stories, and guides for your crowdfunding journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-card tilt-hover p-6 group block"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bf1e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{a.description}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-primary font-sans">
                Read more &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      className="relative bg-primary text-white py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 drop-shadow-lg">
          Ready to Start Your Campaign?
        </h2>
        <p className="text-white/85 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          GiveSendGo is the best crowdfunding platform of 2026 &mdash; with 0%
          platform fees, global reach, and a commitment to keeping your campaign
          live.
        </p>
        <a
          href="https://www.givesendgo.com/start"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-sans"
        >
          Start Your Free Campaign on GiveSendGo
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-sans font-bold text-gray-300">
              BestCrowdfunding<span className="text-primary">.com</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <p className="text-xs text-gray-500 max-w-md text-center md:text-right">
            This site is independently operated. Platform data is gathered from
            public sources and may change. Always verify current fees on each
            platform&apos;s website.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ComparisonTable />

      <DetailedReviews />
      <WhyFeesMatter />
      <PlatformFreedom />

      <RecentArticles />
      <FinalCTA />
      <Footer />
    </>
  );
}
