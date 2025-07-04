import { PiPlayLight, PiPauseLight } from "react-icons/pi";
import { ImSpinner2 } from "react-icons/im";

const PlayPauseIcon = ({
  isPlaying,
  isLoading,
  fontSize = "16px",
}: {
  isPlaying: boolean;
  isLoading: boolean;
  fontSize?: string;
}) => {
  if (isLoading)
    return <ImSpinner2 className="animate-spin" fontSize={fontSize} />;

  if (isPlaying) return <PiPauseLight fontSize={fontSize} />;

  return <PiPlayLight fontSize={fontSize} />;
};

export default PlayPauseIcon;
