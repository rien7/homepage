import * as motion from "motion/react-client";
import { BlogList } from "./_components/home_page/List";
import { HomeMain } from "./_components/home_page/Main";

export const revalidate = 60;
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen min-w-screen gap-4">
      <HomeMain />
      <motion.div
        className="[--x:0] md:[--x:200px] [--y:20px] md:[--y:0]"
        initial={{
          opacity: 0,
          x: "var(--x)",
          y: "var(--y)",
          filter: "blur(4px)",
        }}
        animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        <BlogList />
      </motion.div>
    </div>
  );
}
