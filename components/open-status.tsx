"use client";

import { useEffect, useEffectEvent, useState } from "react";

import { restaurant } from "@/data/restaurant";

type OpenStatusProps = {
  light?: boolean;
};

type ServiceState = {
  isOpen: boolean;
  label: string;
  detail: string;
};

const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Europe/Paris",
  weekday: "long",
});

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Paris",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function toMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);

  return hours * 60 + minutes;
}

function toDisplayTime(value: string) {
  return value.replace(":", "h");
}

function formatRanges(
  ranges: readonly {
    open: string;
    close: string;
  }[],
) {
  return ranges
    .map((range) => `${toDisplayTime(range.open)} — ${toDisplayTime(range.close)}`)
    .join(" · ");
}

function getServiceState(now: Date): ServiceState {
  const weekday = weekdayFormatter.format(now).toLowerCase();
  const currentDayIndex = restaurant.schedule.findIndex(
    (day) => day.key === weekday,
  );
  const today =
    currentDayIndex >= 0 ? restaurant.schedule[currentDayIndex] : restaurant.schedule[0];
  const timeParts = timeFormatter.formatToParts(now);
  const hour = Number(timeParts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(
    timeParts.find((part) => part.type === "minute")?.value ?? "0",
  );
  const currentMinutes = hour * 60 + minute;

  const openNow = today.ranges.find((range) => {
    const open = toMinutes(range.open);
    const close = toMinutes(range.close);

    return currentMinutes >= open && currentMinutes < close;
  });

  if (openNow) {
    return {
      isOpen: true,
      label: "Ouvert maintenant",
      detail: `Aujourd’hui · ${formatRanges(today.ranges)}`,
    };
  }

  for (let offset = 0; offset < restaurant.schedule.length; offset += 1) {
    const day = restaurant.schedule[(currentDayIndex + offset) % restaurant.schedule.length];
    const nextRange =
      offset === 0
        ? day.ranges.find((range) => currentMinutes < toMinutes(range.open))
        : day.ranges[0];

    if (!nextRange) {
      continue;
    }

    const dayLabel =
      offset === 0 ? "aujourd’hui" : offset === 1 ? "demain" : day.label.toLowerCase();

    return {
      isOpen: false,
      label: `Rouvre ${dayLabel} à ${toDisplayTime(nextRange.open)}`,
      detail: `Service du jour · ${formatRanges(today.ranges)}`,
    };
  }

  return {
    isOpen: false,
    label: "Horaires à vérifier",
    detail: "Contacte l’équipe pour confirmer le prochain service.",
  };
}

export default function OpenStatus({ light = false }: OpenStatusProps) {
  const [state, setState] = useState<ServiceState>(() => getServiceState(new Date()));

  const refreshState = useEffectEvent(() => {
    setState(getServiceState(new Date()));
  });

  useEffect(() => {
    refreshState();

    const intervalId = window.setInterval(() => {
      refreshState();
    }, 60_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const shell = light
    ? "border-[rgba(248,241,232,0.16)] bg-[rgba(20,15,13,0.42)] text-[rgba(248,241,232,0.92)]"
    : "border-[var(--line)] bg-[rgba(248,241,232,0.64)] text-[var(--ink)]";

  const dot = state.isOpen ? "bg-emerald-400" : "bg-[var(--gold)]";
  const detailTone = light ? "text-[rgba(248,241,232,0.72)]" : "text-[var(--ink-muted)]";

  return (
    <div
      aria-live="polite"
      className={`inline-flex items-start gap-3 rounded-[1.2rem] border px-4 py-3 ${shell}`}
    >
      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${dot}`} />
      <div>
        <p suppressHydrationWarning className="text-[11px] uppercase tracking-[0.28em]">
          {state.label}
        </p>
        <p suppressHydrationWarning className={`mt-2 text-sm leading-7 ${detailTone}`}>
          {state.detail}
        </p>
      </div>
    </div>
  );
}
