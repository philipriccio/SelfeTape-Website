import { CtaSignup } from "@/components/CtaSignup";
import { MobileNav } from "@/components/MobileNav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SignupForm } from "@/components/SignupForm";
import Link from "next/link";

const flowBadges = [
  "Import Sides",
  "Natural Voices",
  "Rehearse",
  "Record",
  "Edit",
  "Clean Up Audio",
  "Assemble & Review",
  "One-Tap Export",
];

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <div className="coming-soon-banner">
        <span>🎬 Coming Soon to iOS</span>
        <a href="#join" className="banner-cta">Get Early Access</a>
      </div>

      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-wordmark">
            Self<em>e</em>Tape
          </Link>
          <div className="nav-links">
            <a href="#story" className="nav-link">Our Story</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#studio" className="nav-link">Studio</a>
            <a href="#residuals" className="nav-link">Residuals</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link href="/blog" className="nav-link">Blog</Link>
            <a href="#join" className="nav-cta">Join Waitlist</a>
          </div>
          <MobileNav />
        </div>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <h1>Your whole self-tape workflow.<br /><em>One app.</em></h1>
          <p className="hero-sub">Import your sides, choose a reader, record your tape, edit, and submit — all without leaving the app. No studio. No favours. Just you and your craft.</p>
          <SignupForm />

          <div className="hero-visual fade-in">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-logo">Self<em>e</em>Tape</div>
                <div className="phone-rec-btn">
                  <div className="phone-rec-inner" />
                </div>
              </div>
            </div>
            <div className="hero-flow-badges">
              {flowBadges.map((badge, index) => (
                <div key={badge} className="flow-badge" style={{ ["--delay" as string]: `${index * 2}s` }}>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="built-by fade-in">
        <div className="built-by-inner">
          Built by an actor. For actors.
        </div>
      </section>

      <section className="story fade-in" id="story">
        <div className="story-inner">
          <h2>We&apos;ve all been there.</h2>
          <div className="story-body">
            <p>Your reader cancels twenty minutes before you were supposed to tape. Your scene partner is stuck at their day job. Your roommate just got home and the apartment is chaos. The kids are finally asleep but you&apos;ve got maybe an hour before you need to be too. You&apos;re in a hotel room in another city. You&apos;re on set all day and the only window you have is between wrap and dinner.</p>
            <p>And the tape is due tomorrow.</p>
            <p>Let&apos;s be honest — <strong>none of us asked for self-tapes.</strong> They were thrust on us. And now that we&apos;re years into them, the novelty of “at least I don&apos;t have to schlep to the audition room” has long worn off. What&apos;s left is the reality: you need to produce a professional-quality tape, on your own, on your schedule, with whatever you&apos;ve got available.</p>
            <p>Which usually means calling in a favour. Again. From your actor friend who&apos;s done it six times this month. From your partner who loves you but definitely doesn&apos;t love cold-reading sides at 10 PM. From your mom, who tries her best. From whoever picks up the phone.</p>
            <p>We&apos;ve all sent tapes we weren&apos;t proud of. Not because we weren&apos;t prepared. Not because we didn&apos;t do the work. But because the circumstances didn&apos;t give us a fair shot. <strong>And that&apos;s the part that stings.</strong></p>
            <p>That&apos;s why Self-e-Tape exists. <em>Not to replace your reader</em> — nothing beats a real person in the room with you. But for all those times when that&apos;s not an option, you deserve better than performing to silence and hoping for the best.</p>
            <p>Self-e-Tape gives you a reader who&apos;s always available. At midnight. In a hotel room. Between putting the kids to bed and collapsing yourself. It handles your slate, your title card, your edit, and your export. <strong>You focus on the work. We&apos;ll handle the rest.</strong></p>
          </div>
          <div className="story-sig">
            <strong>Philip Riccio</strong>
            <span className="sig-subtitle">Actor, just like you.</span>
          </div>
        </div>
      </section>

      <section className="how-it-works fade-in">
        <div className="section-label">How it works</div>
        <h2 className="section-title">Import. Record. Submit. Done.</h2>
        <p className="section-subtitle">Everything you need for a professional self-tape, in the order you actually do it.</p>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Import</h3>
            <p>Drop in your PDF sides. We parse the script and find the characters. You choose the voices.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Record</h3>
            <p>Tape your performance with your reader playing through your speaker. Record as many takes as you want.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Submit</h3>
            <p>Add your slate and title card, arrange your takes, preview, and export a submission-ready tape.</p>
          </div>
        </div>
      </section>

      <section className="features fade-in" id="features">
        <div className="features-inner">
          <div className="section-label">Everything you need</div>
          <h2 className="section-title">More than just a reader app.</h2>
          <p className="section-subtitle">Other apps stop at recording. We thought through every step of putting yourself on tape.</p>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>A reader who&apos;s always available</h3>
              <p>Assign a voice to each character. Your reader plays through the speaker while you perform to camera. Available at midnight. Never judges your performance. No matter how big a swing you take.</p>
            </div>
            <div className="feature-card">
              <h3>Smart script import</h3>
              <p>Drop in your PDF sides. The app finds the characters, identifies your lines, and organises the scenes — automatically. No manual formatting.</p>
            </div>
            <div className="feature-card">
              <h3>Trim, edit, and polish</h3>
              <p>Trim the start and end of each take. Adjust the audio mix. Get each take exactly how you want it before it goes into your final tape.</p>
            </div>
            <div className="feature-card">
              <h3>Slate, title card, assembly</h3>
              <p>Record your slate, add a professional title card, arrange everything in the right order. Preview the whole tape end-to-end before you export.</p>
            </div>
            <div className="feature-card">
              <h3>Unlimited takes</h3>
              <p>Record as many takes as you want. Review them all. Pick your best. No limits, no tokens, no “you&apos;ve used your 10 scenes this month.”</p>
            </div>
            <div className="feature-card">
              <h3>One-tap export</h3>
              <p>Export a submission-ready file. Share directly to email, Google Drive, or wherever casting wants it. From sides to send — one app.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lines-on fade-in">
        <div className="lines-on-inner">
          <h2>A completely useless feature.</h2>
          <p>We should mention — and we&apos;re only mentioning this for completeness — that Self-e-Tape has a Lines On mode. When you turn it on, all of your lines appear at the bottom of the screen while you&apos;re recording. Like subtitles. For your own sides.</p>
          <p>Which means, theoretically, you wouldn&apos;t actually need to memorise your lines before taping. You could just… read them. While performing. On camera.</p>
          <p><strong>Not that you would ever do that.</strong></p>
          <p>No actor has ever taped their sides to the wall just out of frame. No one has ever balanced a laptop on a stack of books behind their phone with the script in 48-point font. That has literally never happened. We checked.</p>
          <p>So Lines On is a completely pointless feature that nobody will use. But it&apos;s there. For no reason at all.</p>
        </div>
      </section>

      <section className="studio fade-in" id="studio">
        <div className="studio-inner">
          <div className="section-label">What sets us apart</div>
          <h2 className="section-title">Only you&apos;ll know.</h2>
          <p className="section-subtitle">Everything we build makes your tape look and sound like you had a proper setup, a good room, and all the time in the world. Your agent won&apos;t know the difference. Casting won&apos;t either. You&apos;re the star — not the app.</p>
          <div className="studio-list">
            <div className="studio-item">
              <h3>Natural Voices</h3>
              <p>Our secret sauce. Your reader doesn&apos;t just sound human — they sound like they&apos;re in the room with you, not coming out of your phone. That&apos;s the difference between a tape that feels like you had a reader and one that sounds like you used an app.</p>
            </div>
            <div className="studio-item">
              <h3>Studio Audio</h3>
              <p>Your living room sounds like a studio. De-reverb, de-noise, voice leveling — all invisible, all automatic.</p>
            </div>
            <div className="studio-item">
              <h3>Lighting Correction</h3>
              <p>Bad lighting screams self-tape. We fix your white balance and exposure so it doesn&apos;t.</p>
            </div>
            <div className="studio-item">
              <h3>Rehearse Mode</h3>
              <p>Run your lines until you&apos;re ready. No camera, no pressure. When you hit record, you&apos;re warmed up and confident.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="residuals fade-in" id="residuals">
        <div className="residuals-inner">
          <h2>We&apos;re bringing residuals back.</h2>
          <div className="residuals-layout">
            <div className="residuals-narrative">
              <p>You know what residuals used to mean. You do the work, and if that work keeps generating value, you keep getting paid for it. That was the deal.</p>
              <p>The streaming era gutted that deal. And we&apos;re not going to fix the whole industry with a self-tape app. We know that.</p>
              <p>But here&apos;s what we can do. If you tell another actor about Self-e-Tape and they subscribe, <strong>you earn 10% of their subscription. Every month. For as long as they&apos;re a member.</strong></p>
              <p>That money first covers your own subscription. Refer ten friends and you&apos;ll never pay for Self-e-Tape. Ever. After that, the extra accumulates as cash. Real money — not credits, not points.</p>
              <p>We&apos;re calling it the Residuals Program because that&apos;s what it is. You do the work of sharing something you believe in, and you keep getting paid for it. <strong>The way it&apos;s supposed to work.</strong></p>
              <p>If you&apos;re here early, your rate is locked for life. The people who believed in us from the beginning shouldn&apos;t get less because the show got bigger.</p>
            </div>
            <div className="residuals-highlights">
              <div className="residual-highlight">
                <div className="residual-highlight-num">10%</div>
                <h3>Every month. Forever.</h3>
                <p>Of every subscription your referrals pay. Not once — ongoing.</p>
              </div>
              <div className="residual-highlight">
                <div className="residual-highlight-num">10</div>
                <h3>Refer 10. Never pay.</h3>
                <p>Your earnings cover your subscription first. Ten friends = free for life.</p>
              </div>
              <div className="residual-highlight">
                <div className="residual-highlight-num">$100</div>
                <h3>Cash out. Real money.</h3>
                <p>Extra earnings accumulate. Hit $100, withdraw it. No hoops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing fade-in" id="pricing">
        <div className="pricing-inner">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Try everything. Pay when you&apos;re ready.</h2>
          <p className="section-subtitle">The full app is free to use. Your first clean export is on us.</p>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Free</h3>
              <div className="pricing-price">$0</div>
              <div className="pricing-period">forever</div>
              <div className="pricing-spacer" />
              <ul className="pricing-features">
                <li>Full app access</li>
                <li>Import, record, edit, preview</li>
                <li>1 clean export free</li>
                <li>Watermark after that</li>
              </ul>
              <a href="#join" className="pricing-cta outline">Get Started Free</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">MOST POPULAR</div>
              <h3>Pro</h3>
              <div className="pricing-price">$9.99</div>
              <div className="pricing-period">per month</div>
              <div className="pricing-save">$79.99/year — Save 33%</div>
              <ul className="pricing-features">
                <li>Everything in Free</li>
                <li>Unlimited clean exports</li>
                <li>No watermark — ever</li>
                <li>Full post-production suite</li>
                <li>The Residuals Program</li>
                <li>Priority support</li>
              </ul>
              <a href="#join" className="pricing-cta solid">Join the Waitlist</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section fade-in" id="join">
        <div className="cta-inner">
          <h2>Be the first to know.</h2>
          <p>Self-e-Tape is coming soon. Join the waitlist and we&apos;ll let you know the moment it&apos;s ready.</p>
          <CtaSignup />
        </div>
      </section>

      <footer>
        <div className="footer-wordmark">Self<em>e</em>Tape</div>
        <div className="footer-tagline">Built by an actor. For actors.</div>
        <div className="footer-social">
          <a href="https://instagram.com/selfetape" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com/@selfetape" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://x.com/selfetape" target="_blank" rel="noreferrer">X</a>
          <a href="https://youtube.com/@selfetape" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:hello@selfetape.com">Contact</a>
        </div>
        <div className="footer-copy">© 2026 Self-e-Tape. Made in Toronto.</div>
      </footer>
    </>
  );
}
