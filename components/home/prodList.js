import React from 'react';
import styles from '@/styles/components/ProdList.module.css';
import Image from 'next/image';

export default function ProdList(props) {
  const tempData = [
    {
      title: '상품1',
      orgPrice: '77,900',
      curPrice: '64,800',
      percent: '17',
      desc: `최고의 실란트, 젯실!${'\n'}뉴 포뮬러 출시!`,
    },
    {
      title: '상품2',
      orgPrice: '48,600',
      curPrice: '37,800',
      percent: '22',
      desc: `스마트젤 업그레이드 지속력 깡패`,
    },
    {
      title: '상품3',
      orgPrice: '27,200',
      curPrice: '22,800',
      percent: '16',
      desc: `묵묵히 일하는 하체에도 사랑을!${'\n'}SUV필수관리제`,
    },
    {
      title: '상품4',
      orgPrice: '26,000',
      curPrice: '21,800',
      percent: '16',
      desc: `복잡한 차 안 청소를 간편하게!${'\n'}실내용 퀵 디테일러`,
    },
    {
      title: '상품1',
      orgPrice: '77,900',
      curPrice: '64,800',
      percent: '17',
      desc: `최고의 실란트, 젯실!${'\n'}뉴 포뮬러 출시!`,
    },
    {
      title: '상품2',
      orgPrice: '48,600',
      curPrice: '37,800',
      percent: '22',
      desc: `스마트젤 업그레이드 지속력 깡패`,
    },
    {
      title: '상품3',
      orgPrice: '27,200',
      curPrice: '22,800',
      percent: '16',
      desc: `묵묵히 일하는 하체에도 사랑을!${'\n'}SUV필수관리제`,
    },
    {
      title: '상품4',
      orgPrice: '26,000',
      curPrice: '21,800',
      percent: '16',
      desc: `복잡한 차 안 청소를 간편하게!${'\n'}실내용 퀵 디테일러`,
    },
    {
      title: '상품1',
      orgPrice: '77,900',
      curPrice: '64,800',
      percent: '17',
      desc: `최고의 실란트, 젯실!${'\n'}뉴 포뮬러 출시!`,
    },
    {
      title: '상품2',
      orgPrice: '48,600',
      curPrice: '37,800',
      percent: '22',
      desc: `스마트젤 업그레이드 지속력 깡패`,
    },
    {
      title: '상품3',
      orgPrice: '27,200',
      curPrice: '22,800',
      percent: '16',
      desc: `묵묵히 일하는 하체에도 사랑을!${'\n'}SUV필수관리제`,
    },
    {
      title: '상품4',
      orgPrice: '26,000',
      curPrice: '21,800',
      percent: '16',
      desc: `복잡한 차 안 청소를 간편하게!${'\n'}실내용 퀵 디테일러`,
    },
  ];

  return (
    <div className={styles.prodWrap}>
      {tempData.map((item, idx) => (
        <div key={idx} className={styles.product}>
          <Image src={'/sample2.jpeg'} width={314} height={314} />
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
