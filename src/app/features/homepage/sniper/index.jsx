"use client";

import { useEffect } from "react";
import styles from "../sniper/styles.module.scss"; 

const SniperCrmForm = () => {
  useEffect(() => {
    const iframe = document.getElementById("iFrame11");

    if (iframe) {
      iframe.addEventListener("load", () => {
        const iframeWindow = iframe.contentWindow;
        if (iframeWindow) {
          const parentUrl = window.location.href;
          iframeWindow.postMessage({ parentUrl: parentUrl }, "*");
        }
      });
    }
  }, []);

  return (
    <div>
      <div className={styles.myiframe}>
        <iframe
          id="iFrame11"
          className={styles.iframe}
          src="https://app.snipercrm.io/formframe?formid=f3bcd5e18d423&amp;c=0"
          frameBorder="0"
          scrolling="no"
          width="100%"
          name="snipercrmform"
        ></iframe>
      </div>

      {/* Load External Scripts */}
      <script
        async
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
      ></script>
      <script async src="https://app.snipercrm.io/js/iframeResizer.min.js"></script>
      <script async src="https://app.snipercrm.io/js/iframeResizerFix.min.js"></script>
    </div>
  );
};

export default SniperCrmForm;
