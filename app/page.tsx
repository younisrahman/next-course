
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/authOption";

export default async function Home() {
  const seassion = await getServerSession(authOption)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>hello {seassion && <span>{seassion.user!.name}</span>}</h1>

        <Link href="/users">Users</Link>

        <ProductCard />
      </main>

    </div>
  );
}
