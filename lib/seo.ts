import type { Metadata } from "next";

export function pageMeta(params: {
  title: string;
  description: string;
  urlPath: string;
}): Metadata {
  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: params.urlPath
    },
    openGraph: {
      title: params.title,
      description: params.description
    }
  };
}
