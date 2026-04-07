"use client";

import { useEffect, useState } from "react";
import { CircleAlert, CircleCheckBig, LoaderCircle } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type ApiStatusResponse = {
  online: boolean;
  status: number;
  latencyMs: number;
};

export function SidebarApiStatus() {
  const [status, setStatus] = useState<ApiStatusResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadStatus = async () => {
      try {
        const res = await fetch("/api/v1/status", {
          cache: "no-store",
        });
        const data = (await res.json()) as ApiStatusResponse;

        if (!isMounted) return;

        setStatus(data);
      } catch {
        if (!isMounted) return;

        setStatus({
          online: false,
          status: 500,
          latencyMs: 0,
        });
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadStatus();
    const interval = window.setInterval(loadStatus, 30000);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const isOnline = status?.online ?? false;
  const label = isLoading
    ? "Checking API..."
    : isOnline
      ? "API Online"
      : "API Offline";
  const detail = isLoading || !status
    ? "Checking status"
    : isOnline
      ? `Response ${status.latencyMs} ms`
      : "Connection failed";
  const tooltipText = isLoading
    ? "Checking API connection"
    : isOnline
      ? `API Online • Response ${status?.latencyMs ?? 0} ms`
      : "API Offline • Unable to connect";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={tooltipText}>
          <>
            {isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : isOnline ? (
              <CircleCheckBig className="text-emerald-600" />
            ) : (
              <CircleAlert className="text-rose-600" />
            )}
            <div className="flex flex-col items-start">
              <span className="truncate font-medium">{label}</span>
              <span className="truncate text-sm text-muted-foreground">
                {detail}
              </span>
            </div>
          </>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
