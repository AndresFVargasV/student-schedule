import Navegation from "../components/Navegation";

const ErrorPage = () => {
  return (
    <>
      <Navegation />
      <div className="flex items-center justify-center h-screen">
        <main className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <h1 className="display-4">404</h1>
              <h2 className="lead">Page not found</h2>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ErrorPage;
