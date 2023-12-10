import * as ReactIcons from 'react-icons/si';

interface TechCardProps {
  icon: keyof typeof ReactIcons
  name: string
}

export default function TechCard ({icon, name}: TechCardProps) {
  const Icon = ReactIcons[icon];

  return (
    <div className="bg-indigo-500 p-5 text-center flex flex-col text-white justify-center">
      <div className="block mx-auto">
        <Icon size={64} />
      </div>
      <h5 className="mt-5 font-semibold">{name}</h5>
    </div>
  )
}