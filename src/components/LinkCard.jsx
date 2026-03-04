function LinkCard({ title, link, icon }) {

  const brandColors = {
    Instagram: "#E1306C",
    Tiktok: "#000000",
    Facebook: "#1877F2",
    LinkedIn: "#0A66C2",
    Email: "#EA4335",
  };

  const hoverColor = brandColors[title] || "#333";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      style={{ "--hover-color": hoverColor }}
    >
    <img src={icon} alt={title}  />  {title}
    </a>
  );
}

export default LinkCard;