
'use client';
import { useEffect } from 'react';

export default function TradingViewWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (!window.TradingView) return;
      new window.TradingView.widget({
        container_id: "tradingview-widget",
        autosize: true,
        symbol: "BITSTAMP:ETHUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="tradingview-widget" className="w-full h-[450px]" />;
}
