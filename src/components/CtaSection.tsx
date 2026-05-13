'use client';

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Mail, Globe, Send, CheckCircle2, AlertCircle } from "lucide-react";
import BorderGlow from "./BorderGlow";
import { Link } from "@/navigation";
import { TURNSTILE_SITE_KEY } from "@/lib/constants";

export default function CtaSection({ noContainer = false }: { noContainer?: boolean }) {
  const t = useTranslations('CTA');
  const tn = useTranslations('Newsletter');
  const sectionRef = useRef(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [40, 0, 0, -40]);

  // Newsletter logic
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Cargar script de Turnstile
    const scriptId = 'turnstile-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    if (!window.turnstile || !turnstileRef.current) {
      setError(tn('errorMessage'));
      setLoading(false);
      return;
    }

    try {
      // Intentar resetear (ahora sí habrá algo que resetear)
      if (window.turnstile) {
        try { window.turnstile.reset(turnstileRef.current); } catch (e) { /* ignore */ }
      }

      // Turnstile execution
      console.log('>>> [CLIENT] Ejecutando Turnstile...');
      const token = await window.turnstile.execute(turnstileRef.current, {
        action: 'newsletter_subscribe',
      });
      console.log('>>> [CLIENT] Token obtenido:', token ? 'SÍ (longitud: ' + token.length + ')' : 'NO (vacío)');

      if (!token) {
        setError("Error de seguridad: No se pudo generar el token. Revisa tu conexión o bloqueadores.");
        setLoading(false);
        return;
      }

      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, turnstileToken: token })
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setEmail('');
      } else {
        console.error('>>> [CLIENT] Error en suscripción:', data);
        setError(data.error || tn('errorMessage'));
      }
    } catch (err) {
      console.error('>>> [CLIENT] Error crítico:', err);
      setError(tn('errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  const content = (
    <div className="w-full">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center text-center lg:text-left mb-16">

        {/* Left Column - Contact CTA */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] leading-none">
            {t('badge')}
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-4xl font-display font-bold uppercase text-white leading-[0.95] tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('title') }}
          />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mt-4 justify-center lg:justify-start">
            <Link href="/contacto" className="px-10 py-5 bg-secondary text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-brand-light hover:text-white transition-all hover:scale-105 active:scale-95 hover:-translate-y-1 text-center">
              {t('ctaQuote')}
            </Link>
            <a href="https://wa.me/5218442751165" target="_blank" rel="noopener noreferrer" className="px-10 py-5 glass text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 transition-all hover:-translate-y-1 text-center">
              {t('ctaWhatsapp')}
            </a>
          </div>
        </div>

        {/* Right Column - Newsletter */}
        <div className="lg:col-span-2 bg-white/2 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col gap-4 mb-8">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">{tn('badge')}</span>
            <h3 className="text-2xl font-display font-bold text-white uppercase leading-none">{tn('titlePart2')}</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {tn('description')}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            {/* Contenedor con Renderizado Automático */}
            <div 
              ref={turnstileRef} 
              className="cf-turnstile"
              data-sitekey={TURNSTILE_SITE_KEY}
              data-size="invisible"
            ></div>
            
            <div className="relative">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tn('inputPlaceholder')}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-all"
              />
            </div>
            <button
              disabled={loading}
              className={`w-full py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${loading ? 'bg-white/10 text-white/30 cursor-not-allowed' : 'bg-secondary text-black hover:bg-brand-light hover:text-white hover:scale-[1.02] active:scale-95 hover:-translate-y-1'
                }`}
            >
              {loading ? tn('buttonLoading') : tn('buttonLabel')} <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            {success && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-[10px] font-bold uppercase flex items-center gap-2 mt-2">
                <CheckCircle2 className="w-3 h-3" /> {tn('successMessage')}
              </motion.p>
            )}
            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-[10px] font-bold uppercase flex items-center gap-2 mt-2">
                <AlertCircle className="w-3 h-3" /> {error}
              </motion.p>
            )}

            <p className="text-[8px] text-white/40 uppercase tracking-widest mt-2 leading-relaxed">
              Protected by Cloudflare Turnstile. <a href="https://www.cloudflare.com/privacypolicy/" className="hover:text-white underline">Privacy</a> & <a href="https://www.cloudflare.com/website-terms/" className="hover:text-white underline">Terms</a>.
            </p>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-8" />

      {/* Footer Items */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-white/50 font-medium justify-center lg:justify-start">
        <div className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition-colors cursor-default">
          <MapPin className="w-4 h-4 text-secondary" /> {t('location')}
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition-colors cursor-default">
          <Mail className="w-4 h-4 text-secondary" /> {t('email')}
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition-colors cursor-default">
          <Globe className="w-4 h-4 text-secondary" /> {t('global')}
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 flex justify-center bg-transparent">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Container */}
        <motion.div
          style={{ opacity, y }}
          className="w-full"
        >
          {noContainer ? (
            <div className="flex flex-col items-center">
              {content}
            </div>
          ) : (
            <BorderGlow
              className="glass p-8 md:p-12 lg:p-20 flex flex-col items-center"
              borderRadius={40}
              backgroundColor="rgba(25,48,116,0.4)"
              glowColor="rgba(255,255,255,0.05)"
            >
              {content}
            </BorderGlow>
          )}
        </motion.div>
      </div>
    </section>
  );
}
