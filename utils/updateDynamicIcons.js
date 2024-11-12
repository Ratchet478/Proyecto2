import { Footer } from "../components/Footer/Footer";

export const updateDynamicIcons = () => {
    const footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = Footer();
};