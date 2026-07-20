'use client'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const bodyContent = `
  <h2>One Licensed Agent, Every Option Across the Shenandoah Valley</h2>
  <p>Winchester Home Options is built around one licensed Virginia agent, Dan White, rather than a call center or a single cash-offer script. Over more than 20 years working Winchester, Frederick County, Warren County, and Clarke County, he's handled the full range of reasons people sell: pre-foreclosure and mortgage default, divorce, probate and inherited property, delinquent tax liens, HOA disputes, tired landlords ready to be done with tenants, military and job-related PCS moves, fire or mold damage, general financial hardship, and plenty of homeowners who just want a fast, uncomplicated sale with no repairs required.</p>
  <p>Because he's a licensed agent as well as someone with direct access to a large network of cash investors, sellers get an honest comparison between an off-market cash sale, an as-is MLS listing, and everything in between — instead of being steered toward whichever option benefits the buyer most.</p>
  <h2>Covering Winchester, Frederick, Warren, and Clarke Counties</h2>
  <p>The service area runs from the independent city of Winchester out through the rest of Frederick County — Stephens City, Clearbrook, Middletown — north into Warren County around Front Royal near the entrance to Shenandoah National Park, and east into the Blue Ridge foothills of Clarke County around Berryville. Every one of these communities sits along the I-81 corridor through the northern Shenandoah Valley, and Dan works all of them directly rather than handing off referrals.</p>
`

export default function HomePage() {
  async function handleSubmit(e) {
    e.preventDefault()
    const btn = e.target.querySelector('.btn-submit')
    btn.textContent = 'Submitting...'
    btn.disabled = true

    const form = e.target
    const data = {
      first_name: form.querySelector('input[placeholder="First"]').value,
      last_name: form.querySelector('input[placeholder="Last"]').value,
      address: form.querySelector('input[placeholder="123 Main St, Winchester, VA"]').value,
      situation: form.querySelectorAll('select')[0].value,
      timeline: form.querySelectorAll('select')[1].value,
      phone: form.querySelector('input[type="tel"]').value,
      email: form.querySelector('input[type="email"]').value,
      source_site: 'winchesterhomeoptions',
      source_page: 'homepage',
      status: 'new',
    }

    const { error } = await supabase.from('leads').insert([data])

    if (error) {
      btn.textContent = 'Something went wrong — please call 1-888-2-SELL-VA'
      btn.style.background = '#c0392b'
      btn.disabled = false
      console.error(error)
    } else {
      btn.textContent = "✓ Submitted — We'll be in touch within 24 hours"
      btn.style.background = '#2a7a4b'
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    }
  }

  return (
    <>
      <style>{`
        :root {
          --navy: #1B2B4B;
          --navy-dark: #0f1c32;
          --navy-light: #243860;
          --apple: #B83A3A;
          --apple-light: #d24e4e;
          --apple-pale: #f5dcdc;
          --cream: #F7F5F2;
          --white: #ffffff;
          --text: #1A1A1A;
          --text-muted: #5a5a5a;
          --text-light: #8a8a8a;
          --border: #e2ddd8;
          --shadow: 0 4px 24px rgba(27,43,75,0.10);
          --shadow-lg: 0 12px 48px rgba(27,43,75,0.16);
          --font-playfair: var(--font-playfair);
          --font-serif: var(--font-source-serif);
          --font-mono: var(--font-dm-mono);
        }

        body {
          font-family: var(--font-source-serif), Georgia, serif;
          color: var(--text);
          background: var(--cream);
          line-height: 1.7;
        }

        h1, h2, h3, h4 {
          font-family: var(--font-playfair), Georgia, serif;
          line-height: 1.2;
        }

        img { max-width: 100%; display: block; }
        a { color: inherit; text-decoration: none; }

        .container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(27, 43, 75, 0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(184, 58, 58, 0.2);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .nav-logo {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.01em;
        }
        .nav-logo span { color: var(--apple); }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          color: rgba(255,255,255,0.8);
          font-family: var(--font-source-serif), serif;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--apple-light); }
        .nav-cta {
          background: var(--apple) !important;
          color: var(--white) !important;
          padding: 10px 22px;
          border-radius: 4px;
          font-weight: 600 !important;
          transition: background 0.2s !important;
        }
        .nav-cta:hover { background: var(--apple-light) !important; }
        .nav-phone {
          color: rgba(255,255,255,0.6);
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.85rem;
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          background: var(--navy);
          display: flex;
          align-items: center;
          padding-top: 72px;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(184,58,58,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 0% 100%, rgba(184,58,58,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 80px;
          align-items: center;
          padding: 80px 0;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(184,58,58,0.12);
          border: 1px solid rgba(184,58,58,0.25);
          color: var(--apple-light);
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 100px;
          margin-bottom: 28px;
        }
        .hero-eyebrow::before {
          content: '';
          width: 6px;
          height: 6px;
          background: var(--apple);
          border-radius: 50%;
        }
        .hero h1 {
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 900;
          color: var(--white);
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          line-height: 1.05;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--apple);
        }
        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: rgba(255,255,255,0.55);
          font-style: italic;
          margin-bottom: 32px;
          font-weight: 300;
        }
        .hero-body {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 540px;
        }
        .hero-body strong { color: rgba(255,255,255,0.95); font-weight: 600; }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--apple);
          color: var(--white);
          padding: 16px 32px;
          border-radius: 4px;
          font-family: var(--font-source-serif), serif;
          font-size: 1rem;
          font-weight: 600;
          transition: background 0.2s, transform 0.2s;
          cursor: pointer;
          border: none;
        }
        .btn-primary:hover { background: var(--apple-light); transform: translateY(-1px); }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .btn-secondary:hover { color: var(--white); }
        .btn-arrow {
          width: 32px;
          height: 32px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
        }
        .hero-stats {
          display: flex;
          gap: 32px;
          margin-top: 52px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .stat { display: flex; flex-direction: column; gap: 4px; }
        .stat-number {
          font-family: var(--font-playfair), serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--apple);
          line-height: 1;
        }
        .stat-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          font-family: var(--font-dm-mono), monospace;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* HERO CARD */
        .hero-card {
          background: var(--white);
          border-radius: 12px;
          padding: 36px 32px;
          box-shadow: var(--shadow-lg);
          position: relative;
        }
        .hero-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--apple), var(--apple-light));
          border-radius: 12px 12px 0 0;
        }
        .card-title {
          font-family: var(--font-playfair), serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 6px;
        }
        .card-subtitle {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          font-style: italic;
        }
        .form-group { margin-bottom: 16px; }
        .form-label {
          display: block;
          font-size: 0.8rem;
          font-family: var(--font-dm-mono), monospace;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 6px;
        }
        .form-input, .form-select {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--border);
          border-radius: 6px;
          font-family: var(--font-source-serif), serif;
          font-size: 0.95rem;
          color: var(--text);
          background: var(--cream);
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          appearance: none;
        }
        .form-input:focus, .form-select:focus {
          border-color: var(--apple);
          box-shadow: 0 0 0 3px rgba(184,58,58,0.12);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .btn-submit {
          width: 100%;
          background: var(--navy);
          color: var(--white);
          border: none;
          padding: 15px 24px;
          border-radius: 6px;
          font-family: var(--font-source-serif), serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          margin-top: 4px;
        }
        .btn-submit:hover { background: var(--navy-light); transform: translateY(-1px); }
        .form-disclaimer {
          font-size: 0.75rem;
          color: var(--text-light);
          text-align: center;
          margin-top: 12px;
          font-style: italic;
        }
        .phone-alt {
          text-align: center;
          margin-top: 16px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .phone-alt a { color: var(--apple); font-family: var(--font-dm-mono), monospace; font-weight: 500; }

        /* DIFF STRIP */
        .diff-strip { background: var(--apple); padding: 20px 0; }
        .diff-strip-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }
        .diff-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--white);
          font-size: 0.9rem;
          font-weight: 600;
        }
        .diff-icon { font-size: 1.1rem; }
        .diff-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.3); }

        /* WHY */
        .why { padding: 100px 0; background: var(--cream); }
        .section-eyebrow {
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--apple);
          margin-bottom: 16px;
        }
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--navy);
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          max-width: 600px;
        }
        .section-title em { font-style: italic; color: var(--apple); }
        .section-body {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 580px;
          line-height: 1.8;
          margin-bottom: 48px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 60px;
        }
        .why-card {
          background: var(--white);
          border-radius: 10px;
          padding: 36px 28px;
          border: 1px solid var(--border);
          transition: box-shadow 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .why-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--apple);
          transform: scaleX(0);
          transition: transform 0.3s;
          transform-origin: left;
        }
        .why-card:hover { box-shadow: var(--shadow); transform: translateY(-4px); }
        .why-card:hover::after { transform: scaleX(1); }
        .why-number {
          font-family: var(--font-playfair), serif;
          font-size: 3.5rem;
          font-weight: 900;
          color: var(--apple-pale);
          line-height: 1;
          margin-bottom: 16px;
        }
        .why-card h3 { font-size: 1.2rem; color: var(--navy); margin-bottom: 12px; }
        .why-card p { font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; }

        /* HOW */
        .how {
          padding: 100px 0;
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        .how::before {
          content: '';
          position: absolute;
          top: -200px; right: -200px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(184,58,58,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .how .section-title { color: var(--white); }
        .how .section-eyebrow { color: var(--apple); }
        .how .section-body { color: rgba(255,255,255,0.6); }
        .steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px 64px;
          margin-top: 60px;
        }
        .step { display: flex; gap: 24px; align-items: flex-start; }
        .step-number {
          flex-shrink: 0;
          width: 52px; height: 52px;
          background: rgba(184,58,58,0.12);
          border: 1px solid rgba(184,58,58,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-playfair), serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--apple);
        }
        .step-content h3 { font-size: 1.15rem; color: var(--white); margin-bottom: 10px; }
        .step-content p { font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.7; }

        /* OPTIONS */
        .options { padding: 100px 0; background: var(--cream); }
        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 60px;
        }
        .option-card {
          background: var(--white);
          border-radius: 10px;
          padding: 36px 32px;
          border: 1px solid var(--border);
          display: flex;
          gap: 24px;
          align-items: flex-start;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .option-card:hover { box-shadow: var(--shadow); transform: translateY(-3px); }
        .option-card.featured {
          background: var(--navy);
          border-color: var(--navy);
          grid-column: span 2;
          align-items: center;
        }
        .option-icon {
          flex-shrink: 0;
          width: 56px; height: 56px;
          background: var(--apple-pale);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        .option-card.featured .option-icon { background: rgba(184,58,58,0.15); }
        .option-content h3 { font-size: 1.2rem; color: var(--navy); margin-bottom: 10px; }
        .option-card.featured .option-content h3 { color: var(--white); font-size: 1.4rem; }
        .option-content p { font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; }
        .option-card.featured .option-content p { color: rgba(255,255,255,0.65); font-size: 1rem; }
        .option-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--apple);
          color: var(--white);
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 12px;
        }

        /* SITUATIONS */
        .situations { padding: 100px 0; background: var(--white); }
        .situations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 48px;
        }
        .situation-chip {
          background: var(--cream);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 20px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .situation-chip:hover { background: var(--navy); border-color: var(--navy); }
        .situation-chip:hover .situation-text { color: var(--white); }
        .situation-chip:hover .situation-icon { background: rgba(184,58,58,0.2); }
        .situation-icon {
          width: 36px; height: 36px;
          background: var(--apple-pale);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .situation-text { font-size: 0.9rem; color: var(--text); font-weight: 600; transition: color 0.2s; }

        /* TRUST */
        .trust { padding: 100px 0; background: var(--apple-pale); }
        .trust-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .trust-quote {
          font-family: var(--font-playfair), serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 400;
          font-style: italic;
          color: var(--navy);
          line-height: 1.4;
          margin-bottom: 32px;
        }
        .trust-quote::before {
          content: '\\201C';
          font-size: 4rem;
          color: var(--apple);
          line-height: 0;
          vertical-align: -0.5em;
          margin-right: 4px;
        }
        .trust-attribution {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-family: var(--font-dm-mono), monospace;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .trust-stars { color: var(--apple); font-size: 1.1rem; margin-bottom: 8px; }
        .trust-stats { display: flex; flex-direction: column; gap: 24px; }
        .trust-stat {
          background: var(--white);
          border-radius: 10px;
          padding: 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: var(--shadow);
        }
        .trust-stat-icon {
          width: 52px; height: 52px;
          background: var(--navy);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }
        .trust-stat-number {
          font-family: var(--font-playfair), serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1;
        }
        .trust-stat-label { font-size: 0.85rem; color: var(--text-muted); margin-top: 4px; }

        /* CTA */
        .cta-section {
          padding: 100px 0;
          background: var(--navy);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(184,58,58,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-section h2 { font-size: clamp(2rem, 4vw, 3rem); color: var(--white); margin-bottom: 20px; position: relative; }
        .cta-section h2 em { font-style: italic; color: var(--apple); }
        .cta-section p { font-size: 1.1rem; color: rgba(255,255,255,0.65); max-width: 520px; margin: 0 auto 40px; line-height: 1.8; }
        .cta-actions { display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; position: relative; }
        .cta-phone { display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.7); font-size: 1rem; }
        .cta-phone a { color: var(--apple-light); font-family: var(--font-dm-mono), monospace; font-size: 1.1rem; }

        /* FOOTER */
        footer {
          background: var(--navy-dark);
          padding: 48px 0 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 40px;
        }
        .footer-brand { font-family: var(--font-playfair), serif; font-size: 1.2rem; font-weight: 700; color: var(--white); margin-bottom: 12px; }
        .footer-brand span { color: var(--apple); }
        .footer-desc { font-size: 0.9rem; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 20px; }
        .footer-phone { font-family: var(--font-dm-mono), monospace; color: var(--apple); font-size: 1rem; }
        .footer-heading { font-family: var(--font-dm-mono), monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin-bottom: 16px; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a { color: rgba(255,255,255,0.55); font-size: 0.9rem; transition: color 0.2s; }
        .footer-links a:hover { color: var(--apple-light); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px; display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: rgba(255,255,255,0.25); }
        .footer-disclaimer { font-size: 0.75rem; color: rgba(255,255,255,0.2); max-width: 400px; text-align: right; line-height: 1.5; }
        .footer-disclaimer a { color: rgba(255,255,255,0.2); }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-eyebrow { animation: fadeUp 0.6s ease both; }
        .hero h1 { animation: fadeUp 0.6s ease 0.1s both; }
        .hero-subtitle { animation: fadeUp 0.6s ease 0.2s both; }
        .hero-body { animation: fadeUp 0.6s ease 0.3s both; }
        .hero-actions { animation: fadeUp 0.6s ease 0.4s both; }
        .hero-stats { animation: fadeUp 0.6s ease 0.5s both; }
        .hero-card { animation: fadeUp 0.7s ease 0.2s both; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .hero-card { max-width: 480px; }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .steps { grid-template-columns: 1fr; gap: 36px; }
          .options-grid { grid-template-columns: 1fr; }
          .option-card.featured { grid-column: span 1; flex-direction: column; }
          .situations-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-inner { grid-template-columns: 1fr; gap: 48px; }
          .footer-inner { grid-template-columns: 1fr; gap: 32px; }
          .nav-links { display: none; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .hero-stats { flex-wrap: wrap; gap: 24px; }
          .situations-grid { grid-template-columns: 1fr; }
          .diff-strip-inner { gap: 24px; }
          .diff-divider { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div className="nav-logo">Winchester<span>Home</span>Options</div>
          <ul className="nav-links">
            <li><a href="#how">How It Works</a></li>
            <li><a href="#options">Your Options</a></li>
            <li><a href="#situations">Situations</a></li>
            <li><a href="#contact" className="nav-cta">Free Consultation</a></li>
          </ul>
          <div className="nav-phone">1-888-2-SELL-VA</div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow">Licensed Virginia Agent · Shenandoah Valley</div>
              <h1>Know your<br /><em>Winchester</em><br />options before you sell.</h1>
              <p className="hero-subtitle">Twenty years in the Shenandoah Valley — working for you, not against you.</p>
              <p className="hero-body">
                Whether your home needs work, you&apos;re facing a tight timeline, or you&apos;re just not sure what path makes the most sense — <strong>Winchester sellers have more options than most realize.</strong>
                <br /><br />
                I&apos;m a licensed Virginia agent with two decades of hands-on experience in Winchester, Frederick County, Clarke, Warren, and Shenandoah County — plus direct access to thousands of investors who specifically buy homes in any condition. My job isn&apos;t to sell you anything — it&apos;s to make sure you understand every option available before you decide. The consultation is always free.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">Get Your Free Options Consultation</a>
                <a href="tel:18882735582" className="btn-secondary">
                  <span>1-888-2-SELL-VA</span>
                  <span className="btn-arrow">→</span>
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Years Local</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1,000s</span>
                  <span className="stat-label">As-Is Buyers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Free Consult</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Counties Served</span>
                </div>
              </div>
            </div>

            {/* LEAD FORM */}
            <div className="hero-card" id="contact">
              <div className="card-title">Get Your Free Options Review</div>
              <div className="card-subtitle">No pressure. No obligation. Just honest answers.</div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-input" placeholder="First" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-input" placeholder="Last" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Property Address</label>
                  <input type="text" className="form-input" placeholder="123 Main St, Winchester, VA" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Situation</label>
                  <select className="form-select form-input" required defaultValue="">
                    <option value="" disabled>Select your situation...</option>
                    <option>Facing foreclosure or pre-foreclosure</option>
                    <option>Inherited property</option>
                    <option>Going through divorce</option>
                    <option>Tax liens or delinquent taxes</option>
                    <option>Home needs major repairs</option>
                    <option>Behind on mortgage payments</option>
                    <option>Probate property</option>
                    <option>Tired landlord / problem tenants</option>
                    <option>Need to sell fast — relocation</option>
                    <option>Vacant property</option>
                    <option>Code violations</option>
                    <option>Other situation</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">How soon do you need to sell?</label>
                  <select className="form-select form-input" required defaultValue="">
                    <option value="" disabled>Select timeline...</option>
                    <option>ASAP — within 2 weeks</option>
                    <option>Within 30 days</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>Just exploring options</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-input" placeholder="(571) 000-0000" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="you@email.com" required />
                  </div>
                </div>
                <button type="submit" className="btn-submit">Get My Free Options Review →</button>
              </form>
              <p className="form-disclaimer">Your information is never shared or sold.</p>
              <p className="phone-alt">Toll Free: <a href="tel:18882735582">1-888-2-SELL-VA (273-5582)</a> · Local: <a href="tel:5719893269">571-989-3269</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFF STRIP */}
      <div className="diff-strip">
        <div className="container">
          <div className="diff-strip-inner">
            <div className="diff-item"><span className="diff-icon">✓</span>20+ Years in the Shenandoah Valley</div>
            <div className="diff-divider"></div>
            <div className="diff-item"><span className="diff-icon">✓</span>Licensed Virginia Agent</div>
            <div className="diff-divider"></div>
            <div className="diff-item"><span className="diff-icon">✓</span>Thousands of As-Is Investors</div>
            <div className="diff-divider"></div>
            <div className="diff-item"><span className="diff-icon">✓</span>Free No-Pressure Consultation</div>
            <div className="diff-divider"></div>
            <div className="diff-item"><span className="diff-icon">✓</span>All Options on the Table</div>
          </div>
        </div>
      </div>

      {/* WHY */}
      <section className="why">
        <div className="container">
          <div className="section-eyebrow">The difference</div>
          <h2 className="section-title">You deserve more than<br /><em>one offer.</em></h2>
          <p className="section-body">
            When you call a cash buyer, you get one number — take it or leave it. When you call a traditional agent, you get one path. I sit down with you, understand your full situation, and walk you through every option available. No agenda. No pressure.
          </p>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>
              <h3>I Know What Winchester Homes Are Actually Worth</h3>
              <p>Twenty years of hands-on experience in Winchester, Frederick County, and the Shenandoah Valley means I understand what properties sell for on Valley Mill Road, Senseny, Route 7, in Stephens City, Middletown, Berryville, Front Royal — in any condition. You&apos;ll get an honest number, not a guess.</p>
            </div>
            <div className="why-card">
              <div className="why-number">02</div>
              <h3>The Buyers in My Network Aren&apos;t Looking for Perfect Homes</h3>
              <p>They&apos;re looking for yours. I market your property to thousands of active investors who specifically seek homes in any condition. What feels like a problem to a retail buyer is an opportunity to them — and when they compete, your price goes up.</p>
            </div>
            <div className="why-card">
              <div className="why-number">03</div>
              <h3>I&apos;ll Tell You If Listing Gets You More</h3>
              <p>The MLS is the 800-pound gorilla. If listing your home as-is on the open market puts more money in your pocket, I&apos;ll tell you that — even if it means less for me.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="container">
          <div className="section-eyebrow">The process</div>
          <h2 className="section-title">Simple. Honest.<br /><em>No pressure.</em></h2>
          <p className="section-body">
            My consultation is always free. My job is to find the right path for your specific situation — not to push you toward any one outcome.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>You Reach Out</h3>
                <p>Fill out the form or call 1-888-2-SELL-VA. Tell me about your property and your situation. There&apos;s no obligation and nothing is shared with anyone.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>We Walk the Property</h3>
                <p>I come to you — anywhere from Winchester to Front Royal to Berryville. I&apos;ll walk through the property, assess its condition and value, and listen to understand your situation and timeline fully.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>I Present Your Options Honestly</h3>
                <p>You&apos;ll get a clear breakdown of every path available to you — listing as-is, marketing to cash buyers, and other options that fit your timeline and financial situation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>You Choose What Works for You</h3>
                <p>There&apos;s no pressure to decide anything on the spot. Take the information, think it through, and move forward when it feels right. My consultation is always free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="options" id="options">
        <div className="container">
          <div className="section-eyebrow">Your options</div>
          <h2 className="section-title">More paths than you<br /><em>probably know about.</em></h2>
          <p className="section-body">
            Most Winchester sellers think they have one option. In reality, there are several — and the right one depends entirely on your situation.
          </p>
          <div className="options-grid">
            <div className="option-card featured">
              <div className="option-icon">🏆</div>
              <div className="option-content">
                <div className="option-badge">Most Sellers Don&apos;t Know This</div>
                <h3>List As-Is on the Open Market</h3>
                <p>You don&apos;t have to fix anything to list on the MLS. As-is listings attract investors, flippers, and buyers looking for value — and multiple buyers competing for your home almost always means a better outcome than one off-market cash offer. If this path makes sense for your situation, it&apos;s usually the best financial outcome.</p>
              </div>
            </div>
            <div className="option-card">
              <div className="option-icon">💰</div>
              <div className="option-content">
                <h3>Market to As-Is Cash Investors</h3>
                <p>The investors in my network aren&apos;t looking for perfect homes — they&apos;re looking for yours. I market your Winchester-area property to thousands of buyers who specifically seek homes in any condition. Multiple offers, real competition, fast close. No repairs. No staging. No judgment.</p>
              </div>
            </div>
            <div className="option-card">
              <div className="option-icon">⚖️</div>
              <div className="option-content">
                <h3>Short Sale Assistance</h3>
                <p>Owe more than the house is worth? A short sale can help you avoid foreclosure and negotiate with your lender. I work with short sale specialists who manage the bank process on your behalf.</p>
              </div>
            </div>
            <div className="option-card">
              <div className="option-icon">🏦</div>
              <div className="option-content">
                <h3>Loan Modification &amp; Forbearance</h3>
                <p>Sometimes the best option is to stay in your home. I can connect you with HUD-approved counselors and lender programs that may let you restructure or pause your payments.</p>
              </div>
            </div>
            <div className="option-card">
              <div className="option-icon">🔑</div>
              <div className="option-content">
                <h3>Hard Money Bridge Loan</h3>
                <p>Have equity but need cash fast without selling? A hard money bridge loan can get you liquidity quickly while you decide your next move. I have trusted lender relationships ready to help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="situations" id="situations">
        <div className="container">
          <div className="section-eyebrow">Who we help</div>
          <h2 className="section-title">Every situation is<br /><em>different.</em></h2>
          <p className="section-body">
            There&apos;s no situation too complicated. If you&apos;re not sure whether we can help — call. Chances are we&apos;ve seen it before in Winchester or the Valley.
          </p>
          <div className="situations-grid">
            {[
              { icon: '⚠️', label: 'Pre-Foreclosure' },
              { icon: '🏚️', label: 'Home Needs Major Repairs' },
              { icon: '📋', label: 'Inherited Property' },
              { icon: '⚖️', label: 'Divorce' },
              { icon: '💸', label: 'Tax Liens' },
              { icon: '🔨', label: 'Code Violations' },
              { icon: '🏛️', label: 'Probate Sale' },
              { icon: '🏃', label: 'Relocation / Job Transfer' },
              { icon: '🔑', label: 'Tired Landlord' },
              { icon: '🏠', label: 'Vacant Property' },
              { icon: '💳', label: 'Behind on Payments' },
              { icon: '❓', label: 'Other Situation' },
            ].map((s) => (
              <a href="#contact" className="situation-chip" key={s.label}>
                <div className="situation-icon">{s.icon}</div>
                <span className="situation-text">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ padding: '90px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 760 }} dangerouslySetInnerHTML={{ __html: bodyContent }} />
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="container">
          <div className="trust-inner">
            <div>
              <div className="trust-stars">★★★★★</div>
              <blockquote className="trust-quote">
                Before you accept a cash offer, find out what your house is actually worth on the open market. Most Winchester sellers leave money on the table simply because nobody told them they had another option.
              </blockquote>
              <div className="trust-attribution">Winchester Home Options — Our Promise</div>
            </div>
            <div className="trust-stats">
              <div className="trust-stat">
                <div className="trust-stat-icon">🏠</div>
                <div>
                  <div className="trust-stat-number">20+ Years</div>
                  <div className="trust-stat-label">Hands-on experience in the Shenandoah Valley</div>
                </div>
              </div>
              <div className="trust-stat">
                <div className="trust-stat-icon">📍</div>
                <div>
                  <div className="trust-stat-number">3 Counties</div>
                  <div className="trust-stat-label">Frederick, Clarke &amp; Warren County</div>
                </div>
              </div>
              <div className="trust-stat">
                <div className="trust-stat-icon">💼</div>
                <div>
                  <div className="trust-stat-number">Licensed Agent</div>
                  <div className="trust-stat-label">Pearson Smith Realty, Virginia</div>
                </div>
              </div>
              <div className="trust-stat">
                <div className="trust-stat-icon">👥</div>
                <div>
                  <div className="trust-stat-number">Thousands</div>
                  <div className="trust-stat-label">Active investors who specifically buy homes in any condition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to know <em>all</em> your Winchester options?</h2>
          <p>The consultation is free. The information is honest. The decision is always yours.</p>
          <div className="cta-actions">
            <a href="#contact" className="btn-primary">Get Your Free Consultation</a>
            <div className="cta-phone">
              Toll Free: <a href="tel:18882735582">1-888-2-SELL-VA (273-5582)</a>
              &nbsp;·&nbsp;
              Local: <a href="tel:5719893269">571-989-3269</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">Winchester<span>Home</span>Options</div>
              <p className="footer-desc">
                A licensed Virginia real estate agent helping Winchester-area homeowners understand all their options — from listing as-is to connecting with thousands of investors who specifically buy homes in any condition. Twenty years of hands-on experience in the Shenandoah Valley.
              </p>
              <div className="footer-phone">571-989-3269</div>
            </div>
            <div>
              <div className="footer-heading">Quick Links</div>
              <ul className="footer-links">
                <li><a href="/sell-my-house-fast-winchester-va">Sell in Winchester</a></li>
                <li><a href="/sell-my-house-fast-front-royal-va">Sell in Front Royal</a></li>
                <li><a href="/sell-my-house-fast-stephens-city-va">Sell in Stephens City</a></li>
                <li><a href="/sell-house-foreclosure-winchester-va">Facing Foreclosure</a></li>
                <li><a href="/sell-inherited-house-winchester-va">Inherited Property</a></li>
                <li><a href="/sell-my-house-fast-frederick-county-va">Frederick County</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Service Areas</div>
              <ul className="footer-links">
                <li><a href="/sell-my-house-fast-winchester-va">Winchester City</a></li>
                <li><a href="/sell-my-house-fast-frederick-county-va">Frederick County</a></li>
                <li><a href="/sell-my-house-fast-clarke-county-va">Clarke County</a></li>
                <li><a href="/sell-my-house-fast-warren-county-va">Warren County</a></li>
                <li><a href="/sell-my-house-fast-front-royal-va">Front Royal</a></li>
                <li><a href="/sell-my-house-fast-berryville-va">Berryville</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 Winchester Home Options. All rights reserved.</div>
            <div className="footer-disclaimer">
              Licensed Real Estate Agent · Pearson Smith Realty · Virginia
              <br />
              <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
