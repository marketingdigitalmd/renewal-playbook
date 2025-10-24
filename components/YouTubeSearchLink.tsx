'use client';

import { Youtube, ExternalLink } from 'lucide-react';

interface YouTubeSearchLinkProps {
  searchTerm: string;
  displayText?: string;
}

export function YouTubeSearchLink({ searchTerm, displayText }: YouTubeSearchLinkProps) {
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;
  
  return (
    <a
      href={searchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors group"
    >
      <Youtube className="w-5 h-5 text-red-600" />
      <span className="text-sm font-medium text-red-700">
        {displayText || `Buscar: "${searchTerm}"`}
      </span>
      <ExternalLink className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
