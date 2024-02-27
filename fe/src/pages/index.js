export default function Model() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <a href="localhost:3000/" className="ml-12 text-3xl  tracking-widest">
          <h1>Tesla</h1>
        </a>
        <div className="lg:flex-row lg:flex lg:gap-8">
          <h1 className="p-2">Vehicles</h1>
          <h1 className="p-2">Energy</h1>
          <h1 className="p-2">Charging</h1>
          <h1 className="p-2">Discover</h1>
          <h1 className="p-2">Shop</h1>
        </div>
        <div className="flex flex-row gap-2 mr-2">
          <a
            className="rounded-full border-white border-[1px] border-solid cursor-pointer p-1"
            href="localhost:3000/support"
          >
            ?
          </a>
          <a className="rounded-full border-white border-[1px] border-solid cursor-pointer p-1">
            🌐
          </a>
          <a
            className="rounded-full border-white border-[1px] border-solid cursor-pointer p-1"
            href="localhost:3000/log-in"
          >
            👤
          </a>
        </div>
      </div>
    </div>
  );
}
