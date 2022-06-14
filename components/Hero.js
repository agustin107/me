import Image from "next/image";

export function Hero() {
  return (
    <section className="flex justify-around items-center mt-5">
      <article className="">
        <h3 className="font-space font-bold">Agustin N. R. Ramirez</h3>
        <h5 className="font-space">Frontend Developer</h5>
      </article>
      <Image src="/img/me.png" height={512} width={512} />
    </section>
  )
}