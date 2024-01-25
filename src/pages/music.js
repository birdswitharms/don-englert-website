import React from "react";
import "../app/globals.css";
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

// type: item.type,
// format: item.format,
// label: item.label,
// title: item.title,
// resource_url: item.resource_url,
// role: item.role,
// year: item.year,
// artist: item.artist
console.log(massagedOutput);
const Music = () => {
  return (
    <main className="mx-24 p-4 gap-4 bg-base text-white">
      <Table className="text-[20px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px] text-white">Title</TableHead>
            <TableHead className="text-white">Year</TableHead>
            <TableHead className="text-white">Artist</TableHead>
            <TableHead className="text-white">Format</TableHead>
            <TableHead className="text-right text-white">Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {massagedOutput.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.artist}</TableCell>
              <TableCell>{item.format}</TableCell>
              <TableCell className="text-right">{item.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default Music;
