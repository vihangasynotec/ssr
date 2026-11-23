import { RIDES_DATA } from '@/data/rides';
import { EVENTS_DATA } from '@/data/events';

export default function sitemap() {
  const baseUrl = 'https://southernsuperriders.lk';

  const staticRoutes = [
    '',
    '/about',
    '/rides',
    '/events',
    '/gallery',
    '/community',
    '/media',
    '/join',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const rideRoutes = RIDES_DATA.map((ride) => ({
    url: `${baseUrl}/rides/${ride.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const eventRoutes = EVENTS_DATA.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...rideRoutes, ...eventRoutes];
}
