import "./Bear.css";
import { useAnimalStore } from "../../../components/hooks/animals-Store/animals-store";



const Bears = (): React.ReactNode => {
  const { animals, addAnimals} = useAnimalStore();

  return (
    <div className="bear-counter-root">
      <p>{animals} bears in the zoo!</p>
      <button
        onClick={() => {
            addAnimals();
        }}
      >
        Add bears
      </button>
    </div>
  );
};

export default Bears;
