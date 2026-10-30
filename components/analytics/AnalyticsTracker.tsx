"use client";

import {
  useEffect,
} from "react";

import {
  usePathname,
} from "next/navigation";


const VISITOR_KEY =
  "analit_visitor_id";

const SESSION_KEY =
  "analit_session_id";


function createId() {
  return crypto.randomUUID();
}


function getVisitorId() {
  try {
    let id =
      localStorage.getItem(
        VISITOR_KEY
      );

    if (!id) {
      id = createId();

      localStorage.setItem(
        VISITOR_KEY,
        id
      );
    }

    return id;
  } catch {
    return createId();
  }
}


function getSessionId() {
  try {
    let id =
      sessionStorage.getItem(
        SESSION_KEY
      );

    if (!id) {
      id = createId();

      sessionStorage.setItem(
        SESSION_KEY,
        id
      );
    }

    return id;
  } catch {
    return createId();
  }
}


function getDevice() {
  const userAgent =
    navigator.userAgent.toLowerCase();

  if (
    /ipad|tablet|playbook|silk/.test(
      userAgent
    )
  ) {
    return "tablet";
  }

  if (
    /mobile|iphone|ipod|android/.test(
      userAgent
    )
  ) {
    return "mobile";
  }

  return "desktop";
}


function getSource() {
  const search =
    new URLSearchParams(
      window.location.search
    );

  const utmSource =
    search.get("utm_source");

  if (utmSource) {
    return `utm:${utmSource.slice(
      0,
      100
    )}`;
  }

  if (!document.referrer) {
    return "direct";
  }

  try {
    return new URL(
      document.referrer
    ).hostname;
  } catch {
    return "direct";
  }
}


export default function AnalyticsTracker() {
  const pathname =
    usePathname();


  useEffect(() => {
    if (!pathname) {
      return;
    }


    const visitorId =
      getVisitorId();

    const sessionId =
      getSessionId();


    const payload = {
      visitorId,
      sessionId,

      page:
        pathname,

      device:
        getDevice(),

      source:
        getSource(),

      language:
        navigator.language,

      timezone:
        Intl.DateTimeFormat()
          .resolvedOptions()
          .timeZone,
    };


    fetch(
      "/api/analytics/track",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(
            payload
          ),

        keepalive: true,
      }
    ).catch(() => {
      // Analytics nunca deve
      // interromper a navegação.
    });
  }, [pathname]);


  return null;
}