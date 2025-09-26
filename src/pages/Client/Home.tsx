import { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    "/images/carousel/carousel-06.jpg",
    "/images/carousel/carousel-07.jpg", 
    "/images/carousel/carousel-08.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  };

  const stats = [
    { number: "5+", label: "Năm kinh nghiệm", icon: "🔧" },
    { number: "1000+", label: "Khách hàng tin tưởng", icon: "👥" },
    { number: "30", label: "Phút có mặt", icon: "⚡" },
    { number: "24/7", label: "Hỗ trợ khách hàng", icon: "📞" }
  ];

  const services = [
    { 
      icon: "❄️", 
      title: "Điều Hòa", 
      desc: "Sửa chữa, lắp đặt, vệ sinh điều hòa không khí chuyên nghiệp",
      features: ["Sửa chữa tại nhà", "Lắp đặt mới", "Vệ sinh định kỳ", "Bảo hành 12 tháng"]
    },
    { 
      icon: "🧊", 
      title: "Tủ Lạnh", 
      desc: "Sửa chữa, mua bán tủ lạnh các loại với giá cả hợp lý",
      features: ["Sửa chữa tủ lạnh", "Mua bán tủ lạnh", "Thay thế linh kiện", "Bảo hành rõ ràng"]
    },
    { 
      icon: "🧺", 
      title: "Máy Giặt", 
      desc: "Sửa chữa, lắp đặt máy giặt với kỹ thuật chuyên nghiệp",
      features: ["Sửa chữa máy giặt", "Lắp đặt mới", "Vệ sinh máy giặt", "Bảo hành 12 tháng"]
    },
    { 
      icon: "💧", 
      title: "Máy Lọc Nước & Bình Nước Nóng", 
      desc: "Sửa chữa, lắp đặt máy lọc nước và bình nước nóng",
      features: ["Sửa chữa máy lọc nước", "Lắp đặt bình nước nóng", "Thay thế linh kiện", "Bảo hành 12 tháng"]
    }
  ];

  const products = [
    {
      category: "Điều Hòa",
      items: [
        { name: "Điều hòa Daikin 1.5HP", price: "8.500.000đ", features: ["Inverter", "Tiết kiệm điện", "Làm lạnh nhanh"] },
        { name: "Điều hòa Panasonic 2HP", price: "9.200.000đ", features: ["NanoeX", "Kháng khuẩn", "Vận hành êm"] },
        { name: "Điều hòa LG 1HP", price: "6.800.000đ", features: ["Thiết kế đẹp", "Bền bỉ", "Giá hợp lý"] }
      ]
    },
    {
      category: "Tủ Lạnh",
      items: [
        { name: "Tủ lạnh Samsung 300L", price: "12.500.000đ", features: ["Inverter", "Ngăn đông mềm", "Tiết kiệm điện"] },
        { name: "Tủ lạnh Panasonic 250L", price: "10.800.000đ", features: ["Ag Clean", "Kháng khuẩn", "Bảo quản tốt"] },
        { name: "Tủ lạnh LG 280L", price: "11.200.000đ", features: ["Smart Inverter", "Thiết kế sang", "Dung tích lớn"] }
      ]
    },
    {
      category: "Máy Giặt",
      items: [
        { name: "Máy giặt Samsung 8kg", price: "7.500.000đ", features: ["Inverter", "Tiết kiệm nước", "Giặt sạch"] },
        { name: "Máy giặt LG 7kg", price: "6.800.000đ", features: ["Smart Inverter", "Giặt nhanh", "Bền bỉ"] },
        { name: "Máy giặt Panasonic 9kg", price: "8.200.000đ", features: ["Ag Clean", "Kháng khuẩn", "Dung tích lớn"] }
      ]
    },
    {
      category: "Máy Lọc Nước",
      items: [
        { name: "Máy lọc nước Karofi", price: "3.500.000đ", features: ["RO 9 cấp", "Tích hợp nóng lạnh", "Tiết kiệm điện"] },
        { name: "Máy lọc nước Kangaroo", price: "2.800.000đ", features: ["RO 8 cấp", "Thiết kế đẹp", "Dễ sử dụng"] },
        { name: "Bình nước nóng Ariston", price: "4.200.000đ", features: ["Inox 304", "An toàn", "Bền bỉ"] }
      ]
    }
  ];

  const projects = [
    { 
      image: "/images/grid-image/image-01.png", 
      title: "Lắp đặt hệ thống điều hòa văn phòng", 
      desc: "Công trình 50 máy lạnh cho tòa nhà văn phòng 10 tầng",
      client: "Công ty ABC"
    },
    { 
      image: "/images/grid-image/image-02.png", 
      title: "Bảo dưỡng định kỳ khách sạn", 
      desc: "Hợp đồng bảo dưỡng 200 máy lạnh cho khách sạn 5 sao",
      client: "Khách sạn XYZ"
    },
    { 
      image: "/images/grid-image/image-03.png", 
      title: "Sửa chữa hệ thống điều hòa trung tâm", 
      desc: "Khắc phục sự cố hệ thống điều hòa trung tâm cho siêu thị",
      client: "Siêu thị DEF"
    },
    { 
      image: "/images/grid-image/image-04.png", 
      title: "Lắp đặt máy lạnh gia đình", 
      desc: "Lắp đặt 20 máy lạnh cho khu chung cư cao cấp",
      client: "Chung cư GHI"
    }
  ];

  const commitments = [
    { 
      title: "Bảo hành rõ ràng", 
      desc: "Bảo hành 12 tháng cho sửa chữa, 24 tháng cho lắp đặt mới",
      icon: "🛡️"
    },
    { 
      title: "Có mặt trong 30 phút", 
      desc: "Đội ngũ kỹ thuật viên có mặt nhanh chóng khi khách yêu cầu",
      icon: "⚡"
    },
    { 
      title: "Giá cả minh bạch", 
      desc: "Báo giá chi tiết trước khi thực hiện, không phát sinh chi phí",
      icon: "💰"
    },
    { 
      title: "Kỹ thuật viên chuyên nghiệp", 
      desc: "Đội ngũ được đào tạo bài bản, có chứng chỉ nghề",
      icon: "👨‍🔧"
    }
  ];

  const testimonials = [
    {
      name: "Anh Nguyễn Văn Nam",
      location: "Hải Châu, Đà Nẵng",
      feedback: "Máy lạnh được sửa rất nhanh, thợ thân thiện và chuyên nghiệp. Rất hài lòng với dịch vụ!",
      rating: 5,
      service: "Sửa chữa máy lạnh"
    },
    {
      name: "Chị Trần Thị Hoa",
      location: "Sơn Trà, Đà Nẵng",
      feedback: "Giá hợp lý, có bảo hành rõ ràng. Tôi sẽ giới thiệu bạn bè sử dụng dịch vụ.",
      rating: 5,
      service: "Vệ sinh máy lạnh"
    },
    {
      name: "Anh Lê Văn Tuấn",
      location: "Thanh Khê, Đà Nẵng",
      feedback: "Đến nhanh, xử lý dứt điểm, tư vấn tận tâm. Cảm ơn đội ngũ kỹ thuật!",
      rating: 5,
      service: "Lắp đặt máy lạnh"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* 1. Banner lớn / Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16 sm:py-20 lg:py-32 rounded-2xl sm:rounded-3xl overflow-hidden mx-4 sm:mx-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 animate-pulse"></div>
        
        {/* Background Image Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              <img 
                src={image} 
                alt={`Dịch vụ điện lạnh ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 drop-shadow-2xl leading-tight px-2">
              CƠ ĐIỆN LẠNH VĂN NHẬT
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 lg:mb-10 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed drop-shadow-lg px-2">
              Chuyên nghiệp – Uy tín – Nhanh chóng
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-2">
              Với hơn 5 năm kinh nghiệm, chúng tôi chuyên sửa chữa, lắp đặt, bảo dưỡng máy lạnh và thiết bị điện lạnh tại Tam Kỳ. Phục vụ tận nơi chỉ trong 30 phút.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="tel:+84393249410" className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform">
              <span className="flex items-center gap-1 sm:gap-2">
                📞 <span className="hidden sm:inline">Liên hệ ngay</span>
                <span className="sm:hidden">Gọi ngay</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </a>
            <a href="#contact" className="group border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm">
              <span className="flex items-center gap-1 sm:gap-2">
                💰 <span className="hidden sm:inline">Yêu cầu báo giá</span>
                <span className="sm:hidden">Báo giá</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Thống kê nổi bật */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in-up p-2 sm:p-3"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-1 group-hover:text-green-600 transition-colors">{stat.number}</div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Giới thiệu công ty */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Về Công Ty
              <span className="block text-blue-600 text-lg sm:text-xl lg:text-2xl">CƠ ĐIỆN LẠNH VĂN NHẬT</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              CƠ ĐIỆN LẠNH VĂN NHẬT được thành lập với sứ mệnh mang đến dịch vụ điện lạnh 
              chuyên nghiệp và uy tín cho khách hàng tại Tam Kỳ và các tỉnh lân cận.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Với đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị hiện đại, 
              chúng tôi cam kết mang đến cho khách hàng những giải pháp điện lạnh tối ưu nhất.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl lg:rounded-3xl hover:scale-105 transition-transform duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Sứ mệnh</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Mang đến dịch vụ điện lạnh chuyên nghiệp</p>
              </div>
              <div className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl lg:rounded-3xl hover:scale-105 transition-transform duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Tầm nhìn</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Trở thành đơn vị điện lạnh hàng đầu tại Tam Kỳ</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-center hover:scale-105 transition-transform duration-500 animate-fade-in-right group mt-8 lg:mt-0">
            <div className="text-6xl sm:text-7xl lg:text-9xl mb-6 sm:mb-8 animate-pulse group-hover:animate-bounce transition-all duration-300">🏢</div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Đội ngũ chuyên nghiệp</h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">Kỹ thuật viên được đào tạo bài bản, có chứng chỉ nghề</p>
            <button className="bg-blue-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform shadow-xl group-hover:shadow-2xl text-sm sm:text-base lg:text-lg">
              <span className="flex items-center gap-2 sm:gap-3">
                👥 Xem đội ngũ
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Dịch vụ */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 rounded-2xl lg:rounded-3xl mx-4 sm:mx-0">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 sm:mb-16 lg:mb-20">Dịch vụ chính</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl text-center hover:scale-105 transition-all duration-500 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl text-white shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">{service.title}</h3>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">{service.desc}</p>
                <ul className="text-gray-600 space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sản phẩm bán và lắp đặt */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12 lg:mb-16">Sản phẩm bán và lắp đặt</h2>
        <div className="space-y-12 sm:space-y-16">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <h3 className="text-xl sm:text-2xl font-bold text-center text-blue-600 mb-6 sm:mb-8">{category.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.items.map((product, productIndex) => (
                  <div 
                    key={productIndex}
                    className="bg-white p-4 sm:p-6 rounded-xl lg:rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {category.category === "Điều Hòa" && "❄️"}
                        {category.category === "Tủ Lạnh" && "🧊"}
                        {category.category === "Máy Giặt" && "🧺"}
                        {category.category === "Máy Lọc Nước" && "💧"}
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">{product.name}</h4>
                      <div className="text-lg sm:text-xl font-bold text-blue-600 mb-3">{product.price}</div>
                    </div>
                    <ul className="space-y-1 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm font-medium">
                        Mua ngay
                      </button>
                      <button className="flex-1 border border-blue-500 text-blue-500 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-sm font-medium">
                        Tư vấn
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
            <span className="flex items-center gap-2 sm:gap-3">
              🛒 Xem tất cả sản phẩm
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </section>

      {/* 5. Dự án / Công trình thực hiện */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 sm:mb-16 lg:mb-20">Dự án & Công trình thực hiện</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-medium text-sm sm:text-base">Khách hàng: {project.client}</span>
                <span className="text-green-600 text-sm sm:text-base">✅ Hoàn thành</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Lý do chọn chúng tôi / Cam kết */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 sm:py-20 lg:py-24 rounded-2xl lg:rounded-3xl mx-4 sm:mx-0">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 sm:mb-16 lg:mb-20">Lý do chọn chúng tôi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {commitments.map((commitment, index) => (
              <div 
                key={index}
                className="text-center p-6 sm:p-8 rounded-lg border hover:shadow-lg transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">{commitment.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{commitment.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{commitment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Khách hàng / Phản hồi */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 sm:mb-16 lg:mb-20">Khách hàng nói gì?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl hover:scale-105 transition-transform duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 italic text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">"{testimonial.feedback}"</p>
              <div className="border-t pt-4 sm:pt-6">
                <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mb-1 sm:mb-2">{testimonial.location}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 sm:px-3 py-1 rounded-full">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Liên hệ / Đặt lịch */}
      <section id="contact" className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background decoration - ẩn trên mobile */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-6xl">❄️</div>
            <div className="absolute top-20 right-20 text-5xl">🔧</div>
            <div className="absolute bottom-20 left-20 text-5xl">⚡</div>
            <div className="absolute bottom-10 right-10 text-6xl">🛡️</div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">Liên hệ ngay!</h2>
            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-90 text-center">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí</p>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Thông tin liên hệ */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Thông tin liên hệ</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3 sm:mr-4">📞</span>
                    <div>
                      <div className="font-semibold text-white">Hotline</div>
                      <a href="tel:+84393249410" className="text-white/90 hover:text-white hover:underline">+84 393 249 410</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3 sm:mr-4">📧</span>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <a href="mailto:dienlanhvannhat@gmail.com" className="text-white/90 hover:text-white hover:underline">dienlanhvannhat@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3 sm:mr-4">📍</span>
                    <div>
                      <div className="font-semibold text-white">Địa chỉ</div>
                      <div className="text-white/90">KP. Phú Sơn, P. An Phú, Tam Kỳ</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3 sm:mr-4">💬</span>
                    <div>
                      <div className="font-semibold text-white">Zalo</div>
                      <a href="https://zalo.me/0393249410" target="_blank" rel="noreferrer" className="text-white/90 hover:text-white hover:underline">0393 249 410</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form liên hệ */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Form liên hệ nhanh</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 text-sm sm:text-base"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 text-sm sm:text-base"
                    required
                  />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 text-sm sm:text-base"
                    required
                  >
                    <option value="">Chọn dịch vụ cần hỗ trợ</option>
                    <option value="dieu-hoa">Điều Hòa</option>
                    <option value="tu-lanh">Tủ Lạnh</option>
                    <option value="may-giat">Máy Giặt</option>
                    <option value="may-loc-nuoc">Máy Lọc Nước</option>
                    <option value="binh-nuoc-nong">Bình Nước Nóng</option>
                    <option value="khac">Khác</option>
                  </select>
                  <textarea
                    placeholder="Mô tả chi tiết vấn đề"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 text-sm sm:text-base"
                  ></textarea>
                  <button 
                    type="submit"
                    className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform shadow-lg group w-full"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      📞 Gửi yêu cầu
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bản đồ Google Maps */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden">
          <iframe 
            title="Google Map" 
            className="w-full h-48 sm:h-64 lg:h-80" 
            src="https://www.google.com/maps?q=Da+Nang&output=embed" 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;