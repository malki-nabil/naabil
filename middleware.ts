// Vercel Edge Middleware — runs at the edge on EVERY request, before static files are served.
// Docs: https://vercel.com/docs/edge-network/middleware
//
// It works with your static Astro build because it lives at the project ROOT
// (not src/), which is Vercel's framework-agnostic convention. Vercel compiles
// this file into an Edge Function and injects geo headers it already computed.

export const config = {
  // Which routes this middleware runs on. Negative lookahead excludes assets/SEO
  // files so we don't waste edge runs (or risk redirecting them).
  matcher: ['/((?!_astro|favicon|robots|sitemap|og-image|llms).*)'],
};


export default function middleware(request: Request): Response | undefined {
  // This header is only present on Vercel. Running elsewhere (astro dev, preview)
  // it's null, so we pass through and the site works normally.
  const location = request.headers.get('x-vercel-ip-country');
  if (!location) return undefined;

  // No redirect rule for this visitor's country -> serve the page as-is.

  // Loop guard: if the visitor is already on the target, don't redirect again.
  // Compare the full segment (not startsWith('/ar') alone, or '/article' would
  // falsely count as the target).

  // 307 = temporary redirect, preserves the method and tells crawlers this isn't permanent.
  if(location === "IL") {
      return Response.redirect(new URL("/fuck-off", request.url), 307);
  }
}
