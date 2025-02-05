"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addSavingGoal } from "@/actions/api";
import { useTargetBank } from "@/hooks/targetBank-context";

type PropsType = {
  setIsOpen: (value: boolean) => void;
};

export default function TargetBankCreate({ setIsOpen }: PropsType) {
  const { refetchList } = useTargetBank();

  const submitHandler = async (formData: FormData) => {
    const target = formData.get("target") as string;
    const targetMoney = formData.get("targetMoney") as string;

    try {
      await addSavingGoal({ name: target, targetAmount: +targetMoney });
      setIsOpen(false);
      refetchList();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form action={submitHandler} className="px-1 py-4 flex flex-col items-center">
      <div>
        <p className="text-sm font-bold mb-2">목표</p>
        <Input name="target" />
      </div>

      <div>
        <p className="text-sm font-bold mt-3 mb-2">목표금액</p>
        <Input name="targetMoney" />
      </div>
      <Button className="mt-3 text-kb-gray font-bold bg-kb-main hover:bg-kb-main" type="submit">
        추가하기
      </Button>
    </form>
  );
}
