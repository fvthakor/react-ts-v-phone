import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStateModel } from '@/models';
import Sidebar from './sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { darkMode, successMessage, errorMessage } = useSelector((state: RootStateModel) => state.config);
  const { isLogin } = useSelector((state:RootStateModel) => state.auth)

  useEffect(() => {
    if(successMessage && successMessage !== ''){
        toast.success(successMessage,{
            theme: 'colored',
            autoClose: 2000,
        })
    }
}, [successMessage])

useEffect(() => {
  if(errorMessage && errorMessage !== ''){
      toast.error(errorMessage,{
          theme: 'colored',
          autoClose: 3000,
      })
  }
}, [errorMessage])

  return (
    <>
      <ToastContainer />
      <div className={darkMode ? 'dark' : 'light'}>
        <div className="antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
          <div className="flex flex-col sm:flex-row transition-all w-screen h-screen overflow-x-hidden overflow-y-hidden">
            { isLogin ? <Sidebar /> : <></> } 
            <div className="w-full">
                <div className="">
                  <main className="items-center justify-center h-full w-full">
                    {children}
                  </main>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Layout;
