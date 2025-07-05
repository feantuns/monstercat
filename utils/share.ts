export const share = async ({
  title,
  url,
  text,
}: {
  title: string;
  url: string;
  text?: string;
}) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        url,
        text,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  } else {
    console.warn("Share API not supported in this browser.");
  }
};
