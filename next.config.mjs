import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx', // or .tsx
})

export default withNextra({
  // 1. Force Next.js to output static HTML files
  output: 'export',
  
  // 2. Tell Next.js the site is in a subfolder (/apex-pathing-docs)
  basePath: '/apex-pathing-docs',

  // 3. Static sites don't support the default Next.js Image Optimization
  images: {
    unoptimized: true,
  },
})
