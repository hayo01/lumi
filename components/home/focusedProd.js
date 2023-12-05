import React from 'react';
import styles from '@/styles/components/FocusedProd.module.css';
import Image from 'next/image';

export default function FocusedProd(props) {
  const tempData = [
    {
      title: '젯실(Jeteal)',
      orgPrice: '77,900',
      curPrice: '64,800',
      percent: '17',
      desc: `최고의 실란트, 젯실!${'\n'}뉴 포뮬러 출시!`,
    },
    {
      title: '타이어 트림젤',
      orgPrice: '48,600',
      curPrice: '37,800',
      percent: '22',
      desc: `스마트젤 업그레이드 지속력 깡패`,
    },
    {
      title: '베어본 하부관리제',
      orgPrice: '27,200',
      curPrice: '22,800',
      percent: '16',
      desc: `묵묵히 일하는 하체에도 사랑을!${'\n'}SUV필수관리제`,
    },
  ];

  return (
    <div className={styles.prodWrap}>
      {tempData.map((item, idx) => (
        <div key={idx}>
          <Image src={'/sample1.jpeg'} width={314} height={314} />
          <div className={styles.prodTitle}>{item.title}</div>
          <div className={styles.prodPrice}>
            <div className={styles.orgPrice}>{item.orgPrice}</div>
            <div className={styles.curPrice}>
              <span className={styles.percent}>{item.percent}%</span>
              {item.curPrice}
            </div>
          </div>
          <div className={styles.prodDesc}>{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
