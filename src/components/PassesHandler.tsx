// components/PassesHandler.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import ConfirmAttendance from "@/components/Confirmation";

export default function PassesHandler({
  defaultPasses,
  rsvpDeadline,
  rsvpLink,
  rsvpLink2,
}: {
  defaultPasses: number;
  rsvpDeadline: string;
  rsvpLink: string;
  rsvpLink2: string;
}) {
  const searchParams = useSearchParams();

  const getValidPasses = () => {
    const urlPasses = searchParams.get('pases');
    if (!urlPasses) return defaultPasses;
    const numericPasses = parseInt(urlPasses);
    return isNaN(numericPasses) ? defaultPasses : Math.max(1, numericPasses);
  };

  const passes = getValidPasses();

  return (
    <ConfirmAttendance
      deadline={rsvpDeadline}
      confirmationLink={rsvpLink}
      confirmationLink2={rsvpLink2}
      passes={passes}
    />
  );
}