export const CVFrame = ({ cvUrl }) => {
  if (!cvUrl) {
    return (
      <div className="flex justify-center items-center w-full h-screen text-gray-700 text-xl font-semibold">
        Aucun CV disponible.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <iframe
        src={cvUrl}
        title="CV"
        className="w-[60%] h-[90%] border-2 border-bgDark rounded-lg shadow-lg"
        loading="lazy"
      />
    </div>
  );
};
