"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { AppDispatch, useAppDispatch } from '@/store/store';
import { fetchProductsAsync } from '@/store/reducers/productReducer';
import { useProductSelector } from '@/store/selectors/useProductSelector';
import ProductCard from '@/components/ProductCard';

const ProductsPage: NextPage = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { products, loading, error } = useProductSelector();
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
  return (
    <div>
      <Head>
        <title>Product Listing Page</title>
        <meta
          name="description"
          content="Check out our latest products for sale."
        />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!loading && !error && <button>Load More</button>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}