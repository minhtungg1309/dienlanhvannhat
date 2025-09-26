const ClientFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-12 text-gray-600 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-gray-900">CƠ ĐIỆN LẠNH VĂN NHẬT</h3>
          <p className="mt-2 text-sm">KP. Phú Sơn, P. An Phú, Tam Kỳ</p>
          <p className="mt-2 text-sm">Mở cửa: 7:00 - 23:00 (Hàng ngày)</p>
          <p className="mt-2 text-sm">Hotline: <a href="tel:+84393249410" className="text-blue-600 hover:underline">0393 249 410</a></p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Đường dẫn nhanh</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600">Trang chủ</a></li>
            <li><a href="/gioi-thieu" className="hover:text-blue-600">Giới thiệu</a></li>
            <li><a href="/dich-vu" className="hover:text-blue-600">Dịch vụ</a></li>
            <li><a href="/du-an" className="hover:text-blue-600">Dự án</a></li>
            <li><a href="/lien-he" className="hover:text-blue-600">Liên hệ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Dịch vụ chính</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Điều Hòa</li>
            <li>Tủ Lạnh</li>
            <li>Máy Giặt</li>
            <li>Máy Lọc Nước</li>
            <li>Bình Nước Nóng</li>
            <li>Mua bán thiết bị</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Mạng xã hội</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="https://facebook.com/dienlanhvannhat" target="_blank" rel="noreferrer" className="hover:text-blue-600">📘 Facebook Fanpage</a></li>
            <li><a href="https://zalo.me/0393249410" target="_blank" rel="noreferrer" className="hover:text-blue-600">💬 Zalo Official</a></li>
            <li><a href="https://tiktok.com/@dienlanhvannhat" target="_blank" rel="noreferrer" className="hover:text-blue-600">🎵 TikTok</a></li>
            <li><a href="https://youtube.com/@dienlanhvannhat" target="_blank" rel="noreferrer" className="hover:text-blue-600">📺 YouTube</a></li>
            <li><a href="https://instagram.com/dienlanhvannhat" target="_blank" rel="noreferrer" className="hover:text-blue-600">📷 Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <p className="text-gray-600">
                <strong>Giấy phép kinh doanh:</strong> 0401234567<br/>
                <strong>MST:</strong> 0401234567<br/>
                <strong>Ngày cấp:</strong> 15/01/2019
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">
                <strong>Chính sách bảo hành:</strong> 12-24 tháng<br/>
                <strong>Chính sách đổi trả:</strong> 7 ngày<br/>
                <strong>Hỗ trợ:</strong> 24/7
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 text-center text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} CƠ ĐIỆN LẠNH VĂN NHẬT. Tất cả quyền được bảo lưu.<br/>
            Thiết kế và phát triển bởi <a href="#" className="text-blue-600 hover:underline">Vạn Nhất Digital</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;