// domain.com/news/something-important
import { useRouter } from "next/router";

export default function NewsDetailpage(params) {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a request to backend api
  // to fetch the news detail with news id

  return <h1>NewsDetail Page</h1>;
}
