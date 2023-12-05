import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Title from '@/components/home/title';
import FocusedProd from '@/components/home/FocusedProd';
import ProdList from '@/components/home/prodList';
import MainBanner from '@/components/home/mainBanner';

export default function Home() {
  const keywords = [
    { name: '#유지력갑', isActive: true },
    { name: '#따뜻포근', isActive: false },
    { name: '#워터리스', isActive: false },
    { name: '#겨울필수', isActive: false },
  ];

  return (
    <>
      <Head>
        <title>Luminus</title>
        <meta name="description" content="Luminus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.home}>
          <MainBanner />

          <div className={styles.focusedProd}>
            <Title keyword={'#MD 추천 상품'} title={'LM FOCUS'} />
            <div className={styles.shopList}>
              <div className={styles.keywordWrap}>
                {keywords.map((keyword, idx) => (
                  <p
                    key={idx}
                    className={
                      keyword.isActive ? styles.isActive : styles.keyword
                    }
                  >
                    {keyword.name}
                  </p>
                ))}
              </div>
              <FocusedProd />
            </div>
          </div>

          <div style={{ paddingTop: '180px' }}>
            <Title keyword={'#높은 재구매율'} title={'BEST PRODUCTS'} />
            <ProdList />
          </div>
        </div>
      </main>
    </>
  );
}
