const Audio = () => {
  return (
    <div>
      <audio className="w-96" loop controls src="/assets/audio/space-hum.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export default Audio;
