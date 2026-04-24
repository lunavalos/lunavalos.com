export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LunAvalos",
    "url": "https://lunavalos.com",
    "logo": "https://lunavalos.com/logo.png",
    "description": "Premium Digital Evolution & Software Factory. Experts in Next.js, Laravel and AI.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
