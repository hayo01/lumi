import { useRouter } from 'next/router';
import React from 'react';

export default function ProductDetails(props) {
  const router = useRouter();

  return <div>Product number: {router.query.slug}</div>;
}
