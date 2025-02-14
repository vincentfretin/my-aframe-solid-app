import { A } from '@solidjs/router';

function Home() {
  return (
    <main class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#ef2d5e] text-white">
      <h1 class="text-3xl">Hello A-Frame!</h1>
      <A href="/room" class="underline">
        Go to room
      </A>
    </main>
  );
}
export default Home;
