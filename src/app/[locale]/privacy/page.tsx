'use client';

import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Mail, 
  User, 
  Share2, 
  CheckCircle2, 
  Info, 
  Calendar, 
  Key, 
  ExternalLink,
  ChevronRight,
  RefreshCw,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export default function EnglishPrivacyPage() {
  const sections = [
    { id: 'who-we-are', title: '1. Who We Are' },
    { id: 'data-we-collect', title: '2. Data We Collect' },
    { id: 'how-we-use', title: '3. How We Use Your Data' },
    { id: 'third-party', title: '4. Third-Party Platforms' },
    { id: 'data-retention', title: '5. Data Retention' },
    { id: 'your-rights', title: '6. Your Rights' },
    { id: 'changes', title: '7. Changes to This Policy' },
    { id: 'contact', title: '8. Contact Information' },
  ];

  return (
    <main className="relative min-h-screen bg-[#f8f9fc]">
      <Navbar />

      <PageHero
        title="Privacy Policy"
        subtitle="Information on how we collect, use, and protect your data."
        badge="Legal & Privacy"
        dividerColor="bg-[#f8f9fc]"
      />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Navigation - Sticky on Large Screens */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 bg-white border border-brand/5 p-6 rounded-2xl shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-brand/40 mb-4">
                  Contents
                </div>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm text-brand/70 hover:text-brand hover:bg-brand/5 transition-all font-medium"
                    >
                      <ChevronRight className="w-4 h-4 text-brand/30 group-hover:text-brand/70 group-hover:translate-x-0.5 transition-all shrink-0" />
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-brand/5 text-[11px] text-brand/50 font-medium leading-relaxed">
                  Last updated:<br />
                  <span className="text-brand font-bold text-xs">June 2026</span>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-9 flex flex-col gap-12">
              
              {/* Header Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-brand/5 via-brand/2 to-brand/5 p-8 md:p-10 rounded-3xl border border-brand/5 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
                <p className="m-0 text-brand font-bold uppercase tracking-widest text-xs md:text-sm">
                  Privacy Policy
                </p>
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand uppercase tracking-tight mt-2 mb-4">
                  LunAvalos Digital House, S.A.S.
                </h2>
                <div className="inline-block px-3 py-1 bg-white border border-brand/10 rounded-full text-xs text-brand/70 font-semibold shadow-sm">
                  Last updated: June 2026
                </div>
              </motion.div>

              {/* 1. Who We Are */}
              <motion.div
                id="who-we-are"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    1. Who We Are
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    <strong>LunAvalos Digital House</strong> is a digital marketing agency based in Saltillo, Coahuila, Mexico. We provide social media management services to businesses, handling content creation, scheduling, and publishing on behalf of our clients.
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <div className="flex-1 bg-brand/5 border border-brand/5 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-light/10 text-brand-light flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Headquarters</div>
                        <div className="text-brand font-bold">Saltillo, Coahuila, Mexico</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-brand/5 border border-brand/5 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Email Address</div>
                        <a href="mailto:contacto@lunavalos.com" className="text-brand font-bold hover:text-secondary transition-colors underline">
                          contacto@lunavalos.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. Data We Collect */}
              <motion.div
                id="data-we-collect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    2. Data We Collect
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-8">
                  <p className="text-brand/80">
                    In the course of providing our social media management services, we collect and process the following data from our clients:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category 1 */}
                  <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 relative overflow-hidden group hover:border-brand/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h3 className="text-md font-bold text-brand m-0">Contact Information</h3>
                    </div>
                    <p className="text-brand/70 text-sm leading-relaxed m-0 pl-11">
                      Name, email address, and phone number.
                    </p>
                  </div>

                  {/* Category 2 */}
                  <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 relative overflow-hidden group hover:border-brand/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                        <Key className="w-4 h-4" />
                      </div>
                      <h3 className="text-md font-bold text-brand m-0">Access Credentials</h3>
                    </div>
                    <p className="text-brand/70 text-sm leading-relaxed m-0 pl-11">
                      Social media and messaging access tokens for platforms including Facebook, Instagram, LinkedIn, TikTok, YouTube, and WhatsApp Business API (crypted at rest).
                    </p>
                  </div>

                  {/* Category 3 */}
                  <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 relative overflow-hidden group hover:border-brand/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-md font-bold text-brand m-0">Profiles & Pages</h3>
                    </div>
                    <p className="text-brand/70 text-sm leading-relaxed m-0 pl-11">
                      Social media profile, WhatsApp Business Account (WABA) IDs, phone number IDs, and page information associated with managed accounts.
                    </p>
                  </div>

                  {/* Category 4 */}
                  <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 relative overflow-hidden group hover:border-brand/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <h3 className="text-md font-bold text-brand m-0">Activity History</h3>
                    </div>
                    <p className="text-brand/70 text-sm leading-relaxed m-0 pl-11">
                      Content creation metadata, publishing history, and client message exchange history processed through authorized channels.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 3. How We Use Your Data */}
              <motion.div
                id="how-we-use"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    3. How We Use Your Data
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-8">
                  <p className="text-brand/80">
                    We use collected data exclusively to:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Publish and schedule content on social media platforms on behalf of our clients',
                    'Manage connected social media and WhatsApp messaging accounts as authorized',
                    'Fulfill message exchange and communication with end-users via WhatsApp Business API',
                    'Generate activity reports for our clients',
                    'Fulfill our contractual obligations'
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#f8f9fc] transition-colors border border-transparent hover:border-brand/5">
                      <div className="w-6 h-6 rounded-full bg-brand-soft text-brand-light flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-brand/70 text-sm leading-relaxed m-0">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 4. Third-Party Platforms */}
              <motion.div
                id="third-party"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    4. Third-Party Platforms
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-8">
                  <p className="text-brand/80">
                    To deliver our services, we interact with the following platforms through their official APIs:
                  </p>
                </div>

                {/* Platforms Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                  {[
                    { name: 'Meta Platforms, Inc.', detail: 'Facebook & Instagram' },
                    { name: 'WhatsApp (Meta Platforms, Inc.)', detail: 'WhatsApp Business API' },
                    { name: 'LinkedIn Corporation', detail: 'Professional Network' },
                    { name: 'TikTok Inc.', detail: 'Short Video Platform' },
                    { name: 'Google LLC', detail: 'YouTube Integration' }
                  ].map((platform, i) => (
                    <div key={i} className="bg-[#f8f9fc] border border-brand/5 p-4 rounded-xl text-center flex flex-col justify-center min-h-[100px] hover:border-brand/10 transition-colors">
                      <div className="text-brand font-bold text-xs mb-1">{platform.name}</div>
                      <div className="text-brand/40 text-[10px] uppercase font-bold tracking-wider">{platform.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-brand/5 border border-brand/5 rounded-2xl flex items-start gap-4">
                  <Info className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <p className="text-brand/70 text-sm leading-relaxed m-0">
                    We only access these platforms with the explicit authorization of our clients and solely for the purpose of content management.
                  </p>
                </div>
              </motion.div>

              {/* 5. Data Retention */}
              <motion.div
                id="data-retention"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    5. Data Retention
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    We retain data for the duration of the contractual relationship and for up to <span className="text-brand font-bold">90 days</span> after termination, unless otherwise required by law.
                  </p>
                </div>
              </motion.div>

              {/* 6. Your Rights */}
              <motion.div
                id="your-rights"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Key className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    6. Your Rights
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    You have the right to access, correct, or request deletion of your personal data at any time.
                  </p>
                  <p className="mt-4 text-brand/80">
                    To request data deletion, you can contact us at:{' '}
                    <a href="mailto:contacto@lunavalos.com" className="text-brand font-bold hover:text-secondary transition-colors underline">
                      contacto@lunavalos.com
                    </a>
                  </p>

                  {/* Immediate data removal CTA */}
                  <div className="mt-8 p-6 md:p-8 bg-gradient-to-r from-orange-500/5 to-secondary/10 border border-secondary/15 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-brand font-bold text-md m-0 mb-1">
                        Need immediate access revocation?
                      </h4>
                      <p className="text-brand/60 text-xs md:text-sm m-0 leading-relaxed">
                        You can manage automated data deletion and unlink digital accounts using our specialized tool.
                      </p>
                    </div>
                    <Link
                      href="/eliminar-datos"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-secondary hover:opacity-90 text-white rounded-xl text-sm font-bold shadow-sm transition-all whitespace-nowrap shrink-0 group"
                    >
                      <span>Delete Digital Data</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* 7. Changes to This Policy */}
              <motion.div
                id="changes"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    7. Changes to This Policy
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    We may update this policy at any time. Changes will be posted on this page with an updated date.
                  </p>
                </div>
              </motion.div>

              {/* 8. Contact Information */}
              <motion.div
                id="contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    8. Contact Information
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    For any questions regarding this Privacy Policy, please contact us:
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-light/10 text-brand-light flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Headquarters</div>
                        <div className="text-brand font-bold">LunAvalos Digital House, S.A.S.</div>
                        <div className="text-brand/70 text-xs mt-1">Calle Gallo 118, Col. Las Maravillas, Saltillo, Coahuila, C.P. 25019, Mexico</div>
                      </div>
                    </div>
                    
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Electronic Contact</div>
                        <div className="text-brand font-bold">Support & Inquiries</div>
                        <a href="mailto:contacto@lunavalos.com" className="text-secondary font-bold hover:underline block mt-1 text-xs">
                          contacto@lunavalos.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
