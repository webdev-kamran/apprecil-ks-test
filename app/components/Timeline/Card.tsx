"use client"
type Props = {
  title: string
  description: string
  tileColor?: string
  shadow: string
  isDark: boolean
  borderColor?: string
}

export default function Card({
  title,
  description,
  tileColor,
  shadow,
  isDark,
  borderColor,
}: Props) {
  return (
    <div
      className={`w-full max-w-md ${shadow} rounded-[12px] relative overflow-hidden z-0`}
    >
      <div className="flex flex-col gap-4 items-center pb-4 rounded-[12px]">
        <h1
          className={`${tileColor} w-full text-center text-[20px] lg:text-[32px] font-[500] border-4 lg:border-8 ${borderColor} xl:text-[32px] px-8 rounded-[12px] lg:rounded-2xl py-2 lg:py-3`}
        >
          {title}
        </h1>
        <p
          className={`text-center px-4 lg:px-16 text-[16px] lg:text-lg ${
            isDark ? 'text-white/70' : 'text-black/80'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
