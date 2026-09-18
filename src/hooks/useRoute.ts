import { useEffect, useState } from "react";

export function getPath() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const path = raw.split("?")[0];
  return path.startsWith("/") ? path : `/${path}`;
}

export function useRoute() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onHash = () => {
      setPath(getPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "#/";
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return path;
}

export function navMatch(path: string, id: string) {
  if (id === "home") return path === "/";
  if (id === "courses") return path.startsWith("/courses");
  if (id === "insights") return path.startsWith("/insights");
  return path === `/${id}` || path.startsWith(`/${id}/`);
}
