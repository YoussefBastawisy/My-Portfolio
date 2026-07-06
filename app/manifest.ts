import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: 'Youssef Bastawisy',
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#4f46e5',
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
