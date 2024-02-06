import React from "react";
import "../app/globals.css";
import Image from "next/image";
import { massagedOutput } from "../app/util/music";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Music = () => {
  return (
    <main className="m-0 p-4 sm:mx-24 sm:p-4 gap-4 bg-base text-white">
      <Table className="text-[11px] sm:text-[20px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-white">Album Cover</TableHead>
            <TableHead className="w-[250px] text-white">Title</TableHead>
            <TableHead className="text-white">Year</TableHead>
            <TableHead className="text-white">Artist</TableHead>
            <TableHead className="text-white">Format</TableHead>
            <TableHead className="text-right text-white">Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {massagedOutput.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <Image
                    src={`/covers/${item.title}.jpeg`}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ height: "auto" }}
                    onError={(e) => {
                      e.target.onError = null;
                      e.target.replaceWith(
                        document.createTextNode("Cover not available.")
                      );
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.year}</TableCell>
                <TableCell>{item.artist}</TableCell>
                <TableCell>{item.format}</TableCell>
                <TableCell className="text-right">{item.type}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
};

export default Music;
