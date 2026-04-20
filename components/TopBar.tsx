'use client';
import Link from 'next/link';
import { useState } from 'react';
import content from '@/data/content.json';
import products from '@/data/products.json';
import { useQuoteDrawer } from './QuoteDrawerContext';
import { FiMail } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { openQuote } = useQuoteDrawer();

  return (
    <div className="bg-[#05152f] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 py-2 md:py-3 pl-4 md:pl-0">

          {/* Email */}
          <div className="flex items-center gap-2 text-sm">
            <FiMail className="w-4 h-4 text-white" />
            <a
              href="mailto:info@skykorghealthcare.com"
              className="hover:text-orange-500 transition break-all"
            >
              info@skykorghealthcare.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="w-4 h-4 text-white" />
            <span>30 N Gould St, STE R, Sheridan, WY 82801, USA</span>
          </div>

        </div>
      </div>
    </div>
  );
}
