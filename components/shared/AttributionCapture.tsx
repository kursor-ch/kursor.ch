"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/shared/tracking";

export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
