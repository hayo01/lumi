import React from 'react';
import styles from '@/styles/components/Navbar.module.css';
import Image from 'next/image';
import { Person, Search, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';

export default function Navbar(props) {
  const menuList = [
    { title: '자동차 내부', url: '/' },
    { title: '자동차 외부', url: '/' },
    { title: '세차도구', url: '/' },
    { title: '독점 제품', url: '/' },
    { title: '베스트 & 세트', url: '/' },
  ];

  return (
    <div className={styles.hd}>
      <div className={styles.hdWrap}>
        <div className={styles.hdLogo}>
          <Image src={'/temp_logo.png'} width={90} height={90} />
        </div>
        <div className={styles.hdNavWrap}>
          <div className={styles.hdTopNav}>
            <Search className={styles.TopNavIcon} />
            <ShoppingCart className={styles.TopNavIcon} />
            <Person className={styles.TopNavIcon} />
          </div>
          <div className={styles.hdNav}>
            {menuList.map((menu, idx) => (
              <Link href={menu.url} className={styles.hdMenu} key={idx}>
                {menu.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
