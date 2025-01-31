export default function ExpenTotal() {
  const date = new Date();
  const month = date.getMonth() + 1;
  return (
    <div className="text-center w-full">
      <div className="flex items-center justify-between ">
        <div className="text-center w-1/2">
          <p>{month}월 수입 지출 합계</p>
          <p className="font-semibold text-xl text-warning">-20,300</p>
        </div>
        <div className="text-center w-1/2">
          <p>계좌 총 잔액</p>
          <p className="font-semibold text-xl">500,000</p>
        </div>
      </div>
      <p className="mt-2">지난달 보다 3,700원 더 쓰고 있어요</p>
    </div>
  );
}
