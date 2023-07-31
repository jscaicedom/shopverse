"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { AppDispatch, useAppDispatch } from '@/store/store';
import { fetchProductsAsync } from '@/store/reducers/productReducer';
import { useProductSelector } from '@/store/selectors/useProductSelector';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';

const ProductsPage: NextPage = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { products: allProducts, loading, error } = useProductSelector();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [sortBy, setSortBy] = useState<'title' | 'price' | 'rating'>('title');


  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      fetchMoreProducts();
    }
  };

  const fetchMoreProducts = async () => {
    if (!isFetching) {
      setIsFetching(true);
      await dispatch(fetchProductsAsync());
      setIsFetching(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as 'title' | 'price' | 'rating');
  };

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div>
      <Head>
        <title>Product Listing Page</title>
        <meta
          name="description"
          content="Check out our latest products for sale."
        />
      </Head>
      <div>
        <header className="flex justify-between items-center fixed top-0 left-0 right-0 bg-gray-200 p-4">
          <h1>Shopverse</h1>
          <Cart />
        </header>
        <div className="pt-16 pb-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search products by title..."
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sortBy" className="mr-2">
              Sort by:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={handleSortByChange}
              className="border border-gray-300 rounded px-4 py-2"
            >
              <option value="title">Title</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        {loading ? <p>Loading...</p> : null}
        {error ? <p>Error: {error}</p> : null}
        <div className="grid grid-cols-3 gap-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}