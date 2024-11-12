import "./Button.css";

export const Button = (LightIcon, DarkIcon, text) => {
    const body = document.body;
    const Button = document.createElement("button");
    Button.classList.add("my-btn");
    const img = document.createElement("img");
    img.alt = `${text} Icon`;
    Button.LightIcon = LightIcon || DarkIcon;
    Button.DarkIcon = DarkIcon || LightIcon;

    if (!Button.LightIcon && !Button.DarkIcon) {
        const heading = document.createElement("h4");
        heading.innerText = text;
        Button.appendChild(heading);
        return Button.outerHTML;
    }

    if (body.classList.contains("light")) {
        img.src = Button.LightIcon;
    } else {
        img.src = Button.DarkIcon;
    }

    const heading = document.createElement("h4");
    heading.innerText = text;
    Button.appendChild(img);
    Button.appendChild(heading);
    return Button.outerHTML;
};