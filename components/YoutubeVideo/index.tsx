const YoutubeVideo = ({
  src,
  title,
}: {
  src: string
  title?: string
}) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
)

export default YoutubeVideo