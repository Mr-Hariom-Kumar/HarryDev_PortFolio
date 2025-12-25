import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "c",
    "cplusplus",
    "css3",
    "Express",
    "git",
    "github",
    "html5",
    "javascript",
    "microsoft",
    "mongo",
    "mysql",
    "node",
    "vitejs",
    "python",
    "react",
    "stripe",
    "tailwindcss",
    "visualstudiocode",
  ];

  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ name }) => {
  const initialSrc = `/logo/${name}.svg`;
  const fallbackSrc = `/logo/${name}.png`;
  const handleError = (e) => {
    if (!e.currentTarget.dataset.fallbackApplied) {
      e.currentTarget.dataset.fallbackApplied = "1";
      e.currentTarget.src = fallbackSrc;
    }
  };
  return (
    <img
      src={initialSrc}
      onError={handleError}
      alt={name}
      className="duration-200 rounded-sm hover:scale-110"
    />
  );
};