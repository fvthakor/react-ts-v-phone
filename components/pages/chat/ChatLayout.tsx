import { ReactNode, useEffect } from "react";
import ChatList from "./ChatList";
import { useRouter } from "next/router";

type ChatLayoutProps = {
  children: ReactNode;
};

function ChatLayout({ children }: ChatLayoutProps) {
  const router = useRouter()
  
  const {id} = router.query
  useEffect(()=>{
    console.log(router);
    console.log(id);
  }, [id])
  return (
    <div className="flex">
        <div className={`${id ? 'hidden sm:flex' : 'flex-grow'}`}>
            <ChatList />
        </div>
        <div className={`${id ? 'flex-grow' : 'hidden flex-none sm:flex'}`}>
            {children}
        </div>
    </div>
  );
}

export default ChatLayout;
