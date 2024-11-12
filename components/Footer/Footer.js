import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Redes Sociales</h2>
<div>
${Button("/icons/twitter/logo-black.png", "/icons/twitter/logo-white.png", "Twitter")}
${Button("/icons/github/github-mark.png", "/icons/github/github-mark-white.png", "GitHub")}
${Button("/icons/linkedin/LI-In-Bug.png", "", "LinkedIn")}
${Button("/icons/telegram/Logo.png", "", "Telegram")}
</div>
`;