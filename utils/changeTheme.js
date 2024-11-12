import { changeText } from "/utils/changeText";
import { updateDynamicIcons } from "/utils/updateDynamicIcons";

export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        changeText();
        updateDynamicIcons();
    });
};
