import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { id: "al", text: "AL", href: "#", hasDropdown: true },
    { id: "hybrid", text: "Hybrid Cloud", href: "#", hasDropdown: true },
    { id: "products", text: "Products", href: "#", hasDropdown: true },
    { id: "consulting", text: "Consulting", href: "#", hasDropdown: false },
    { id: "support", text: "Support", href: "#", hasDropdown: true },
    { id: "think", text: "Think", href: "#", hasDropdown: false },
  ];

  const dropdownContent = {
    al: [
      { text: "About AL", href: "#" },
      { text: "Company History", href: "#" },
      { text: "Leadership", href: "#" },
      { text: "Careers", href: "#" },
    ],
    hybrid: [
      { text: "Hybrid Cloud Solutions", href: "#" },
      { text: "Cloud Migration", href: "#" },
      { text: "Multi-Cloud Management", href: "#" },
      { text: "Private Cloud Options", href: "#" },
    ],
    products: [
      { text: "Software Products", href: "#" },
      { text: "Hardware Solutions", href: "#" },
      { text: "Cloud Services", href: "#" },
      { text: "Developer Tools", href: "#" },
    ],
    support: [
      { text: "Technical Support", href: "#" },
      { text: "Documentation", href: "#" },
      { text: "Community Forums", href: "#" },
      { text: "Training & Certification", href: "#" },
    ],
  };

  const handleDropdownClick = (itemId) => {
    if (navItems.find((item) => item.id === itemId)?.hasDropdown) {
      setActiveDropdown(activeDropdown === itemId ? null : itemId);
    }
  };

  const handleMobileDropdownClick = (itemId) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex-shrink-0 flex items-center ml-4 md:ml-0">
              <span className="text-xl font-bold text-blue-800">IBM</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-gray-300 mx-4"></div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  <a
                    href={item.href}
                    className="text-gray-700 px-3 py-2 text-sm font-medium flex items-center rounded-md hover:bg-gray-100 transition-colors duration-200"
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        handleDropdownClick(item.id);
                      }
                    }}
                  >
                    {item.text}
                    {item.hasDropdown && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="md:hidden flex items-center space-x-1">
              <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>
              <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex md:items-center space-x-3">
              <button className="text-gray-700 p-2 rounded-md hover:bg-gray-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-700 p-2 rounded-md hover:bg-gray-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>
              <button className="text-gray-700 p-2 rounded-md hover:bg-gray-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {activeDropdown && (
        <div ref={dropdownRef} className="hidden md:block absolute left-0 w-full bg-white shadow-lg z-10 border-t border-gray-200" style={{ height: "30vh" }}>
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {dropdownContent[activeDropdown]?.map((item, index) => (
                <a key={index} href={item.href} className="group p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <div className="font-medium text-gray-900">{item.text}</div>
                  <p className="mt-1 text-sm text-gray-500">
                    Learn more about our {item.text.toLowerCase()}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.id}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                      handleMobileDropdownClick(item.id);
                    }
                  }}
                >
                  {item.text}
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transform transition-transform ${activeDropdown === item.id ? "rotate-90" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </a>
                {item.hasDropdown && activeDropdown === item.id && (
                  <div className="pl-6 bg-gray-50 mt-1 rounded-md">
                    {dropdownContent[item.id]?.map((dropdownItem, index) => (
                      <a key={index} href={dropdownItem.href} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100">
                        {dropdownItem.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
