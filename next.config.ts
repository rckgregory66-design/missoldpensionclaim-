import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  // Canonicals, sitemap, schema and every internal link use trailing slashes; match that at the server
  trailingSlash: true,
  async redirects() {
    return [
      // www → apex (www currently serves a duplicate 200)
      { source: '/', has: [{ type: 'host', value: 'www.missoldpensionclaim.co.uk' }], destination: 'https://missoldpensionclaim.co.uk/', permanent: true },
      { source: '/:path+', has: [{ type: 'host', value: 'www.missoldpensionclaim.co.uk' }], destination: 'https://missoldpensionclaim.co.uk/:path+/', permanent: true },
      // Redirect cannibalistic near-duplicate pages to the established versions
      { source: '/pension-transfer-claim/', destination: '/pension-transfer-claims/', permanent: true },
      { source: '/final-salary-pension-transfer-claim/', destination: '/final-salary-pension-claims/', permanent: true },
      { source: '/self-invested-personal-pension-claim/', destination: '/mis-sold-sipp-claims/', permanent: true },
    ]
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
