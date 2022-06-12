import React from 'react';
import Link from 'next/link';

const url = 'https://camdenactive.camden.gov.uk/sports/kilburngrange/';

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 px-2 py-2 bg-white border-b">
    <div className="flex items-center justify-center space-x-1">
      <Link href={url}>
        <div className="font-semibold text-center text-m ">
          Kilburn Tennis Court Availability
        </div>
      </Link>
    </div>
  </header>
);

export default Header;
