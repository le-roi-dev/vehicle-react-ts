import { Link } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import vehicleWithWoman from '../../images/vehicle/vehicle-with-woman.jpg'
import VehicleCard2 from "../../components/Cards/VehicleCard2";
import useVehicles from "../../hooks/useVehicles";


const MyVehicle = () => {
  const [vehicles, setVehicles] = useVehicles();

  const deleteVehicle = (id: string) => {
    const newVehicles = vehicles.filter(v => v.id != id);
    setVehicles(newVehicles);
  }

  let mainContent = (
    <div className="flex flex-col justify-center items-center pb-16">
      <img src={vehicleWithWoman} className="w-100 h-auto" />
      <div className="text-2xl font-bold p-2">No Vehicle</div>
      <div className="mb-6">You don't have any vehicle. Please add your vehicle</div>
      <Link to={'/myvehicle/create'} className="bg-orange-400 text-white py-3 px-8 rounded-xl shadow-mine">Add New Vehicle</Link>
    </div>
  )

  if (vehicles.length > 0) {
    mainContent = (
      <div>
        <div className="p-4 grid grid-cols-2 gap-4 flex-1">
          {
            vehicles.map(vehicle => <VehicleCard2 vehicle={vehicle} deleteVehicle={deleteVehicle} />)
          }
        </div>
        <div className="flex justify-end">
          <Link to={'/myvehicle/create'} className="py-3 px-8 bg-orange-400 text-white shadow-xl rounded-xl">Add New Vehicle</Link>
        </div>
      </div>
    )
  }
  return (
    <DefaultLayout>
      <div className="bg-white rounded-2xl">
        <div className="p-8">
          <div className='text-4xl font-bold'>My Vehicle</div>
          <div className='h-[5px] w-[180px] mt-2 rounded-full bg-orange-400'></div>
          {mainContent}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyVehicle;
