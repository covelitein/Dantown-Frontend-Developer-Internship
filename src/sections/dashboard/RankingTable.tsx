import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Crown, Dot } from "lucide-react";

const players = [
  {
    rank: 1,
    name: "Mamang Ironmen",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop",
    category: "Skaters",
    points: '2.140',
    isTopRanked: true,
    bgColor: "bg-[#D9EDFF]",
  },
  {
    rank: 2,
    name: "Ariana Grande",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    category: "Cyclist",
    points: '1.814',
    bgColor: "bg-[#FFDAD9]",
  },
  {
    rank: 3,
    name: "Trent Alexander Arnold",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop",
    category: "Skaters",
    points: '1.620',
    bgColor: "bg-[#D9DAFF]",
  },
  {
    rank: 4,
    name: "Shakira Wakawaka",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    category: "Yogas",
    points: '1.280',
    bgColor: "bg-[#FFDAD9]",
  },
];

export function RankingTable() {
  return (
    <div className="overflow-x-auto text-nowrap text-[#0F3F62]">
      <Table className="min-w-full border-collapse border-0">
        <TableHeader className="[&_tr]:border-b-0 text-base">
          <TableRow className="border-b-4">
            <TableHead className="w-16">Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="">Category</TableHead>
            <TableHead className="text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.rank} className="border-b-0">
              <TableCell className="">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center text-lg ${
                    player.rank === 1
                      ? "bg-[#54BCBD] text-white custom-clip-path "
                      : ""
                  }`}
                >
                  {player.rank}
                </span>
              </TableCell>
              <TableCell className="border-b">
                <div className="flex items-center gap-3">
                  <div
                    className={`size-14 rounded-full ${player.bgColor}`}
                  ></div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-base">{player.name}</span>
                    {player.isTopRanked && (
                      <img src="/imgs/king.png" alt="crown" />
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell className="border-b">
                <Badge
                  className={`flex px-1 ${
                    player.category == "Skaters"
                      ? "bg-[#E7F7F8] hover:bg-[#E7F7F8]"
                      : player.category == "Cyclist"
                      ? "bg-[#DAFDFF] hover:bg-[#DAFDFF]"
                      : player.category == "Yogas"
                      ? "bg-[#FFECE8] hover:bg-[#FFECE8]"
                      : ""
                  } text-[#0F3F62] text-base`}
                >
                  <Dot className={`size-10 ${
                    player.category == "Skaters"
                      ? "text-[#54BCBD]"
                      : player.category == "Cyclist"
                      ? "text-[#3DEBF6]"
                      : player.category == "Yogas"
                      ? "text-[#F4694C]"
                      : ""
                  }`}/>
                  {player.category}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-base font-medium border-b">
                {player.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
