import { PiPlayLight, PiPauseLight } from "react-icons/pi";
import { ImSpinner2 } from "react-icons/im";

const PlayPauseIcon = ({
  isPlaying,
  isLoading,
}: {
  isPlaying: boolean;
  isLoading: boolean;
}) => {
  if (isLoading) return <ImSpinner2 className="animate-spin" fontSize="16px" />;

  if (isPlaying) return <PiPauseLight fontSize="16px" />;

  return <PiPlayLight fontSize="16px" />;
};

export default PlayPauseIcon;
