export const CVFrame = ({ cvUrl }) => {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <iframe
        src={cvUrl}
        title="CV"
        className="w-[60%] h-[90%] border-2 border-bgDark rounded-lg shadow-lg"
        loading="lazy"
      ></iframe>
    </div>
  );
};
