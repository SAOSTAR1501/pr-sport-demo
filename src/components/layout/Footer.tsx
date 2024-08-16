// src/components/layout/Footer.tsx
"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Về chúng tôi</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Chính sách</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-primary transition-colors"
                >
                  Chính sách đổi trả
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/ordering"
                  className="hover:text-primary transition-colors"
                >
                  Hướng dẫn đặt hàng
                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className="hover:text-primary transition-colors"
                >
                  Phương thức thanh toán
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Kết nối với chúng tôi
            </h3>
            <div className="flex space-x-5 mb-4">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.8 5.6h-1.804c-.692 0-1.156.463-1.156 1.155V10h2.94l-.393 2.945h-2.547v7.055H10.8v-7.055H8.256V10h2.544V8.638c0-2.52 1.514-3.938 3.8-3.938h2.2V7.6z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.7 6.3h-1.513c-.507 0-.887.385-.887.962V10h2.4l-.3 2.4h-2.1v6.3h-2.4v-6.3H10.5V10h2.4V8.962c0-2.082 1.276-3.262 3.106-3.262h1.694v2.6z" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Đăng ký nhận tin</h4>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary mb-2 sm:mb-0 sm:rounded-r-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-lg sm:rounded-l-none hover:bg-primary-dark transition-colors"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; 2024 PR SPORT. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
