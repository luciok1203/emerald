import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = (path: string): string =>
    location.pathname === path ? 'active' : '';

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link
          to="/"
          className="logo"
          onClick={() => {
            closeMenu();
            scrollToTop();
          }}
        >
          <img src={logo} className="logo-icon" alt="Emerald Logo" />
          (주) 에메랄드
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="desktop-menu">
          <Link to="/" className={getLinkClass('/')}>
            EMERALD
          </Link>
          <Link to="/interview" className={getLinkClass('/interview')}>
            회장과의 인터뷰
          </Link>
          <Link to="/members" className={getLinkClass('/members')}>
            임원 소개
          </Link>
          <Link to="/oz" className={getLinkClass('/oz')}>
            오즈
          </Link>
          <Link to="/history" className={getLinkClass('/history')}>
            역사
          </Link>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className="hamburger-box">
            <span className="hamburger-line top"></span>
            <span className="hamburger-line mid"></span>
            <span className="hamburger-line bot"></span>
          </div>
        </button>
      </div>

      {/* 모바일 내비게이션 오버레이 (배경) */}
      <div
        className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* 모바일 사이드바 메뉴 */}
      <nav className={`mobile-nav-sidebar ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu} className={getLinkClass('/')}>
          EMERALD
        </Link>
        <Link
          to="/interview"
          onClick={closeMenu}
          className={getLinkClass('/interview')}
        >
          회장과의 인터뷰
        </Link>
        <Link
          to="/members"
          onClick={closeMenu}
          className={getLinkClass('/members')}
        >
          임원 소개
        </Link>
        <Link to="/oz" onClick={closeMenu} className={getLinkClass('/oz')}>
          오즈
        </Link>
        <Link
          to="/history"
          onClick={closeMenu}
          className={getLinkClass('/history')}
        >
          역사
        </Link>
      </nav>
    </header>
  );
};

export default Header;
