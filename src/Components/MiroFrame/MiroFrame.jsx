export const MiroFrame = () => {
  const miroUrl =
    'https://miro.com/app/live-embed/uXjVLwBrWck=/?moveToViewport=-1048,-352,2259,1309&embedId=824497252230';

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <iframe
        src={miroUrl}
        title="Miro Board"
        width="768"
        height="432"
        allow="fullscreen; clipboard-read; clipboard-write"
        allowFullScreen
        className="w-[70%] h-[80%] border-2 border-bgDark rounded-lg shadow-lg"
        loading="lazy"
      ></iframe>
    </div>
  );
};
