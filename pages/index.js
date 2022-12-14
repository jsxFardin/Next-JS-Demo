import Link from "next/link";

function Home() {
  return (
    <div>
      <Link href='/blog' legacyBehavior>
        <a>Blog</a>
      </Link>
      |
      <Link href='/product' legacyBehavior>
        <a>Products</a>
      </Link>
    </div>
  )
}

export default Home;