'use client';

import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import { Link } from '@/navigation';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, Linkedin, Send, User, Building2, Smartphone, CheckSquare, Square } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const ts = useTranslations('Services');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const service = params.get('service');
      if (service) {
        setSelectedServices([service]);
      }
    }
  }, []);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedServices
        })
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
        setSelectedServices([]);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { id: 'webApps', label: ts('items.webApps.title') },
    { id: 'websites', label: ts('items.websites.title') },
    { id: 'ecommerce', label: ts('items.ecommerce.title') },
    { id: 'ai', label: ts('items.ai.title') },
    { id: 'digitalization', label: ts('items.digitalization.title') },
    { id: 'other', label: 'Otro' },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        badge={t('badge')}
        dividerColor="bg-white"
      />

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white rounded-[20px] shadow-2xl overflow-hidden border border-brand/5">

            {/* LADO IZQUIERDO - INFORMACIÓN DE CONTACTO */}
            <div className="w-full md:w-5/12 bg-brand p-10 md:p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Elementos decorativos de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -ml-32 -mb-32" />

              <div className="relative z-10">
                <Image
                  src="/images/header-logo.svg"
                  alt="LunAvalos"
                  width={400}
                  height={120}
                  className="brightness-0 invert w-70 h-auto mb-12"
                  priority
                />

                <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">Información de Contacto</h3>
                <p className="text-white/60  mb-12 max-w-xs">
                  Envíanos tu mensaje y con gusto alguien de nuestro equipo te atenderá.
                  También puedes consultar nuestro <Link href="/aviso-de-privacidad" className="text-secondary font-bold underline cursor-pointer">aviso de privacidad</Link>.
                </p>

                <div className="space-y-8 mb-16">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Teléfono 1</span>
                      <a href="tel:8442932253" className="text-lg font-bold">(844) 293-2253</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Teléfono 2</span>
                      <a href="tel:8442751165" className="text-lg font-bold">(844) 275-1165</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Email</span>
                      <a href="mailto:contacto@lunavalos.com" className="text-lg font-bold">contacto@lunavalos.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all mt-1 duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Oficina (Previa Cita)</span>
                      <p className="text-base font-bold leading-snug">Av. La Salle #437 Col. La Salle,<br />Saltillo Coah. CP 25286</p>
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block mb-6">Síguenos en:</span>
                  <div className="flex gap-4">
                    {[Instagram, Facebook, Twitter, Youtube, Linkedin].map((Icon, idx) => (
                      <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DERECHO - FORMULARIO */}
            <div className="w-full md:w-7/12 p-10 md:p-8 lg:p-12 flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em]">Contáctanos</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand uppercase tracking-tighter">Comunícate <br /> con <span className="text-secondary">nosotros</span></h2>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Nombre */}
                <div className="flex flex-col gap-3 group">
                  <label className="flex items-center gap-2 text-brand font-bold text-[10px] uppercase tracking-widest leading-none">
                    <User className="w-3 h-3 text-secondary" /> Nombre completo:
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre aquí"
                    className="w-full bg-brand/5 border-b-2 border-brand/10 p-4 text-brand placeholder:text-brand/30 focus:outline-none focus:border-secondary transition-all "
                  />
                </div>

                {/* Empresa */}
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2 text-brand font-bold text-[10px] uppercase tracking-widest leading-none">
                    <Building2 className="w-3 h-3 text-secondary" /> Empresa:
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nombre de tu empresa"
                    className="w-full bg-brand/5 border-b-2 border-brand/10 p-4 text-brand placeholder:text-brand/30 focus:outline-none focus:border-secondary transition-all "
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2 text-brand font-bold text-[10px] uppercase tracking-widest leading-none">
                    <Mail className="w-3 h-3 text-secondary" /> Email:
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@ejemplo.com"
                    className="w-full bg-brand/5 border-b-2 border-brand/10 p-4 text-brand placeholder:text-brand/30 focus:outline-none focus:border-secondary transition-all "
                  />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2 text-brand font-bold text-[10px] uppercase tracking-widest leading-none">
                    <Smartphone className="w-3 h-3 text-secondary" /> Teléfono:
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10 dígitos"
                    className="w-full bg-brand/5 border-b-2 border-brand/10 p-4 text-brand placeholder:text-brand/30 focus:outline-none focus:border-secondary transition-all "
                  />
                </div>

                {/* Servicios - Checkboxes */}
                <div className="md:col-span-2 flex flex-col gap-6">
                  <label className="flex items-center gap-2 text-brand font-bold text-[10px] uppercase tracking-widest leading-none">
                    <CheckSquare className="w-3 h-3 text-secondary" /> ¿En qué tipo de servicio estás interesado?
                  </label>

                  <div className="flex flex-wrap gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`px-4 py-2 rounded-full border text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 transition-all ${selectedServices.includes(service.id)
                          ? 'bg-secondary border-secondary text-black'
                          : 'bg-white border-brand/10 text-brand/60 hover:border-secondary'
                          }`}
                      >
                        {selectedServices.includes(service.id) ? <CheckSquare className="w-3 h-3" /> : <Square className="w-3 h-3" />}
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensaje */}
                <div className="md:col-span-2 flex flex-col gap-3">
                  <label className="flex items-center gap-2 text-brand font-bold text-[10px] uppercase tracking-widest leading-none">
                    <Mail className="w-3 h-3 text-secondary" /> Mensaje:
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos un poco más sobre tu proyecto..."
                    className="w-full bg-brand/5 border-b-2 border-brand/10 p-4 text-brand placeholder:text-brand/30 focus:outline-none focus:border-secondary transition-all  resize-none"
                  />
                </div>

                {/* Botón Enviar */}
                <div className="md:col-span-2 pt-4">
                  <button
                    disabled={loading}
                    className={`w-full md:w-auto bg-brand text-white px-10 py-5 rounded-[10px] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand/20 group ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary hover:text-black'}`}
                  >
                    {loading ? 'Enviando...' : 'Enviar mensaje'} <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

                {/* Mensajes de feedback */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:col-span-2 p-4 bg-green-500/10 border border-green-500/20 text-green-600 rounded-lg text-sm font-bold text-center"
                  >
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:col-span-2 p-4 bg-red-500/10 border border-red-500/20 text-red-600 rounded-lg text-sm font-bold text-center"
                  >
                    Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos por teléfono.
                  </motion.div>
                )}
              </form>

              <p className="text-[10px] leading-relaxed text-gray-600  italic">
                Nota: No incluyas datos personales importantes. El envío de datos a través de éste formulario, y cualquiera incluído en el presente sitio web, no establece en ninguna forma un contrato con LunAvalos, y es solo para brindar servicios de asesoría. No se aplicarán cargos al momento de solicitar una consulta. Los datos enviados a través de el sitio web, serán guardados de manera confidencial y por ningún motivo serán revelados, compartidos o usados con otros fines ajenos a una evaluación para una asesoría.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
