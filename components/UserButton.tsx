import Link from "next/link";

import type { Database } from '@/types/supabase'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

type User = Database["public"]["Tables"]["profiles"]["Row"];

const UserButton = (props: {username: string}) => {

  return (
    <p className="flex flex-grow float-right justify-end">{ props.username }</p>
  );
};
export default UserButton;