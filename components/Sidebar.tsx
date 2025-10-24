'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Compass, 
  Map, 
  Heart, 
  Sparkles, 
  Target,
  Wrench,
  BookOpen,
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Início',
    href: '/',
    icon: Home,
  },
  {
    title: 'Jornada do Herói',
    href: '/journey',
    icon: Map,
    children: [
      { title: 'Fase 1: O Chamado', href: '/journey/the-calling', icon: Compass },
      { title: 'Fase 2: O Despertar', href: '/journey/the-awakening', icon: Sparkles },
      { title: 'Fase 3: A Transformação', href: '/journey/the-transformation', icon: Heart },
      { title: 'Fase 4: A Maestria', href: '/journey/the-mastery', icon: Target },
      { title: 'Fase 5: O Retorno', href: '/journey/the-return', icon: Home },
    ],
  },
  {
    title: 'Kit de Ferramentas',
    href: '/toolkit',
    icon: Wrench,
    children: [
      { title: 'Reset do Momento Humano', href: '/toolkit/human-moment-reset', icon: Heart },
      { title: 'Protocolo de Resgate do Sono', href: '/toolkit/sleep-rescue', icon: Sparkles },
      { title: 'Protocolo Antiansiedade', href: '/toolkit/anti-anxiety', icon: Compass },
      { title: 'Estratégia de Resgate Social', href: '/toolkit/social-rescue', icon: Target },
    ],
  },
  {
    title: 'Apêndice',
    href: '/appendix',
    icon: BookOpen,
    children: [
      { title: 'Versão Econômica', href: '/appendix/budget-friendly', icon: BookOpen },
      { title: 'Para Vegetarianos', href: '/appendix/vegetarian', icon: BookOpen },
      { title: 'Para Mães Ocupadas', href: '/appendix/busy-moms', icon: BookOpen },
      { title: 'Para Viajantes', href: '/appendix/travelers', icon: BookOpen },
    ],
  },
];

function NavLink({ item, level = 0 }: { item: NavItem; level?: number }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.href || 
    (item.children?.some(child => pathname === child.href) ?? false);
  
  const Icon = item.icon;
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
            isActive
              ? 'bg-sage-100 text-sage-800'
              : 'text-gray-700 hover:bg-sage-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <Icon size={20} />
            <span className="font-medium">{item.title}</span>
          </div>
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        {isOpen && (
          <div className="mt-1 ml-4 space-y-1 animate-slide-down">
            {item.children?.map((child) => (
              <NavLink key={child.href} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-sage-600 text-white'
          : 'text-gray-700 hover:bg-sage-50'
      } ${level > 0 ? 'pl-8' : ''}`}
    >
      <Icon size={20} />
      <span className="font-medium">{item.title}</span>
    </Link>
  );
}

export function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-sage-600 text-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-80 bg-white border-r border-gray-200 
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo/Header */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="block">
              <h1 className="text-2xl font-serif font-bold text-sage-800">
                The Renewal<br />Playbook
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Seu guia de renovação pessoal
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Com compaixão e clareza
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
}
