import { BlogList } from "./_components/home_page/List";
import { HomeMain } from "./_components/home_page/Main";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <HomeMain />
      <div className="slide-in">
        <BlogList />
      </div>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(200px);
              filter: blur(4px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0);
            }
          }
          .slide-in {
            opacity: 0;
            animation: slideIn 0.6s ease forwards;
            animation-delay: 1.2s;
          }
        `}
      </style>
    </div>
  );
}
