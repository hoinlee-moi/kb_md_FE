import CalenderPieChart from "@/components/home/calenderPieChart";
import Education from "@/components/home/education";
import ExpenTotal from "@/components/home/expenTotal";
import KbSocre from "@/components/home/kbScore";
import RecentUsage from "@/components/home/recentUsage";
import RewardRanking from "@/components/home/rewardRanking";
import TargetBankSwiper from "@/components/home/targetBankSwiper";
import { TargetBankProvider } from "@/hooks/targetBank-context";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default async function Home() {
  return (
    <div className="b-nav-m pt-2">
      <section className="mx-4 mt-3 py-3 px-5 bg-white shadow-sm rounded-xl" data-aos="fade-up">
        <ExpenTotal />
      </section>
      <section className="px-4 mx-4 mt-3 pt-5 bg-white shadow-sm rounded-xl" data-aos="fade-up" data-aos-delay="100">
        <RecentUsage />
      </section>
      <section data-aos="fade-up" className="mb-5">
        <CalenderPieChart />
      </section>
      <TargetBankProvider>
        <section className="px-4 mx-4 mt-3 pt-1 bg-white shadow-sm rounded-xl" data-aos="fade-up" data-aos-delay="100">
          <TargetBankSwiper />
        </section>
      </TargetBankProvider>
      <h2 className="text-xl font-bold pl-5 mt-3" data-aos="fade-up" data-aos-delay="100">
        교육 컨텐츠
      </h2>
      <section className="px-4 mx-4  pt-4 pb-3 bg-white shadow-lg rounded-xl" data-aos="fade-up" data-aos-delay="100">
        <Education />
      </section>
      <section className="mt-5 mx-4 pt-4 flex justify-between items-center space-x-4" data-aos="fade-up" data-aos-delay="100">
        <KbSocre />
        <RewardRanking />
      </section>
    </div>
  );
}
