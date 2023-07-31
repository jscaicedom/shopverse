"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { AppDispatch, useAppDispatch } from '@/store/store';
import { RootState } from '@/store/types';
import { fetchProductsAsync } from '@/store/reducers/productReducer';

const ProductsPage: NextPage = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products.products);
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
      {/* Display the fetched product data */}
    </div>
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}