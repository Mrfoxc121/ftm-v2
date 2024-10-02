import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { useRef } from "react";
import { useScroll, motion} from "framer-motion";


const Map = () => {
  const position = [51.8852, 1.1721];
  const ref = useRef(HTMLDivElement);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  return (
    <motion.div
    ref={ref}
    style={{
      opacity: scrollYProgress,
      scale: scrollYProgress,
    }}
    className="bg-slate-800 ring-1 ring-inset ring-slate-700 shadow-md lg:col-span-4 col-span-6 lg:row-span-1 flex justify-center items-center rounded-xl">
      <MapContainer
        className="w-full h-full rounded-xl z-0"
        center={position}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <h3 className="text-md text-slate-900 font-bold">Full Throttle Maps</h3>
            <p className="text-xs text-slate-900">Old House Farm</p>
            <p className="text-xs text-slate-900">Harwich Road</p>
            <p className="text-xs text-slate-900">Beaumont, Clacton on sea</p>
            <p className="text-xs text-slate-900">Essex, CO160AU</p>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
};

export default Map;
