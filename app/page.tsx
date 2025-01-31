import CalenderPieChart from "@/components/home/calenderPieChart";
import ExpenTotal from "@/components/home/expenTotal";
import RecentUsage from "@/components/home/recentUsage";

export default function Home() {
  return (
    <div className="b-nav-m pt-2 ">
      <h1 className="text-lg font-bold px-3">FundY</h1>
      <section
        className="mx-4 mt-3 py-3 px-5 bg-white shadow-sm rounded-xl"
        data-aos="fade-up"
      >
        <ExpenTotal />
      </section>
      <section
        className="px-4 mx-4 mt-3 pt-5 bg-white shadow-sm rounded-xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <RecentUsage />
      </section>
      <section data-aos="fade-up" data-aos-delay="200">
        <CalenderPieChart />
      </section>
    </div>
  );
}
