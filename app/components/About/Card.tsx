"use client"
import Image from "next/image";
type Props = {
  title: string
  description: string
  image: string
  shadow?: string
  rounded?: string
  background?: string
  isDark: boolean
}

export default function Card({
  title,
  description,
  image,
  shadow,
  rounded,
  background,
  isDark,
}: Props) {
  return (
    <div
      className={`w-full md:h-[350px] xl:h-[330px] md:max-w-[400px] ${rounded} ${background} ${shadow} relative px-8 py-8 md:pb-10 lg:pb-20 overflow-hidden z-0`}
    >
      <Image width={100} height={100}
        src={image}
        alt="about_bg"
        className="absolute top-10 md:top-4 -left-3 md:-left-10 w-20 md:w-52 h-auto -z-10 opacity-5 md:opacity-[15%] pointer-events-none"
        onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          console.log("Right Click");
        }} draggable={false}
      />

      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-[500] xl:text-[32px] mb-2 xl:mb-4">
          {title}
        </h1>
        <p
          className={`text-center leading-7 ${
            isDark ? 'text-white/70' : 'text-black/60'
          } text-[16px]`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
