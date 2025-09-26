const DangKy: React.FC = () => {
  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Đăng ký tài khoản</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Họ và tên" className="w-full border rounded px-3 py-2" />
        <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input type="password" placeholder="Mật khẩu" className="w-full border rounded px-3 py-2" />
        <button type="submit" className="w-full bg-brand-500 text-white py-2 rounded">Đăng ký</button>
      </form>
    </div>
  );
};

export default DangKy;
