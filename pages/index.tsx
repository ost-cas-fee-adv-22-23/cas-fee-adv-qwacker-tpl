import { GetServerSideProps } from "next";

type PageProps = {};

export default function PageHome({}: PageProps) {
  return <></>;
}
export const getServerSideProps: GetServerSideProps = async () => ({
  props: { posts: require("../data/posts.json") },
});
