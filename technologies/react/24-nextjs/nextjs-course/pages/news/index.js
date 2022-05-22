// domain.com/news
import Link from "next/link";

export default function Newspage(params) {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS is a great framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}
