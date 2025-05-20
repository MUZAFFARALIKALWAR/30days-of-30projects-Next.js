import Link from "next/link";

export default function Home() {
  return (
   <main>
     <h1 className="text-2xl sm:text-4xl font-bold text-center p-10">30 Days of 30 Projects Next.js</h1>
     <ul>
      <li className="p-5 grid grid-cols-1 sm:grid-cols-3 ">
        <Link className="p-2 rounded-xl text-center font-bold bg-gray-300 m-5" href={"/calculator"}>Day-1 Simple Calculator</Link>
        <Link className="p-2 rounded-xl text-center font-bold bg-gray-300 m-5" href={"/word"}>Day-2 Word Counter</Link>
        <Link className="p-2 rounded-xl text-center font-bold bg-gray-300 m-5" href={"/timer"}>Day-3 Countdown Timer App 🙌</Link>
        <Link className="p-2 rounded-xl text-center font-bold bg-gray-300 m-5" href={"/form"}>Day-4 Contact Form 📱</Link>
        <Link className="p-2 rounded-xl text-center font-bold bg-gray-300 m-5" href={"/jobform"}>Day-5 Job Form 📱</Link>
      </li>
     </ul>
   </main>
  );
}
