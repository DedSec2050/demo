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

export default function PostCard({ title, description, image, slug }) {
  // console.log(slug);
  return (
    <Link
      href={`blog/${slug}`}
      className="transition-all duration-300 hover:translate-y-[-10px]"
    >
      <Card className="bg-elevated text-white">
        <CardHeader className="my-2 gap-5">
          <CardTitle>{title}</CardTitle>
          <Image
            className="rounded-md"
            src={image}
            height={500}
            width={500}
            alt={`${slug}`}
          />
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate-300">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
