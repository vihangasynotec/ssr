import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString) {
  if (!dateString) return 'Date TBA';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  try {
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch {
    return dateString;
  }
}
