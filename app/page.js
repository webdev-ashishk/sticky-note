import StickyNote from "@/components/stickyNote";
import { CiCirclePlus } from "react-icons/ci";

export default function Home() {
  return (
    <main>
      {/* title  */}
      <div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-br from-blue-800 to-red-200 bg-clip-text text-transparent">
          QUICK-NOTE
        </h1>
      </div>
      {/* button  */}
      <div className="text-5xl font-bold text-blue-400 flex justify-center items-center">
        <button>
          <CiCirclePlus />
        </button>
      </div>
      {/* textarea  */}
      <div className="flex flex-wrap justify-center items-center">
        <StickyNote />
      </div>
    </main>
  );
}
