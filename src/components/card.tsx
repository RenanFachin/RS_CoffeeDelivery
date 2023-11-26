import Image from 'next/image'

interface CardProps {
  coffee: {
    // id: string
    // title: string
    // description: string
    tags: string[]
    // price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  return (
    <div className="bg-base-card rounded-tr-lg rounded-bl-4xl px-6 pb-5 min-w-[256px] min-h-[310px] flex flex-col text-center">
      <Image
        src={coffee.image}
        alt=""
        width={120}
        height={120}
        className="-mt-5 self-center"
        quality={100}
      />

      <div className="mt-3 flex items-center gap-1 justify-center">
        {coffee.tags.map((coffeeTag) => {
          return (
            <span
              key={coffeeTag}
              className="bg-yellow-100 text-yellow-900 rounded-full uppercase text-xxs px-2 py-1 font-bold"
            >
              {coffeeTag}
            </span>
          )
        })}
      </div>
    </div>
  )
}
