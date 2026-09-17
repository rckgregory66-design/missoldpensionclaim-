import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect cannibalistic near-duplicate pages to the established versions
      { source: '/pension-transfer-claim/', destination: '/pension-transfer-claims/', permanent: true },
      { source: '/final-salary-pension-transfer-claim/', destination: '/final-salary-pension-claims/', permanent: true },
      { source: '/self-invested-personal-pension-claim/', destination: '/mis-sold-sipp-claims/', permanent: true },
      // make-a-claim used in sitemap and content — send to contact
      { source: '/make-a-claim/', destination: '/contact/', permanent: false },
    ]
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
