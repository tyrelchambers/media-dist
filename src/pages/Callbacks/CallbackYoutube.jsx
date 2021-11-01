import React, { useEffect } from "react";
import { getYoutubeAccessToken } from "../../api/getYoutubeAccessToken";

const Youtube = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code) {
      getYoutubeAccessToken(code).then((res) => console.log(res));
    }
  }, [code]);

  return (
    <div>
      <p>Authenticating...</p>
    </div>
  );
};

export default Youtube;
