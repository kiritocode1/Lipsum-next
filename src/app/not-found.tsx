import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center space-y-8 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-8xl font-bold tracking-tighter sm:text-9xl">404</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Oops - The page youre looking for doesnt exist.
        </p>
      </div>
      <Link
        className="inline-flex h-10 items-center justify-center rounded-lg bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href={"/"}
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
