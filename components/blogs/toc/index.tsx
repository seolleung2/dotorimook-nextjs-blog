import React, { useEffect, useRef, useState } from "react";
import TocItem from "./TocItem";

const TableOfContents = () => {
  const headingsRef = useRef<Element[]>();
  const scrollRef = useRef(0);
  const [active, setActive] = useState("");
  useEffect(() => {
    const children = document.querySelector("#blogArticle")?.children;

    for (let i = 0; i < children!.length; i++) {
      const elementTagName = children![i].tagName;
      console.log("elementTagName", elementTagName);
      if (
        elementTagName === "H2" ||
        elementTagName === "H3" ||
        elementTagName === "H4"
      ) {
        children![i].setAttribute("id", children![i].innerHTML);
      }
    }
    console.log(document.querySelector("#blogArticle"));

    const headings = Array.from(
      document.querySelectorAll("h2[id], h3[id], h4[id]")
    );

    console.log("headings: ", headings);
    const ids = headings.map((e) => e.id);
    headingsRef.current = headings;
    console.log(headingsRef.current);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id") ?? "";
          console.log(entry);
          if (entry.isIntersecting) {
            setActive(id);
            scrollRef.current = window.scrollY;
            return;
          }
          const diff = scrollRef.current - window.scrollY;
          const isScrollingUp = diff > 0;
          const currentIndex = ids.indexOf(id);
          const prevEntry = ids[currentIndex - 1];
          if (isScrollingUp) {
            const id = prevEntry;
            setActive(id);
          }
        });
      },
      {
        rootMargin: "10% 0% -85% 0%",
        threshold: 0.2,
      }
    );
    headings.forEach((e) => observer.observe(e));
  }, []);

  const handleTocItemClick = (id: string) => {
    setActive(id);
  };
  return (
    <section className="card fixed top-48 right-[4%] hidden lg:block">
      <aside className="card-body p-4">
        <div className="flex items-center gap-4">
          <h2 className="text-md font-semibold uppercase tracking-widest text-accent">
            Table of Contents
          </h2>
        </div>
        <ol className="list-none">
          {headingsRef.current?.map((e, i) => {
            const id = e.id;
            const isActive = active === id;
            return (
              <li key={i} className="my-3">
                <TocItem
                  id={id}
                  text={e.textContent ?? ""}
                  active={isActive}
                  onClick={() => handleTocItemClick(id)}
                />
              </li>
            );
          })}
        </ol>
      </aside>
    </section>
  );
};

export default TableOfContents;
