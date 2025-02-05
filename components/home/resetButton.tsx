"use client";

import { useTargetBank } from "@/hooks/targetBank-context";
import { useUser } from "@/hooks/user-context";

export default function ResetButton() {
  const { reFetchUser } = useUser();
  const { refetchList } = useTargetBank();

  const refetchButton = async () => {
    await reFetchUser();
    await refetchList();
  };

  return (
    <button className="transition duration-200 " onClick={refetchButton}>
      <svg className="fill-current active:animate-spin text-gray-400 dark:text-gray-500 shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16">
        <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
      </svg>
    </button>
  );
}
