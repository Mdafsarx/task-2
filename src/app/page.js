import { IosPickerItem } from '../components/Carosol';
import '../components/embla.css';

export default function Home() {
  const names = [
    "EVERYTHING ALWAYS",
    "LINKIN PARK",
    "PESO PLUMA",
    "KENDRICK LAMAR",
    "RAUW ALEJANDRO",
    "TRAVIS SCOTT",
    "BAD BUNNY",
    "BABY KEEM",
    "RADBULL",
    "ROSALIA",
    "BACARD"
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-[77vh]">
      <div className="embla flex justify-center">
        <IosPickerItem
          names={names}
          perspective="center"
          loop={true} 
        />
      </div>
    </div>
  );
}
