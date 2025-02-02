import Image from "next/image";
import PointRullet from "./ui/point";

type PropsType = {
  num: number;
  label?: string;
};

export default function PointSection({ num, label }: PropsType) {
  return (
    <div className=" mt-4 font-bold text-2xl flex items-start space-x-2">
      <span className="w-[10px] h-[10px] relative">
        <Image src="/assets/quotes.png" fill sizes="10" alt="quotes" />
      </span>
      <p>
        {[...String(num)].map((v, i, arr) => (
          <PointRullet target={+v} key={i} loopCount={(arr.length - i) * 10} />
        ))}{" "}
        {label && "Points"}
      </p>
      <span className="w-[10px] h-[10px] relative">
        <Image src="/assets/quote.png" fill sizes="10" alt="quote" />
      </span>
    </div>
  );
}
