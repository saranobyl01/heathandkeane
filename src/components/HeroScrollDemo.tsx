import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[200px] pt-[200px] bg-zinc-950">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-zinc-400 dark:text-zinc-400">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] text-white font-bold mt-1 leading-none">
                Global Sourcing
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3840&auto=format&fit=crop"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
