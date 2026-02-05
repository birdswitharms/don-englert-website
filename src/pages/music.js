"use client";
import React, { useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import { massagedOutput } from "../app/util/music";
import { PlayIcon } from "@radix-ui/react-icons";
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
  const [expandedId, setExpandedId] = useState(null);

  return (
    <main className="m-0 p-4 sm:mx-24 sm:p-4 gap-4 bg-base text-white">
      <Table className="text-[11px] sm:text-[20px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-white"></TableHead>
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
            const isExpanded = expandedId === item.id;
            return (
              <React.Fragment key={item.id}>
                <TableRow>
                  <TableCell>
                    {item.videoId && (
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        aria-label={isExpanded ? "Close video" : "Play video"}
                      >
                        <PlayIcon className={`w-5 h-5 hover:text-gray-300 ${isExpanded ? "text-red-500" : "text-white"}`} />
                      </button>
                    )}
                  </TableCell>
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
                {isExpanded && (
                  <TableRow>
                    <TableCell colSpan={7} className="p-0">
                      <div className="p-4">
                        <iframe
                          width="100%"
                          height="315"
                          src={`https://www.youtube.com/embed/${item.videoId}`}
                          title={item.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
};

export default Music;
