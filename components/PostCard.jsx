import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ title, description, image, slug, type }) {
  // console.log(slug);
  return (
    <Link
      href={`${type}/${slug}`}
      className="transition-all duration-300 hover:translate-y-[-10px]"
    >
      <Card className="bg-elevated text-white">
        <CardHeader className="my-2 gap-5">
          <CardTitle>{`${title.substring(0, 50)} ...`}</CardTitle>
          <div className="max-h-[210px] overflow-hidden">
            <Image
              className="rounded-md"
              src={image}
              height={500}
              width={500}
              alt={`${slug}`}
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate-300">
            {`${description.substring(0, 250)}...`}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
