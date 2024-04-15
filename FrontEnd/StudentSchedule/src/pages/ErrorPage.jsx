import { Navbar } from "@/components/component/navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <main className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">404</h1>
              <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Page not found</h2>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ErrorPage;
