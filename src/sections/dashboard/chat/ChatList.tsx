import { ChatDisplay } from "@/components/composed/chat-display";
import { Badge } from "@/components/ui/badge";

interface ChatListProps {
  name: string;
  msg: string;
  color: string;
}

const chatList: ChatListProps[] = [
  {
    name: "Ironmen",
    msg: "When will the event be held?",
    color: "#D9EDFF",
  },
  {
    name: "Ariana Grande",
    msg: "Alright then. See you there",
    color: "#FFDAD9",
  },
  {
    name: "Ariana Grande",
    msg: "Come on join to my party!",
    color: "#D9DAFF",
  },
  {
    name: "Ariana Grande",
    msg: "After that you can see me",
    color: "#FFD6A5",
  },
];

export default function ChatList() {
  return (
    <div>
      <div className="mf:px-4 mt-3">
        {/* chat sum start */}
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold">Chats</h3>
          <Badge className="bg-[#E0F3F3] text-[#54BCBD] hover:bg-[#E0F3F3]">14</Badge>
        </div>
        {/* chat sum end */}

        {/* chat listings start */}
        <div className="mt-6">
          {chatList.map((chat, index) => (
            <ChatDisplay
              key={index}
              name={chat.name}
              msg={chat.msg}
              color={chat.color}
            />
          ))}
        </div>
        {/* chat listings end */}
      </div>
    </div>
  );
}
