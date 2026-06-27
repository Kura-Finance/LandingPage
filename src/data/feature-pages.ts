export interface FeatureItem {
  title: string
  description: string
  subtitle?: string
  to?: string
}

export interface FeatureSection {
  id?: string
  label?: string
  title: string
  description?: string
  features: FeatureItem[]
  columns?: 2 | 3
}

export interface PageSeoConfig {
  title: string
  description: string
  path: string
  keywords?: string
}

export interface FeaturePageConfig {
  seo: PageSeoConfig
  hero: {
    eyebrow?: string
    title: string
    description: string
    tags?: string[]
  }
  heroActions?: Array<{ label: string; to: string; primary?: boolean }>
  callout?: {
    label?: string
    title: string
    description: string
    ctaLabel?: string
    ctaTo?: string
  }
  sections: FeatureSection[]
  principles?: FeatureItem[]
  principlesTitle?: string
  principlesDescription?: string
  cta: {
    title: string
    description: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
  }
}

const defaultCta = {
  title: 'The future of money starts here',
  description: 'Download Kura and experience finance designed for the internet generation.',
  primaryLabel: 'Download Kura',
  primaryTo: '/download',
}

export const FEATURE_PAGES = {
  account: {
    seo: {
      title: 'Account',
      description:
        'Your core Kura balance — hold money, move it when you need to, and stay in control with passkey security.',
      path: '/account',
      keywords: 'financial account, balance, passkey, Kura account',
    },
    hero: {
      eyebrow: 'Cash & Transfers',
      title: 'Your core balance',
      description:
        'The account at the center of Kura — where your money lives, ready to send, spend, or put to work on your terms.',
      tags: ['Passkey security', 'Your balance', 'Always in control'],
    },
    sections: [
      {
        label: 'Balance',
        title: 'Money that stays ready',
        description: 'A clear view of what you hold today — without the clutter of a traditional banking app.',
        columns: 2,
        features: [
          {
            title: 'One balance, always visible',
            description: 'See what you have at a glance. No hunting through menus or buried screens.',
          },
          {
            title: 'Move money when you need to',
            description: 'Send and receive from the same balance you use every day — no separate wallets to manage.',
          },
          {
            title: 'Add funds your way',
            description: 'Top up by bank transfer or card deposit through regulated partners in supported regions.',
          },
          {
            title: 'Built for everyday use',
            description: 'Designed for rent, groceries, and invoices — not just trading screens.',
          },
        ],
      },
      {
        label: 'Security',
        title: 'Yours to unlock',
        description: 'Your account opens with biometrics, not passwords stored on a server.',
        columns: 2,
        features: [
          {
            title: 'Passkey protection',
            description: 'Unlock with Face ID or Touch ID. Your credentials stay on your device.',
          },
          {
            title: 'Portable by design',
            description: 'Export and recover access on your terms — your identity travels with you.',
          },
        ],
      },
    ],
    cta: defaultCta,
  },

  'financial-account': {
    seo: {
      title: 'Financial Account',
      description:
        'Save, spend, invest, and earn from one beautiful account — at every stage of your financial life.',
      path: '/financial-account',
      keywords: 'financial account, save spend invest earn, unified money, Kura',
    },
    hero: {
      eyebrow: 'Products',
      title: 'One account for your whole financial life',
      description:
        'Kura brings cash, cards, investing, and portfolio tracking into a single experience — pick what you need, when you need it.',
      tags: ['Cash', 'Cards', 'Invest', 'Portfolio'],
    },
    sections: [
      {
        label: 'Explore',
        title: 'Find what fits your life',
        description: 'Each product stands on its own. Start anywhere — they work better together, but never require all of them.',
        columns: 3,
        features: [
          { title: 'Account', description: 'Hold and move money from one core balance.', to: '/account' },
          { title: 'Global Transfers', description: 'Send across borders with clear fees.', to: '/global-transfers' },
          { title: 'Multi-Currency', description: 'USD, EUR, GBP, BRL, and MXN in one place.', to: '/multi-currency' },
          { title: 'Kura Card', description: 'Spend anywhere Visa is accepted.', to: '/kura-card' },
          { title: 'Invest', description: 'Build a portfolio without another app.', to: '/invest' },
          { title: 'Earn', description: 'Optional yield on idle cash.', to: '/earn' },
          { title: 'Borrow', description: 'Liquidity through Morpho markets.', to: '/borrow' },
          { title: 'TrackFi', description: 'See external accounts in one dashboard.', to: '/trackfi' },
          { title: 'Connected Accounts', description: 'Link banks and brokerages securely.', to: '/connected-accounts' },
          { title: 'Net Worth', description: 'Watch your wealth change over time.', to: '/net-worth' },
        ],
      },
    ],
    cta: defaultCta,
  },

  'global-transfers': {
    seo: {
      title: 'Global Transfers',
      description: 'Move money globally with bank transfers and digital dollars. Fast, transparent, and designed for everyday use.',
      path: '/global-transfers',
      keywords: 'global transfers, send money, international transfers, digital dollars, Kura',
    },
    hero: {
      eyebrow: 'Cash & Transfers',
      title: 'Move money globally',
      description: 'Send and receive across borders with bank transfers and digital dollars — fast, transparent, and built for how you live.',
      tags: ['Bank transfers', 'Digital dollars', 'Global'],
    },
    sections: [
      {
        label: 'Transfers',
        title: 'Send money without the friction',
        description: 'Whether you are paying rent abroad or sending to family, Kura keeps transfers simple and clear.',
        columns: 2,
        features: [
          {
            title: 'Bank transfers',
            description: 'Move money with regulated on- and off-ramps in supported regions. See fees and timing upfront.',
          },
          {
            title: 'Digital dollars',
            description: 'Hold and transfer stable digital dollars with settlement that keeps pace with everyday life.',
          },
          {
            title: 'Transparent fees',
            description: 'No hidden spreads or surprise charges. Know what you pay before you confirm.',
          },
          {
            title: 'Fast settlement',
            description: 'Digital transfers settle quickly so your money is ready when you need it.',
          },
        ],
      },
    ],
    cta: defaultCta,
  },

  'multi-currency': {
    seo: {
      title: 'Multi-Currency',
      description: 'Hold and manage USD, EUR, GBP, BRL, and MXN in one account. Add funds by card when you need them.',
      path: '/multi-currency',
      keywords: 'multi-currency, USD EUR GBP, foreign exchange, global account, Kura',
    },
    hero: {
      eyebrow: 'Cash & Transfers',
      title: 'Multiple currencies, one account',
      description: 'Deposit in USD, EUR, GBP, BRL, and MXN through regulated partners. Add funds by card when you need them.',
      tags: ['USD', 'EUR', 'GBP', 'BRL', 'MXN'],
    },
    sections: [
      {
        label: 'Currencies',
        title: 'Global money, local convenience',
        description: 'Manage multiple currencies without opening accounts in every country you touch.',
        columns: 2,
        features: [
          {
            title: 'Supported currencies',
            description: 'Hold and convert between USD, EUR, GBP, BRL, and MXN through regulated partners.',
          },
          {
            title: 'Card deposits',
            description: 'Add funds by card when you need a top-up — without leaving the app.',
          },
          {
            title: 'One balance view',
            description: 'See all your currencies and total value in a single, clear dashboard.',
          },
          {
            title: 'Spend globally',
            description: 'Use your balance with Kura Card abroad with 0% foreign exchange fees.',
          },
        ],
      },
    ],
    cta: defaultCta,
  },

  'card-waitlist': {
    seo: {
      title: 'Join the Kura Card Waitlist',
      description: 'Reserve your spot for Kura Card — spend your balance anywhere Visa is accepted with 0.5% cashback and 0% FX fees.',
      path: '/card-waitlist',
      keywords: 'Kura Card waitlist, debit card, Visa, cashback, global spending',
    },
    hero: {
      eyebrow: 'Cards & Spending',
      title: 'Join the Kura Card waitlist',
      description: 'Kura Card is coming soon. Download the app to reserve your spot and be first to spend from your Kura account worldwide.',
      tags: ['Waitlist', 'Visa', '0.5% cashback'],
    },
    callout: {
      label: 'Waitlist',
      title: 'Reserve your spot in the app',
      description: 'Download Kura, open your account, and join the waitlist to get early access when Kura Card launches.',
      ctaLabel: 'Join waitlist in app',
      ctaTo: '/download',
    },
    sections: [
      {
        label: 'Benefits',
        title: 'Built into every Kura Card',
        columns: 2,
        features: [
          { title: '0.5% cashback', description: 'Earn on eligible spend — automatically applied to your balance.' },
          { title: '0% FX fees', description: 'Spend abroad without foreign exchange markups on your card.' },
          { title: 'Visa worldwide', description: 'Accepted wherever Visa debit is — online, in-store, and abroad.' },
          { title: 'Spend from balance', description: 'Your card draws directly from your Kura account. No separate funding step.' },
        ],
      },
    ],
    cta: {
      title: 'Be first to spend with Kura Card',
      description: 'Download the app and join the waitlist today.',
      primaryLabel: 'Download Kura',
      primaryTo: '/download',
    },
  },

  invest: {
    seo: {
      title: 'Invest',
      description: 'A calm portfolio view with live prices and one-tap actions — built for holders, not day traders.',
      path: '/invest',
      keywords: 'invest, portfolio, live markets, Kura invest',
    },
    hero: {
      eyebrow: 'Investing & Earn',
      title: 'A portfolio view that makes sense',
      description: 'Charts, prices, and positions in one calm screen — designed for people who invest, not people who stare at order books all day.',
      tags: ['Live prices', 'One screen', 'Clear positions'],
    },
    sections: [
      {
        label: 'Experience',
        title: 'Investing without the noise',
        description: 'No cluttered terminals or jargon-heavy layouts. Just your holdings and the markets that matter to you.',
        columns: 2,
        features: [
          {
            title: 'Live prices & charts',
            description: 'Track what you own with real-time data and clean visualizations.',
          },
          {
            title: 'One-tap actions',
            description: 'Buy and sell from the same app you use for everyday money — no context switching.',
          },
          {
            title: 'Clear position sizing',
            description: 'See allocation and performance at a glance, not buried in sub-menus.',
          },
          {
            title: 'Built for holding',
            description: 'Optimized for long-term portfolios — not flashing lights and leverage toggles.',
          },
        ],
      },
    ],
    cta: defaultCta,
  },

  'us-stocks': {
    seo: {
      title: 'US Stocks',
      description: 'Buy and sell US equities from your Kura account — powered by Dinari, designed for simplicity.',
      path: '/us-stocks',
      keywords: 'US stocks, equities, Dinari, invest stocks, Kura',
    },
    hero: {
      eyebrow: 'Investing & Earn',
      title: 'US stocks from your account',
      description: 'Buy and sell US equities from the same balance you use for everyday money — powered by Dinari.',
      tags: ['Dinari', 'US equities', 'One-tap investing'],
    },
    sections: [
      {
        label: 'US Stocks',
        title: 'Wall Street, without the complexity',
        description: 'Access US markets from a financial account designed for clarity — not trader jargon.',
        columns: 2,
        features: [
          {
            title: 'Powered by Dinari',
            description: 'Regulated access to US equities through trusted infrastructure.',
          },
          {
            title: 'Same account',
            description: 'No separate brokerage login. Invest from the balance you already hold.',
          },
          {
            title: 'Live prices & charts',
            description: 'Track markets in real time with an interface built for everyday investors.',
          },
          {
            title: 'Fractional-friendly',
            description: 'Buy the companies you believe in without needing a full share upfront.',
          },
        ],
      },
    ],
    cta: defaultCta,
  },

  earn: {
    seo: {
      title: 'Earn',
      description: 'Put idle cash to work with transparent yield strategies powered by Morpho — clearly explained, always optional.',
      path: '/earn',
      keywords: 'earn yield, idle cash, Morpho, savings, Kura earn',
    },
    hero: {
      eyebrow: 'Investing & Earn',
      title: 'Put idle cash to work',
      description: 'Transparent yield strategies that help your money grow while it waits — clearly explained, always optional.',
      tags: ['Morpho', 'Transparent yield', 'No lock-ups'],
    },
    sections: [
      {
        label: 'Earn',
        title: 'Yield without the guesswork',
        description: 'See rates and vault details before you commit a dollar.',
        columns: 3,
        features: [
          {
            title: 'Transparent yield',
            description: 'Put idle cash to work with clear rates and vault details before you commit a dollar.',
          },
          {
            title: 'Powered by Morpho',
            description: 'Earn competitive returns through trusted yield strategies — without leaving your account.',
          },
          {
            title: 'Withdraw anytime',
            description: 'Move funds back to your balance whenever you need liquidity. No lock-ups, no surprises.',
          },
        ],
      },
    ],
    cta: defaultCta,
  },

  borrow: {
    seo: {
      title: 'Borrow',
      description:
        'Access liquidity from your account with transparent borrowing powered by Morpho — rates and collateral terms shown upfront.',
      path: '/borrow',
      keywords: 'borrow, Morpho, lending, liquidity, collateral, Kura borrow',
    },
    hero: {
      eyebrow: 'Investing & Earn',
      title: 'Borrow with clarity',
      description:
        'Need liquidity without selling your position? Borrow through Morpho markets with transparent rates, collateral requirements, and terms — always optional, always self-directed.',
      tags: ['Morpho', 'Transparent rates', 'Self-directed'],
    },
    sections: [
      {
        label: 'Borrow',
        title: 'Liquidity when you need it',
        description: 'See borrowing rates, collateral ratios, and market details before you commit.',
        columns: 3,
        features: [
          {
            title: 'Powered by Morpho',
            description: 'Access borrowing markets through Morpho infrastructure — integrated into your Kura account.',
          },
          {
            title: 'Rates upfront',
            description: 'View interest rates and collateral requirements before you borrow. No hidden spreads.',
          },
          {
            title: 'Stay in control',
            description: 'You choose when to borrow, how much to borrow, and when to repay — from the same app you use every day.',
          },
        ],
      },
      {
        label: 'Risk',
        title: 'Understand before you borrow',
        description: 'Borrowing involves collateral and market risk. Kura surfaces the terms — you make the decision.',
        columns: 2,
        features: [
          {
            title: 'Collateral requirements',
            description: 'Borrowing is secured by collateral. If collateral value falls below required levels, liquidation may occur.',
          },
          {
            title: 'Variable rates',
            description: 'Interest rates can change with market conditions. Monitor your position and health factor in the app.',
          },
        ],
      },
    ],
    cta: defaultCta,
  },

  'connected-accounts': {
    seo: {
      title: 'Connected Accounts',
      description: 'Link external accounts with read-only access. Your data is encrypted on your device before it ever syncs.',
      path: '/connected-accounts',
      keywords: 'connected accounts, link bank, read-only, account aggregation, Kura',
    },
    hero: {
      eyebrow: 'Portfolio',
      title: 'Link accounts in minutes',
      description: 'Connect banks, brokerages, and platforms with read-only access — then let Kura keep the picture current while you stay in control.',
      tags: ['Read-only', 'Quick setup', 'Encrypted sync'],
    },
    sections: [
      {
        label: 'How it works',
        title: 'Three steps to a fuller picture',
        description: 'No credentials stored in plain text. No write access to your money. Just a secure, read-only link.',
        columns: 3,
        features: [
          {
            title: 'Choose your institution',
            description: 'Pick from supported banks, brokerages, and platforms — right inside the app.',
          },
          {
            title: 'Authenticate securely',
            description: 'Sign in through your institution’s flow. Kura never sees or stores your banking password.',
          },
          {
            title: 'Encrypt before sync',
            description: 'Balances and transactions are encrypted on your device before anything leaves it.',
          },
        ],
      },
      {
        label: 'What you get',
        title: 'Read-only, always',
        columns: 2,
        features: [
          {
            title: 'View-only access',
            description: 'Connected accounts cannot move money on your behalf — ever.',
          },
          {
            title: 'Background refresh',
            description: 'Scheduled sync keeps balances current while your session is active.',
          },
        ],
      },
    ],
    cta: {
      title: 'Link your first account',
      description: 'Download Kura, set up your passkey, and connect in a few taps.',
      primaryLabel: 'Download Kura',
      primaryTo: '/download',
    },
  },

  'net-worth': {
    seo: {
      title: 'Net Worth',
      description: 'Watch your total wealth change over time — with a private, encrypted history that stays on your terms.',
      path: '/net-worth',
      keywords: 'net worth, wealth history, financial timeline, Kura',
    },
    hero: {
      eyebrow: 'Portfolio',
      title: 'See wealth change over time',
      description: 'A single line that tells the story — how your total net worth rises, falls, and trends across every account you connect.',
      tags: ['History', 'Trends', 'Private'],
    },
    sections: [
      {
        label: 'Timeline',
        title: 'Your wealth, plotted',
        description: 'Not just a number today — a record of where you have been and where you are heading.',
        columns: 2,
        features: [
          {
            title: 'Net worth over time',
            description: 'Scroll through daily, weekly, and monthly snapshots of your total.',
          },
          {
            title: 'Category breakdown',
            description: 'See how cash, investments, and other holdings contribute to the whole.',
          },
          {
            title: 'Milestone moments',
            description: 'Spot inflection points — a new job, a big purchase, a market shift.',
          },
          {
            title: 'Encrypted history',
            description: 'Your timeline is encrypted on your device. We store ciphertext, not readable records.',
          },
        ],
      },
    ],
    cta: {
      title: 'Start your timeline',
      description: 'Download Kura and connect accounts to see your first net worth chart.',
      primaryLabel: 'Download Kura',
      primaryTo: '/download',
    },
  },

  banking: {
    seo: {
      title: 'Banking',
      description: 'Link checking, savings, and credit cards. Track balances and cash flow — encrypted before sync.',
      path: '/banking',
      keywords: 'banking, checking, savings, credit cards, cash flow, TrackFi',
    },
    hero: {
      eyebrow: 'TrackFi',
      title: 'Your everyday money, tracked',
      description: 'Connect checking, savings, and credit cards with read-only access. Understand cash flow without giving up control.',
      tags: ['Checking & savings', 'Credit cards', 'Cash flow'],
    },
    sections: [
      {
        label: 'Banking',
        title: 'Day-to-day money, clearly laid out',
        columns: 2,
        features: [
          {
            title: 'Checking & savings',
            description: 'See balances across accounts without logging into five different apps.',
          },
          {
            title: 'Credit cards',
            description: 'Track card balances and spending alongside your cash — one private view.',
          },
          {
            title: 'Cash flow visibility',
            description: 'Understand money in and money out without exporting spreadsheets.',
          },
          {
            title: 'Encrypted on device',
            description: 'Bank data is encrypted before sync. Kura cannot read your transaction history.',
          },
        ],
      },
    ],
    cta: {
      title: 'Connect your bank accounts',
      description: 'Set up TrackFi and link your first account in minutes.',
      primaryLabel: 'Download Kura',
      primaryTo: '/download',
    },
  },

  investments: {
    seo: {
      title: 'Investments',
      description: 'Connect brokerages, ETFs, and exchange accounts. See your full investment picture in one place.',
      path: '/investments',
      keywords: 'investments, brokerage, ETFs, exchange accounts, portfolio tracking',
    },
    hero: {
      eyebrow: 'TrackFi',
      title: 'Investments across platforms',
      description: 'Link brokerages and exchange accounts to see stocks, ETFs, and positions together — without logging into each one separately.',
      tags: ['Brokerages', 'ETFs', 'Exchange accounts'],
    },
    sections: [
      {
        label: 'Investments',
        title: 'Every brokerage, one view',
        columns: 2,
        features: [
          {
            title: 'Brokerage accounts',
            description: 'Connect major brokerages and see holdings alongside your other assets.',
          },
          {
            title: 'Stocks & ETFs',
            description: 'Track equities and fund positions with clear allocation breakdowns.',
          },
          {
            title: 'Exchange platforms',
            description: 'Pull in positions from supported exchange accounts — read-only, always.',
          },
          {
            title: 'Allocation at a glance',
            description: 'See how your investment mix contributes to total net worth.',
          },
        ],
      },
    ],
    cta: {
      title: 'Unify your investments',
      description: 'Download Kura and connect your first brokerage.',
      primaryLabel: 'Download Kura',
      primaryTo: '/download',
    },
  },

  'digital-assets': {
    seo: {
      title: 'Digital Assets',
      description: 'Track digital asset holdings across supported networks. Link external accounts or your Kura balance with one tap.',
      path: '/digital-assets',
      keywords: 'digital assets, portfolio tracking, crypto holdings, TrackFi',
    },
    hero: {
      eyebrow: 'TrackFi',
      title: 'Digital holdings, tracked privately',
      description: 'See positions across supported networks in one dashboard — or link your Kura account instantly, no extra setup.',
      tags: ['Multi-network', 'Positions', 'One tap link'],
    },
    sections: [
      {
        label: 'Digital assets',
        title: 'Holdings without the spreadsheet',
        columns: 2,
        features: [
          {
            title: 'Multi-network support',
            description: 'Track positions across supported networks from a single encrypted view.',
          },
          {
            title: 'External account linking',
            description: 'Connect supported platforms with read-only access — same privacy model as banking.',
          },
          {
            title: 'Kura account, one tap',
            description: 'Already use Kura? Link your account balance instantly — no re-authentication needed.',
          },
          {
            title: 'Part of the whole',
            description: 'Digital holdings roll into your net worth alongside cash and traditional investments.',
          },
        ],
      },
    ],
    cta: {
      title: 'Track your digital holdings',
      description: 'Download Kura and add your first digital asset connection.',
      primaryLabel: 'Download Kura',
      primaryTo: '/download',
    },
  },
} as const satisfies Record<string, FeaturePageConfig>

export type FeaturePageSlug = keyof typeof FEATURE_PAGES

export function getFeaturePageConfig(slug: FeaturePageSlug): FeaturePageConfig {
  return FEATURE_PAGES[slug]
}
