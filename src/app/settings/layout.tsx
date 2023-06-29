import React from "react";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div>
      this like my nav bar now
      <main>{children}</main>
    </div>
  );
}
