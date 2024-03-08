import { Sidebar } from "./_components/sidebar";



const DashboardLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
      <div className="h-full ">
        <div className="hidden md:fled h-full w-56 flex-col fixed inset-y-0z-50" >
            <Sidebar />
        </div>
        {children}
      </div>
    );
  };
  
  export default DashboardLayout;
  