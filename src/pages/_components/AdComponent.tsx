import React, { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    // 确保全局 adsbygoogle 数组存在
    window.adsbygoogle = window.adsbygoogle || [];
    const adsbygoogleInitialized = window.adsbygoogle.loaded;

    if (!adsbygoogleInitialized) {
      // 创建并添加 AdSense 脚本
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("data-ad-client", "ca-pub-7585955822109216");
      document.head.appendChild(script);

      script.onload = () => {
        // 初始化广告位，只在脚本加载完成后执行
        try {
          window.adsbygoogle.push({});
        } catch (error) {
          console.error("AdSense Initialization failed", error);
        }
      };
    } else {
      // 如果脚本已经存在，直接尝试初始化广告位
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.error("AdSense re-initialization failed", error);
      }
    }

    // 组件卸载时的清理操作
    return () => {
      // 清理操作通常与广告加载逻辑本身无关，但你可以在这里执行必要的清理
    };
  }, []);

  return <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-7585955822109216" data-ad-slot="7438073448" data-ad-format="auto" data-full-width-responsive="true"></ins>;
};

export default AdComponent;
