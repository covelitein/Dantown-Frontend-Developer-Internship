import { Header, CardList, TableList } from "@/sections/dashboard";
import { ChatHeader, ChatList, ChatUi } from "@/sections/dashboard/chat";
import { ChatLayout, Mainlayout } from "@/sections/layout";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] grid grid-cols-1 mf:grid-cols-10 w-full">
      {/* Main Content */}
      <div className="mf:col-span-7">
        <Mainlayout>
          <Header />
          <CardList />
          <TableList />
        </Mainlayout>
      </div>
      {/* Chat Section */}
      <div className="mf:col-span-3 mf:block border-l h-full overflow-y-auto text-[#0F3F62]">
        <ChatLayout>
          <ChatHeader className="max-mf:hidden" />
          <ChatList />
          <ChatUi />
        </ChatLayout>
      </div>
    </div>
  );
}
