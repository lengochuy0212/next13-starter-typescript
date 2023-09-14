'use client'
import Link from "next/link"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: {id:string}}) => {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url)
    .then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  if(isLoading) {
    return <div>loading....</div>
 }
    return (
        <div>
        <div className="'my-3">
            <Link href={"/blogs"}>Go back</Link>
        </div>
        <Card className="text-center">
      <Card.Header>Title: {data?.title}</Card.Header>
      <Card.Body>
        <Card.Title>content: {data?.content}</Card.Title>
        <Card.Text>
         Author: {data?.author}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    )
}
export default ViewDetailBlog;