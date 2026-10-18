import { ArrowDownRight, BadgeCheck, ChevronRight } from 'lucide-react';
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

const facts = [
  { label: 'Name', value: 'V E N O M' },
  { label: 'Age', value: '18+' },
  { label: 'Born', value: 'June 30' },
  { label: 'College', value: '1st Year' },
  { label: 'Based in', value: 'Meerut' },
  { label: 'Favorite colour', value: 'Black' },
];

const socials = [
  {
    slug: 'telegram-username',
    label: 'Telegram · username',
    handle: '𝐕 𝚬 𝚴 𝚶 𝚳 ⴕ',
    href: 'https://t.me/ll_deadly_venom_ll',
    Icon: FaTelegramPlane,
  },
  {
    slug: 'telegram-channel',
    label: 'Telegram · channel',
    handle: '🍃⋆─┼ ༢།धे ༢།धे⋆─┼༗🪈🍃',
    href: 'https://t.me/about_deadly_venom',
    Icon: FaTelegramPlane,
  },
  {
    slug: 'instagram',
    label: 'Instagram',
    handle: '@kiru_.ops',
    href: 'https://www.instagram.com/kiru_.ops/',
    Icon: FaInstagram,
  },
  {
    slug: 'youtube',
    label: 'YouTube',
    handle: '@hyper_trading_official',
    href: 'https://youtube.com/@hyper_trading_official',
    Icon: FaYoutube,
  },
];

function App() {
  return (
    <main className="profile-page">
      <div className="site-shell">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="V E N O M profile home" data-testid="link-home">
            V<span>.</span>N
          </a>
          <div className="top-note">PERSONAL PROFILE&nbsp; / &nbsp;MEERUT, IN</div>
        </header>

        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow reveal">About Krishna <span aria-hidden="true">·</span> Telegram name <BadgeCheck size={14} aria-label="Verified" /></div>
            <h1 className="reveal delay-1" id="hero-title">
              V E N O M
              <span>Krishna</span>
            </h1>
            <p className="hero-description reveal delay-2">
              Quiet presence. <strong>Unmistakable energy.</strong><br />
              A little about the person behind the name.
            </p>
            <div className="hero-actions reveal delay-2">
              <a className="primary-link" href="#profile" data-testid="link-explore-profile">
                EXPLORE PROFILE <ArrowDownRight size={15} aria-hidden="true" />
              </a>
              <span className="availability">18+ &nbsp;·&nbsp; Meerut</span>
            </div>
          </div>

          <div className="portrait-stage" aria-label="Monochrome anime portrait">
            <span className="portrait-number">PROFILE / 01</span>
            <span className="side-stamp" aria-hidden="true">影</span>
            <div className="portrait-backdrop" />
            <img className="portrait" src="/venom-avatar.jpg" alt="Monochrome anime portrait of a young man" data-testid="img-avatar" />
            <span className="portrait-caption">V E N O M — KRISHNA</span>
          </div>

          <div className="hero-bottom">
            <a className="scroll-cue" href="#profile" data-testid="link-scroll-profile"><span /> SCROLL TO KNOW ME</a>
             <span className="hero-coordinate">MEERUT &nbsp; / &nbsp; INDIA</span>
          </div>
        </section>

        <section className="profile-section" id="profile" aria-labelledby="profile-title">
          <div className="section-heading">
            <span className="section-index">01 / THE DETAILS</span>
            <h2 id="profile-title">A few things worth knowing.</h2>
            <p className="section-subtitle">NO EXTRA LORE. JUST ME.</p>
          </div>
          <div className="facts-grid">
            {facts.map((fact) => (
              <article className="fact" key={fact.label} data-testid={`fact-${fact.label.toLowerCase().replaceAll(' ', '-')}`}>
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">{fact.value}</span>
              </article>
            ))}
          </div>
          <div className="anime-note">
            <div>
              <span className="micro-label">CURRENT FAVORITE ANIME</span>
              <strong>Solo Leveling</strong>
            </div>
            <span className="anime-mark" aria-hidden="true"><ChevronRight size={20} /></span>
          </div>

          <section className="social-section" aria-labelledby="social-title">
            <div className="social-heading">
              <span className="section-index">02 / FIND ME</span>
              <h2 id="social-title">Around the web.</h2>
            </div>
            <div className="social-grid">
              {socials.map(({ slug, label, handle, href, Icon }) => (
                <a
                  className="social-link"
                  key={slug}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${label}: ${handle}`}
                  data-testid={`link-social-${slug}`}
                >
                  <Icon className="social-icon" aria-hidden="true" />
                  <span className="social-copy">
                    <span className="social-label">{label}</span>
                    <span className="social-handle">{handle}</span>
                  </span>
                  <ChevronRight className="social-arrow" size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>

          <aside className="bio-warning" aria-label="Bio warning" data-testid="bio-warning">
            <span className="bio-warning-label">BIO</span>
            <p>⚠️ Warning: Many users report that this account impersonates a famous person or organisation.</p>
          </aside>
        </section>

        <footer className="closing">
          <span className="closing-name">V E N O M &nbsp;·&nbsp; KRISHNA</span>
          <span className="closing-line">MADE OF SHADOWS, STILL IN THE MAKING.</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
