import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQueryClient } from "react-query";
import { removeYoutubeIntegration } from "../../api/removeYoutubeIntegration";
import { youtubeIntegrate } from "../../api/youtubeIntegrate";
import Button from "../../components/Button/Button";
import { H1 } from "../../components/headings/h1";
import { useUser } from "../../hooks/useUser";
import DashNav from "../../layout/DashNav/DashNav";

const Integrations = () => {
  const { userQuery } = useUser();
  const queryClient = useQueryClient();

  const youtubeIntegration = () => {
    youtubeIntegrate().then((res) => {
      window.open(res, "_blank");
    });
  };

  const disconnectYoutube = () => {
    queryClient.invalidateQueries("currentUser");
    return removeYoutubeIntegration();
  };

  const facebookIntegration = () => {
    window.FB.login(
      (response) => {
        console.log(response);
      },
      {
        // Scopes that allow us to publish content to Instagram
        scope: "instagram_basic,pages_show_list",
      }
    );
  };

  if (!userQuery.data) return null;

  return (
    <div className="max-w-screen-xl w-full ml-auto mr-auto">
      <DashNav />
      <H1>Integrations</H1>

      <section className="grid grid-cols-3 mt-8 gap-6">
        <div className="flex items-center justify-between gap-4 bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-6">
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              className="text-red-500"
            />
            <h2 className="font-bold text-primary-lightBlack">Youtube</h2>
          </div>
          {userQuery.data.youtubeRefreshToken ? (
            <Button variant="red" onClick={disconnectYoutube}>
              Disconnect
            </Button>
          ) : (
            <Button variant="secondary" onClick={youtubeIntegration}>
              Connect
            </Button>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-6">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="text-purple-500"
            />
            <h2 className="font-bold text-primary-lightBlack">Instagram</h2>
          </div>
          <Button variant="secondary">Connect</Button>
        </div>

        <div className="flex items-center justify-between gap-4 bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-6">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              className="text-blue-500"
            />
            <h2 className="font-bold text-primary-lightBlack">Twitter</h2>
          </div>
          <Button variant="secondary">Connect</Button>
        </div>

        <div className="flex items-center justify-between gap-4 bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-6">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="text-blue-600"
            />
            <h2 className="font-bold text-primary-lightBlack">Facebook</h2>
          </div>
          <Button variant="secondary" onClick={facebookIntegration}>
            Connect
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
