import { useState, useEffect } from "react";
import { Carousel as FCarousel } from "flowbite-react";

function Header() {
  return (
    <div className="flex items-center justify-between md:justify-start">
      <div className="w-[75%]">
        <a href="#" className="font-bold text-gray-700 text-2xl">
          Shop.com
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="search"
            className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
            placeholder="Search"
          />
          <svg
            className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <a
          href="#"
          className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
        >
          <svg
            className="h-6 w-6 leading-none text-gray-300 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="pl-1 text-gray-500 text-md">0</span>
        </a>
      </div>
    </div>
  );
}

function Breadcrumbs({ crumbs }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 text-gray-400 text-sm">
        {crumbs.map((crumb, index) => {
          return (
            <div className="inline-flex gap-2" key={index}>
              <a href="#" className="hover:underline hover:text-gray-600">
                {crumb}
              </a>
              {index !== crumbs.length - 1 && (
                <span>
                  <svg
                    className="h-5 w-5 leading-none text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Carousel({ images }) {
  return (
    <div className="md:flex-1 px-4">
      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <FCarousel>
          {images.map((image, index) => (
            <div
              className="duration-700 ease-in-out"
              data-carousel-item
              key={index}
            >
              <img
                src={image}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          ))}
        </FCarousel>
      </div>
    </div>
  );
}

function Details({ title, reviews, ratings, price, description }) {
  const ratingsArr = new Array(ratings).fill(1);

  return (
    <div className="md:flex-1 px-4">
      <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-xl md:text-2xl">
        {title}
      </h2>

      <div className="flex items-center space-x-4 my-4">
        <div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-gray-400 text-sm">Reviews</p>

            <div className="flex items-center space-x-1">
              {ratingsArr.map((_, index) => (
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                  key={index}
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <div>
              <p className="text-blue-700 text-sm">({reviews})</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 my-4">
        <div>
          <div className="rounded-lg bg-gray-100 flex py-2 px-3">
            <span className="text-indigo-400 mr-1 mt-1">yen</span>
            <span className="font-bold text-indigo-600 text-3xl">{price}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-500 py-8">{description}</p>

      <div className="flex py-4 space-x-4">
        <button
          type="button"
          className="h-12 px-6 py-2 font-semibold rounded-md bg-red-600 hover:bg-red-700 text-white"
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="h-12 px-6 py-2 font-semibold rounded-md bg-red-600 hover:bg-red-700 text-white"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState(0);
  const [ratings, setRatings] = useState(0);
  const [images, setImages] = useState([]);
  const [crumbs, setCrumbs] = useState([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const item = urlParams.get("item");
    setCrumbs(["Home", "Electronics", "Headphones"]);
    setTitle(
      "Party dress for weddings, one-piece, long length, plus size, maternity, planned, formal, lace, frill, dress, maxi, elegant, easy, relaxed, frill, ladies, party, autumn/winter, adult, cute, with sleeves, cy88202"
    );
    setDescription(
      "Wedding dress maxi dress party dress formal plus size invitation date relaxed girls' gathering dinner. [4573 yen with coupon] Party dress wedding dress long size maternity [planning] formal lace frill dress maxi clean and comfortable relaxed frill ladies' party autumn/winter adult cute with sleeves cy88202"
    );
    setReviews(223);
    setRatings(4);
    setImages([
      "https://tshop.r10s.jp/dressstar/cabinet/6/18/cy88202_1_navy_10.jpg?downsize=300:*",
    ]);
    setPrice("2550");
    setIsLoading(false);
  }, []);

  return (
    <div className="antialiased">
      <div className="bg-white shadow-sm sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
          <Header />
        </div>
      </div>

      {isLoading && (
        <div className="h-72 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <h1 className="text-lg text-gray-500">
              Loading item page, please wait...
            </h1>
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="py-6">
          <Breadcrumbs crumbs={crumbs} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="flex flex-col md:flex-row -mx-4">
              <Carousel images={images} />
              <Details
                title={title}
                description={description}
                price={price}
                ratings={ratings}
                reviews={reviews}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
