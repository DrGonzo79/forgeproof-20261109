# Source notes

Derived analysis of the free IdeaBrowser **Idea of the Day** report, read in the authenticated browser on **2026-11-09**.

- Title: App that creates digital proof of work for handmade goods
- Public URL: https://www.ideabrowser.com/hub/ideas/today
- IB Index: **5.8**
- Category: Marketplace
- Revenue range: **$1.5M–$3M ARR** ceiling; **$50K–$90K ARR** year-one range
- Difficulty / capital / first revenue: Moderate / **$8K–$20K** / **45–90 days**
- Demand profile: distribution 10/10, domain access 9/10, sales grit 8/10, build 3/10, capital 3/10

## Buyer and painful status quo

Initial user is a full-time independent maker selling physical goods above $200, especially jewelry. The economic buyer should instead begin as a jewelry guild or juried market. Copycats reuse maker photographs on mass-market sites; automated marketplace enforcement can then mistake the original for the copier and remove revenue-producing listings. Existing paper or Canva certificates document a claim after the fact but do not preserve the making sequence.

## Wedge and why now

The report's sharpest gap is **in-process proof**, not another blockchain certificate: materials, suppliers, stage timestamps, tools, partners, inspection and buyer-facing continuity. Luxury brands normalized NFC passports in 2026, and low-cost tags now make per-item economics plausible. This prototype intentionally models evidence completeness and avoids claiming that a QR/NFC tag proves authenticity.

## Market and evidence

- Etsy reported 5.706M active sellers and 86.969M active buyers at June 30, 2026; jewelry/personal accessories is a major GMS group.
- IdeaBrowser rates pain 7/10 and cites forum accounts where stolen photos and automated flags affected bestseller revenue.
- Etsy's 2024 Transparency Report reportedly showed 22% more listing removals and 1.5× more seller suspensions for creativity/handmade-policy violations versus 2023.
- Search demand for handmade-specific solution terms is effectively zero; `digital product passport` demand is adjacent but not the target buyer. This is an outbound/channel sale, not SEO-led SaaS.
- EU textile DPP timing does not directly pull jewelry, ceramics, leather, furniture, knives or instruments; treating regulation as the core jewelry trigger would be misleading.

Source domains named by the report: etsy.com / Etsy investor filings and transparency reports, reddit.com, community.etsy.com, commission.europa.eu, poltronafrau.com, verisart.com, iscompliant.app, Shopify App Store, and vendor sites for Arianee, Certilogo, Authentica and Seal Network.

## Competitors

- **Verisart:** closest incumbent, maker-oriented COAs, Shopify app, public plans around $29.99–$99.99/month, $1 credits, and a reported 30K customers. Main strategic threat.
- **Arianee / Certilogo / Authentica / Seal Network:** enterprise brand, DPP or authentication platforms; sales-led and poorly shaped for solo makers.
- **Tappr:** mapped by the report but with limited visible detail in the free report.
- **Status quo:** $3–$35 Canva COA templates and informal photo folders.

## Offer and GTM

Report ladder: free “Prove It Was Handmade” kit + 3 passports; $19/month starter (25 passports, capture, maker page, starter tags); $39/month full-time plan (100 passports, transfer, care and repair); $299/month guild/juried-market plan for 20 makers. Tags could cost roughly $0.08–$0.35 in bulk and sell around $3.50 each in packs. Initial GTM should close one guild, manually onboard 20 jewelers, and measure complete captures and buyer scans—not buy Google Ads.

Napkin assumptions from the report include 600 forum-thread contacts, 150 free signups, 23 starter conversions, and one guild for roughly $1,116 MRR at 90 days. Six of ten rows are founder-controlled assumptions; none are validated demand.

## Biggest risks

Verisart can copy in-process capture; a tag can be moved; evidence can be staged or fabricated; maker onboarding may be too burdensome; buyers may not scan; guilds may resist acting as reviewers; the product can overstate “verification.” The defensible asset would be a trusted category-specific evidence standard and channel network, not the QR code or scoring formula.

## Prototype decision

ForgeProof is a deterministic proof-packet workbench for fictional jewelry, ceramics and leather items. It scores completeness, exposes gaps, previews a buyer passport and rehearses publish gates. It does not authenticate an object, call paid APIs, save data, issue a real NFC identity, or integrate with Etsy.
