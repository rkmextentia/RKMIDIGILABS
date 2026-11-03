import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).filter(p => p.data.published !== false);
  const baseUrl = context.site?.toString().replace(/\/$/, '') || 'https://rkmidigilabs.com';

  const staticPages = [
    '',
    '/courses/',
    '/courses/iso-42001-lead-implementer-masterclass/',
    '/courses/eu-ai-act-technical-compliance-risk-assessment/',
    '/courses/nist-ai-rmf-generative-ai-governance/',
    '/specialised-training/',
    '/corporate-training/',
    '/case-studies/',
    '/certifications/',
    '/resources/',
    '/company-profile/',
    '/services/',
    '/frameworks/',
    '/about/',
    '/contact/',
    '/blog/',
  ];

  const postUrls = posts.map(p => `/blog/${p.slug}/`);
  const allUrls = [...staticPages, ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>${url === '' || url.startsWith('/courses') || url.startsWith('/specialised') || url.startsWith('/corporate') ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.startsWith('/courses') || url.startsWith('/certifications') ? '0.95' : url.startsWith('/specialised') || url.startsWith('/corporate') || url.startsWith('/case-studies') ? '0.9' : url.startsWith('/blog/') ? '0.85' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
