import { Link } from "react-router";
import { useState } from "react";

const ClientHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-lg px-4 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
         {/* Logo Section */}
         <Link to="/" className="flex items-center gap-3 group">
           <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
             <span className="text-white text-xl font-bold">❄️</span>
           </div>
           <div className="text-left">
             <h1 className="font-bold text-xl text-blue-600 group-hover:text-blue-700 transition-colors">CƠ ĐIỆN LẠNH VĂN NHẬT</h1>
             <p className="text-xs text-blue-400 group-hover:text-blue-500 transition-colors">CHUYÊN NGHIỆP</p>
           </div>
         </Link>
        
         {/* Desktop Navigation */}
         <nav className="hidden lg:flex items-center gap-8">
           {[
             { to: "/", label: "Trang chủ" },
             { to: "/gioi-thieu", label: "Giới thiệu" },
             { to: "/dich-vu", label: "Dịch vụ" },
             { to: "/du-an", label: "Dự án" },
             { to: "/lien-he", label: "Liên hệ" }
           ].map((item, index) => (
             <Link 
               key={item.to}
               to={item.to} 
               className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
               style={{ animationDelay: `${index * 100}ms` }}
             >
               {item.label}
               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
             </Link>
           ))}
         </nav>

         {/* Desktop CTA Button */}
         <div className="hidden lg:flex items-center gap-3">
           <Link 
             to="/lien-he" 
             className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
           >
             Liên hệ ngay
           </Link>
         </div>

         {/* Mobile Menu Button */}
         <button
           onClick={toggleMobileMenu}
           className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
           aria-label="Toggle mobile menu"
         >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}>
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-2xl transform transition-transform duration-300">
            <div className="p-6">
               {/* Mobile Menu Header */}
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                     <span className="text-white text-lg font-bold">❄️</span>
                   </div>
                   <div>
                     <h2 className="font-bold text-lg text-blue-600">CƠ ĐIỆN LẠNH VĂN NHẬT</h2>
                     <p className="text-xs text-blue-400">CHUYÊN NGHIỆP</p>
                   </div>
                 </div>
                 <button
                   onClick={toggleMobileMenu}
                   className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                 >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4 mb-8">
                {[
                  { to: "/", label: "Trang chủ", icon: "🏠" },
                  { to: "/gioi-thieu", label: "Giới thiệu", icon: "ℹ️" },
                  { to: "/dich-vu", label: "Dịch vụ", icon: "🔧" },
                  { to: "/du-an", label: "Dự án", icon: "🏗️" },
                  { to: "/lien-he", label: "Liên hệ", icon: "📞" }
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={toggleMobileMenu}
                    className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <Link
                to="/lien-he"
                onClick={toggleMobileMenu}
                className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 px-6 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Blue Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 mt-4"></div>
    </header>
  );
};

export default ClientHeader;