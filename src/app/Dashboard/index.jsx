const Dashboard = () => {
  return (
    <div className="flex flex-col gap-2 p-8 md:p-6 lg:p-28">
      <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Hi
      </h5>
      <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        I'm <span className="text-[#FF9D23]">Raffi</span>
      </h5>
      <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        a Junior Developer
      </h5>
      <div className="text-base md:text-lg lg:text-2 max-w-4xl">
        <p className="mb-2">
          Halo saya adalah seorang Junior Developer yang sedang menempuh pendidikan di Universitas Semarang
        </p>
        <p>
          Hobby
        </p>
      </div>
    </div>
  )
}

export default Dashboard