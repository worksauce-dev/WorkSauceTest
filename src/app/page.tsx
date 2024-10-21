import { Metadata } from "next";
import { TestContainer } from "@/component/test/TestContainer";

export const metadata: Metadata = {
  title: "소스테스트",
};

export default async function Home() {
  return (
    <>
      <TestContainer />
    </>
  );
}
