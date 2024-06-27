const NotFound = () => {
  return (
    <div className="mt-52 mb-64 flex justify-center items-center gap-28">
      <div className="flex flex-col items-start">
        <div>
          {/* <img
            src={brandLogo}
            alt="logo"
            className="w-28 md:w-[120px] pointer-events-none"
          /> */}
          <h1
            className={`text-[150px] lg:text-[240px] text-[#011D41]/50 leading-[130%]`}
          >
            404
          </h1>
          <p className="text-xl xl:text-2xl">The requested URL is an uncharted zone.</p>
          <div
            className="flex gap-2 mt-2 items-center cursor-pointer w-fit"
            onClick={() => window.history.back()}
          >
            <span className="text-[#BB6A37] text-base xl:text-lg font-medium">Go Back</span>
            {/* <img src={goback} alt="logo" className="w-4" /> */}
          </div>
        </div>
      </div>
      {/* <div className="relative pointer-events-none hidden md:block">
        <img src={notfound} alt="logo" className="max-w-[350px]" />
        <img
          src={errorText}
          alt="logo"
          className="2xl:max-w-[350px] absolute right-6 bottom-11"
        />
      </div> */}
    </div>
  )
}

export default NotFound
