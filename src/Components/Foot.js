import React, {useState, useEffect} from "react";

const skillsData = [
    {skill: "JavaScript", percentage: 80},
    {skill: "React", percentage: 75},
    {skill: "Node.js", percentage: 70},
    {skill: "Python", percentage: 65},
    {skill: "SQL", percentage: 80},
];

function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("skills");
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="skills-section" id="skills">
            <h2 className={`skills-title ${isVisible ? "fade-in" : ""}`}>
                My Skills
            </h2>
            <div className={`skills-container ${isVisible ? "fade-in" : ""}`}>
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill">
                        <div className="skill-name">{skill.skill}</div>
                        <div className="progress-bar">
                            <div
                                className="progress-bar-fill"
                                style={{width: `${skill.percentage}%`}}
                            ></div>
                        </div>
                        <div className="percentage">{skill.percentage}%</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
