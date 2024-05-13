import Image from "next/image";

export default function Home() {
  return (
   <body>
      <h1>Hello, world!</h1>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />
   </body>
  );
}
