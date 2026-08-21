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
    { id: 'youtube-api', title: '5. YouTube API Services' },
    { id: 'data-retention', title: '6. Data Retention' },
    { id: 'your-rights', title: '7. Your Rights' },
    { id: 'changes', title: '8. Changes to This Policy' },
    { id: 'contact', title: '9. Contact Information' },
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
                  <span className="text-brand font-bold text-xs">August 21, 2026</span>
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
                  Last updated: August 21, 2026
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
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Registered Office</div>
                        <div className="text-brand font-bold text-xs">Calle Gallo 118, Col. Las Maravillas, Saltillo, Coahuila, C.P. 25019, Mexico</div>
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
                      Access tokens for the social media and messaging platforms our clients authorize us to manage: Facebook Pages, Instagram Business accounts, LinkedIn profiles and company pages, TikTok accounts, YouTube channels, and the WhatsApp Business API (encrypted at rest).
                      <br /><br />
                      These tokens grant us only the permissions required to deliver the contracted service: to list the pages, accounts and channels a client administers, to publish and schedule content on them, and to retrieve the resulting activity metrics. We do not use them to read private messages on social networks, to manage advertising, or to access data belonging to any account other than the ones the client explicitly connects.
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
                  
                  {/* Category 5 */}
                  <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 relative overflow-hidden group hover:border-brand/10 transition-colors col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                      <h3 className="text-md font-bold text-brand m-0">End-Customer Data (Processed on Behalf of Clients)</h3>
                    </div>
                    <p className="text-brand/70 text-sm leading-relaxed m-0 pl-11">
                      When a client uses our WhatsApp support service, we receive and store the phone number, WhatsApp profile name, and message content of the people who contact that client. We process this data solely as a service provider, acting on the client's instructions and for the sole purpose of delivering the support service. The client remains the data controller for this information. We do not use it for advertising, we do not sell it, and we never share it between clients.
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
                    'Draft replies to WhatsApp messages through an automated assistant, when the client has enabled it for their own conversations. The assistant identifies itself as automated in its first message of every conversation, and a human agent can take over at any point.',
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

                <div className="mt-8 prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <h3 className="text-md font-bold text-brand mb-2">Limited Use of Platform Data</h3>
                  <p className="text-brand/80">
                    Data obtained through these platform APIs is used only to deliver the contracted service to the client who authorized the connection. We do not sell it, we do not use it for advertising or audience building, we do not use it to train machine learning models, and we never combine or share the data of one client with that of another. Each client's connected accounts are isolated from every other client's.
                  </p>
                </div>

                <div className="mt-8 prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <h3 className="text-md font-bold text-brand mb-2">Service Providers</h3>
                  <p className="text-brand/80">
                    In addition to the platforms above, we rely on the following providers to operate the service. They process data on our instructions and only for the purposes described here:
                  </p>
                  <div className="mt-4 pl-4 border-l-2 border-brand/10 space-y-4">
                    <div>
                      <p className="text-brand font-bold m-0 text-sm">Anthropic PBC — United States</p>
                      <p className="text-brand/80 m-0 text-sm mt-1">
                        Provides the language model that drafts replies in our WhatsApp inbox. When a client has enabled the automated assistant, the recent messages of that conversation are sent to Anthropic's API solely to generate the suggested reply. Anthropic does not use this data to train its models, and the data is not retained for any other purpose.
                      </p>
                    </div>
                    <div>
                      <p className="text-brand font-bold m-0 text-sm">Hostinger International Ltd. — Cyprus, with servers in the United States</p>
                      <p className="text-brand/80 m-0 text-sm mt-1">
                        Provides the servers and database where our application, including conversation records and encrypted access tokens, is hosted.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-brand/80">
                    We do not authorize any provider to use this data for its own purposes, and we do not share it with anyone else.
                  </p>
                </div>

                <div className="mt-8 prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <h3 className="text-md font-bold text-brand mb-2">International Data Transfers</h3>
                  <p className="text-brand/80">
                    LunAvalos Digital House, S.A.S. is established in Mexico, and the providers listed above process data outside Mexican territory, principally in the United States. By contracting our services, or by contacting one of our clients through a channel we manage on their behalf, you acknowledge this transfer, which takes place solely to deliver the service described in this policy and under the confidentiality obligations set out in our agreements with each provider.
                  </p>
                </div>
              </motion.div>

              {/* 5. YouTube API Services */}
              <motion.div
                id="youtube-api"
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
                    5. YouTube API Services
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Our YouTube publishing feature uses the YouTube API Services. By connecting a YouTube channel to our platform, you agree to be bound by the YouTube Terms of Service, available at <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-brand font-bold underline">https://www.youtube.com/t/terms</a>.
                  </p>
                  <p className="mt-4 text-brand/80">
                    Google's Privacy Policy, which governs Google's handling of the data accessed through these APIs, is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand font-bold underline">https://policies.google.com/privacy</a>.
                  </p>
                  <p className="mt-4 text-brand/80">
                    We access your YouTube channel solely to upload and publish the video content you approve, and to retrieve public performance metrics for that content. We do not read, download, or store any other data from your channel, and we do not share YouTube data with third parties.
                  </p>
                  <p className="mt-4 text-brand/80">
                    You can revoke our application's access to your Google account at any time from <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-brand font-bold underline">https://myaccount.google.com/permissions</a>. Upon revocation, we delete the stored credentials for that channel; see our Data Deletion page for the full procedure.
                  </p>
                </div>
              </motion.div>

              {/* 6. Data Retention */}
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
                    6. Data Retention
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    We retain data for the duration of the contractual relationship and for up to <span className="text-brand font-bold">90 days</span> after termination, unless otherwise required by law.
                  </p>
                  <p className="mt-4 text-brand/80">
                    WhatsApp conversation records, including message content and end-customer contact details, are retained for the duration of the contractual relationship and deleted within 90 days of its termination. A client may request earlier deletion of their conversation records at any time.
                  </p>
                </div>
              </motion.div>

              {/* 7. Your Rights */}
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
                    7. Your Rights
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    You have the right to access, rectify, cancel, or object to the processing of your personal data.
                  </p>
                  <p className="mt-4 text-brand/80">
                    To exercise any of these rights, please email us at:{' '}
                    <a href="mailto:contacto@lunavalos.com" className="text-brand font-bold hover:text-secondary transition-colors underline">
                      contacto@lunavalos.com
                    </a>
                    .
                  </p>

                  <p className="mt-6 text-brand/80 font-bold">
                    End-Customers of Our Clients
                  </p>
                  <p className="mt-2 text-brand/80">
                    If you contacted one of our clients through WhatsApp and want to access or delete your data, please direct your request to that business, which is the controller of the conversation. If you contact us directly at <a href="mailto:contacto@lunavalos.com" className="text-brand font-bold hover:text-secondary transition-colors underline">contacto@lunavalos.com</a> we will forward your request to them and act on their instructions.
                  </p>

                  <p className="mt-6 text-brand/80 font-bold">
                    Revoking platform access directly
                  </p>
                  <p className="mt-2 text-brand/80">
                    You can revoke our application's access from each platform's own settings at any time:
                  </p>
                  <ul className="list-disc list-outside pl-6 text-sm text-brand/70 space-y-1.5 mt-2">
                    <li>Meta (Facebook, Instagram, WhatsApp) — <a href="https://facebook.com/settings?tab=applications" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold underline hover:text-secondary">facebook.com/settings?tab=applications</a></li>
                    <li>LinkedIn — <a href="https://linkedin.com/psettings/permitted-services" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold underline hover:text-secondary">linkedin.com/psettings/permitted-services</a></li>
                    <li>TikTok — Settings and privacy &gt; Security and permissions &gt; Manage app permissions</li>
                    <li>Google (YouTube) — <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold underline hover:text-secondary">myaccount.google.com/permissions</a></li>
                  </ul>

                  {/* Immediate data removal CTA */}
                  <div className="mt-8 p-6 md:p-8 bg-gradient-to-r from-orange-500/5 to-secondary/10 border border-secondary/15 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-brand font-bold text-md m-0 mb-1">
                        Do you want to revoke access immediately?
                      </h4>
                      <p className="text-brand/60 text-xs md:text-sm m-0 leading-relaxed">
                        You can manage the automated deletion of social media data and disconnect your accounts on our dedicated portal.
                      </p>
                    </div>
                    <a
                      href="https://lunavalos.com/eliminar-datos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-secondary hover:opacity-90 text-white rounded-xl text-sm font-bold shadow-sm transition-all whitespace-nowrap shrink-0 group"
                    >
                      <span>Delete Digital Data</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* 8. Changes to This Policy */}
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
                    8. Changes to This Policy
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    We may update this policy at any time. Changes will be posted on this page with an updated date.
                  </p>
                </div>
              </motion.div>

              {/* 9. Contact Information */}
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
                    9. Contact Information
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
                      <div className="text-sm space-y-3">
                        <div>
                          <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Registered Office (legal address)</div>
                          <div className="text-brand font-bold">LunAvalos Digital House, S.A.S.</div>
                          <div className="text-brand/70 text-xs mt-1">Calle Gallo 118, Col. Las Maravillas, Saltillo, Coahuila, C.P. 25019, Mexico</div>
                        </div>
                        <div className="pt-2 border-t border-brand/5">
                          <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Business Office</div>
                          <div className="text-brand/70 text-xs mt-1">Av. La Salle #437, Col. La Salle, Saltillo, Coahuila, C.P. 25286, Mexico</div>
                        </div>
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
