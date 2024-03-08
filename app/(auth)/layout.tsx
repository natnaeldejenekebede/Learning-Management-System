


const AuthLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
      <div className="h-full flex items-center justify-center">
        {children}
      </div>
    );
  };
  
  export default AuthLayout;
  