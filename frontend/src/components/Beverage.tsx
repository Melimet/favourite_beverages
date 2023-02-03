import { BeverageType } from '../types';

function Beverage({ beverage }: { beverage: BeverageType }) {
  return (
    <div>
      <h3>{beverage.name}</h3>
      <p>{beverage.price}€</p>
      <p>Weight: {beverage.weight}g</p>
      <p>Roast level: {beverage.roastLevel}</p>
    </div>
  );
}

export default Beverage;