import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Setting() {
    const [settings, setSettings] = useState({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--primary-color": "rgb(255, 0, 86)",
        "--text-color": "#0a0a0a",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": "1"
    });

    useEffect(() => {
        const storedSettings = JSON.parse(localStorage.getItem("settings"));
        if (storedSettings) {
            setSettings(storedSettings);
        }
    }, []);

    useEffect(() => {
        console.log("Updating CSS variables with settings:", settings);
        localStorage.setItem("settings", JSON.stringify(settings));
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
    }, [settings]);

    const [theme, setTheme] = useState("light");
    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0a0a0a",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea"
        }
    ];

    function changeTheme(i) {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? "light" : "dark");
        updateSettings(_theme);
    }

    function updateSettings(updatedSettings) {
        console.log("Updating settings:", updatedSettings);
        const _settings = { ...settings, ...updatedSettings };
        setSettings(_settings);
    }

    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ];

    function changeColor(i) {
        const _color = primaryColors[i];
        let _settings = { ...settings };
        _settings["--primary-color"] = _color;
        updateSettings(_settings);
    }

    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ];

    function changeFontSize(i) {
        const _size = fontSizes[i];
        let _settings = { ...settings };
        _settings["--font-size"] = _size.value;
        updateSettings(_settings);
    }

    const animationSpeeds = [
        {
            title: "Slow",
            value: 2
        },
        {
            title: "Medium",
            value: 1
        },
        {
            title: "Fast",
            value: 0.5
        }
    ];

    function changeAnimationSpeed(i) {
        const _speed = animationSpeeds[i];
        let _settings = { ...settings };
        _settings["--animation-speed"] = _speed.value;
        updateSettings(_settings);
    }

    return (
        <div>
            <div className="section d-block">
                <h2>Primary Theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={() => changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Preferred Color</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div
                            key={index}
                            className="option light"
                            style={{ backgroundColor: color }}
                            onClick={() => changeColor(index)}
                        >
                            {settings["--primary-color"] === color && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button
                            key={index}
                            className="btn"
                            onClick={() => changeFontSize(index)}
                        >
                            {size.title}
                            {settings["--font-size"] === size.value && (
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button
                            key={index}
                            className="btn"
                            onClick={() => changeAnimationSpeed(index)}
                        >
                            {speed.title}
                            {settings["--animation-speed"] === speed.value && (
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
