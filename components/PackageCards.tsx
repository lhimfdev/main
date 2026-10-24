import Link from "next/link";
import { PACKAGES, peso } from "@/lib/site";

export default function PackageCards() {
  return (
    <div className="g3">
      {PACKAGES.map((x, i) => (
        <article key={x.id} className={`pk${x.pop ? " pop" : ""}`}>
          {x.pop && <span className="badge">Popular</span>}
          <small>PACKAGE 0{i + 1}</small>
          <h3>{x.n}</h3>
          <div className="old">{peso(x.o)}</div>
          <div className="price">{peso(x.p)}</div>
          <span className="save">Save {peso(x.o - x.p)}</span>
          <ul>
            {x.f.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Link className="btn" href={`/order?package=${x.id}`}>Choose {x.n}</Link>
          <a className="s" href={x.s} target="_blank" rel="noopener noreferrer">View sample profile ↗</a>
        </article>
      ))}
    </div>
  );
}
