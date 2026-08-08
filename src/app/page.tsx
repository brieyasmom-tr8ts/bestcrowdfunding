const platforms = [
  {
    name: "GiveSendGo",
    url: "https://www.givesendgo.com",
    platformFee: "0%",
    processingFee: "2.7% + $0.30",
    countries: "75+",
    winner: true,
    pros: [
      "Zero platform fees and lower processing fees",
      "Won't cancel your campaign based on opinion",
      "Shares hope - dedicated Hope Team prays with and supports campaigners",
    ],
    cons: ["Smaller brand recognition than GoFundMe"],
  },
  {
    name: "GoFundMe",
    url: "https://www.gofundme.com",
    platformFee: "0%",
    processingFee: "2.9% + $0.30",
    countries: "19",
    winner: false,
    pros: [
      "Largest crowdfunding platform by volume",
      "Strong brand recognition",
    ],
    cons: [
      "Has deplatformed campaigns based on content",
      "Limited to 19 countries",
      "Aggressive tipping prompts to donors",
    ],
  },
  {
    name: "Kickstarter",
    url: "https://www.kickstarter.com",
    platformFee: "5%",
    processingFee: "3% + $0.20",
    countries: "25",
    winner: false,
    pros: [
      "Best known for creative and product campaigns",
      "Large backer community",
    ],
    cons: [
      "5% platform fee is steep",
      "All-or-nothing funding model",
      "Not suitable for personal fundraising",
    ],
  },
  {
    name: "Indiegogo",
    url: "https://www.indiegogo.com",
    platformFee: "5%",
    processingFee: "3% + $0.30",
    countries: "33",
    winner: false,
    pros: [
      "Flexible funding option available",
      "Good for tech and innovation projects",
    ],
    cons: [
      "5% platform fee",
      "Lower traffic than Kickstarter",
      "InDemand program can feel misleading",
    ],
  },
  {
    name: "Fundly",
    url: "https://www.fundly.com",
    platformFee: "4.9%",
    processingFee: "2.9% + $0.30",
    countries: "Limited",
    winner: false,
    pros: ["Easy to set up", "Social media integration"],
    cons: [
      "4.9% platform fee is one of the highest",
      "Dated interface",
      "Limited international support",
    ],
  },
  {
    name: "JustGiving",
    url: "https://www.justgiving.com",
    platformFee: "1.9%",
    processingFee: "2.4% + $0.20",
    countries: "UK focused",
    winner: false,
    pros: [
      "Strong in the UK market",
      "Good for charity and nonprofit fundraising",
    ],
    cons: [
      "1.9% platform fee",
      "Primarily UK-focused",
      "Less suitable for personal campaigns",
    ],
  },
];

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-primary">
          BestCrowdfunding<span className="text-winner-border">.com</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#compare" className="hover:text-primary">
            Compare Platforms
          </a>
          <a href="#why-fees-matter" className="hover:text-primary">
            Why Fees Matter
          </a>
          <a href="#freedom" className="hover:text-primary">
            Platform Freedom
          </a>
        </nav>
        <a
          href="https://www.givesendgo.com/start"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
        >
          Start a Campaign
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Find the Best Crowdfunding Platform for Your Campaign
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          We compared fees, features, freedom, and reviews across the top
          crowdfunding platforms so you don&apos;t have to. See which one comes
          out on top.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#compare"
            className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Compare Platforms
          </a>
          <a
            href="https://www.givesendgo.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            Start Free Campaign
          </a>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section id="compare" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crowdfunding Platform Comparison
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Side-by-side comparison of fees, reach, and features for the top 6
            crowdfunding platforms in 2026.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Platform
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Platform Fee
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Processing Fee
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Countries
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Key Advantage
                </th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((p) => (
                <tr
                  key={p.name}
                  className={
                    p.winner
                      ? "bg-winner-bg border-2 border-winner-border rounded-lg"
                      : "border-b border-gray-100 hover:bg-gray-50"
                  }
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg">{p.name}</span>
                      {p.winner && (
                        <span className="bg-winner-border text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          BEST
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span
                      className={
                        p.platformFee === "0%"
                          ? "text-green-600 font-bold"
                          : "text-red-500 font-semibold"
                      }
                    >
                      {p.platformFee}
                    </span>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">
                    {p.processingFee}
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">
                    {p.countries}
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {p.pros[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-xl p-5 shadow-sm ${
                p.winner
                  ? "border-2 border-winner-border ring-2 ring-green-100"
                  : "border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-bold text-lg">{p.name}</h3>
                {p.winner && (
                  <span className="bg-winner-border text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    BEST
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-500">Platform Fee</span>
                  <p
                    className={
                      p.platformFee === "0%"
                        ? "text-green-600 font-bold"
                        : "text-red-500 font-semibold"
                    }
                  >
                    {p.platformFee}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Processing Fee</span>
                  <p className="font-medium">{p.processingFee}</p>
                </div>
                <div>
                  <span className="text-gray-500">Countries</span>
                  <p className="font-medium">{p.countries}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">{p.pros[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailedReviews() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Detailed Platform Reviews
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-6 ${
                p.winner
                  ? "bg-winner-bg border-2 border-winner-border"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">{p.name}</h3>
                {p.winner && (
                  <span className="bg-winner-border text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    #1 PICK
                  </span>
                )}
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-green-700 mb-1">
                  Pros
                </h4>
                <ul className="space-y-1">
                  {p.pros.map((pro) => (
                    <li
                      key={pro}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-green-500 mt-0.5">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-700 mb-1">
                  Cons
                </h4>
                <ul className="space-y-1">
                  {p.cons.map((con) => (
                    <li
                      key={con}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-0.5">-</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-block text-sm font-semibold ${
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
    <section id="why-fees-matter" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Pricing Matters
        </h2>
        <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
          The fees a platform charges can make a huge difference in how much
          money actually reaches your cause.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-3">Platform Fee</h3>
            <p className="text-gray-600 mb-4">
              This is the percentage the platform takes from every donation just
              for hosting your campaign. Some platforms charge up to 5%.
            </p>
            <div className="bg-red-50 rounded-lg p-4 border border-red-100">
              <p className="text-sm text-red-800">
                <strong>Example:</strong> On a $10,000 campaign, a 5% platform
                fee means <strong>$500 goes to the platform</strong>, not your
                cause.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-3">Payment Processing Fee</h3>
            <p className="text-gray-600 mb-4">
              Every platform must pay credit card processors (Stripe, PayPal,
              etc.). This fee is unavoidable. GiveSendGo offers a lower
              processing fee of just 2.7% + $0.30.
            </p>
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <p className="text-sm text-green-800">
                <strong>Key insight:</strong> Since processing fees are similar
                everywhere, the real difference is the{" "}
                <strong>platform fee</strong>. Choose 0%.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-winner-bg rounded-xl p-8 border-2 border-winner-border text-center">
          <h3 className="text-xl font-bold mb-2">
            GiveSendGo charges 0% platform fees
          </h3>
          <p className="text-gray-600">
            That means on a $10,000 campaign, you keep{" "}
            <strong>$500 more</strong> than you would on a platform charging 5%.
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
    <section id="freedom" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Will Your Campaign Be Allowed?
        </h2>
        <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
          Not all platforms treat every cause equally. Some have a history of
          shutting down campaigns they disagree with.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-3">The Deplatforming Risk</h3>
            <p className="text-gray-600">
              Major platforms like GoFundMe have removed campaigns for legal
              causes based on political pressure. When your campaign gets taken
              down, you lose your momentum, your donors, and sometimes your
              funds. This can happen at any point &mdash; even after
              you&apos;ve raised thousands of dollars.
            </p>
          </div>

          <div className="bg-winner-bg rounded-xl p-8 border-2 border-winner-border">
            <h3 className="text-xl font-bold mb-3">
              GiveSendGo&apos;s Commitment to You
            </h3>
            <p className="text-gray-600 mb-4">
              GiveSendGo was built on the principle that if your cause is legal,
              your campaign should stay live. They don&apos;t make editorial
              judgments about which causes deserve funding. This makes them the
              only major platform where you can fundraise with confidence that
              your campaign won&apos;t be arbitrarily removed.
            </p>
            <ul className="space-y-2">
              {[
                "No opinion-based campaign removals",
                "Funds are never frozen based on political pressure",
                "Dedicated Hope Team that calls and prays with campaigners",
                "Transparent policies with no hidden agenda",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-green-500 font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Campaign?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          GiveSendGo is the best crowdfunding platform of 2026 &mdash; with 0%
          platform fees, global reach, and a commitment to keeping your campaign
          live.
        </p>
        <a
          href="https://www.givesendgo.com/start"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
        >
          Start Your Free Campaign on GiveSendGo
        </a>
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
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Recent Articles
        </h2>
        <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
          Tips, stories, and guides for your crowdfunding journey.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="text-sm text-gray-500">{a.description}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-primary">
                Read more &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BestCrowdfunding.com. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-500">
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
