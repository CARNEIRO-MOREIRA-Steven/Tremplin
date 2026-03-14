export default function AutoVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="video-audit"
    >
      <source src="/audit-tremplin.mp4" type="video/mp4"  />
      Votre navigateur ne supporte pas la vidéo.
    </video>
  );
}