/* eslint-disable @next/next/no-img-element */
function Avatar({ url, className }) {
  return (
    <a href="https://github.com/carolandrade1" target="_blank" rel="noopener noreferrer" title="Author Github">
      <img
        src={url}
        loading="lazy"
        alt="Author Github"
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      />
    </a>
  );
}

export default Avatar;
