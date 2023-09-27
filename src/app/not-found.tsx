import MainLink from '@src/components/ui/main-link/MainLink'

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen text-white">
      <div className="flex flex-col items-center gap-5 bg-secondary bg-opacity-95 rounded-xl border-2 border-accent shadow-custom-sm shadow-accent p-10">
        <h2 className="font-bold tracking-wider text-3xl md:text-5xl">Hey!</h2>
        <p className="font-normal text-xl">It&apos;s a bad route ...</p>

        <MainLink
          type="primary"
          href="/"
          className="font-bold text-sm md:text-lg px-5 py-2"
        >
          <span className="flex gap-2 items-center text-secondary">
            <span>Come back</span>
          </span>
        </MainLink>
      </div>
    </section>
  )
}

export default NotFound
