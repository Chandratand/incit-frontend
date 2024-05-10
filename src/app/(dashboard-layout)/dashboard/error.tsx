'use client';

const DashboarError = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-destructive">500</h1>
        <p className="text-lg mt-3">Internal Server Error</p>
        <p className="mt-2 text-muted-foreground">Oops! Something went wrong. Please try again later.</p>
      </div>
    </div>
  );
};

export default DashboarError;
